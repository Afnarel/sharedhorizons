from .models import Channel, Category
from .scraper import Scraper
from django.conf import settings


# BASE_URL = "https://www.lesinternettes.com/internettes-explorer?q=&hPP=10&idx=channel&p={}"  # noqa


SEARCHSTRINGS = {
    "image": 'div[class="hit-image"] > img[src]',
    "link": 'div[class="hit-content"] > a[href]',
    "name": 'div[class="hit-content"] > a > h2',
    "category": 'div[class="hit-content"] > p[class="hit-cat"]',
    "description": 'div[class="hit-content"] > p.hit-description'
}


def crawl(what):
    if what != 'categories':
        categories = {c.name: c for c in Category.objects.all()}

    scraper = Scraper(
        "file://{}/sharedhorizons/page.html".format(settings.BASE_DIR))
    for d in scraper.retrieve_multiple_dict(SEARCHSTRINGS):
        print(d)
        category = d['category'].text
        if what == 'categories':
            Category.objects.get_or_create(name=category)
        else:
            cat = categories[category]
            image = d['image']['src']
            link = d['link']['href']
            name = d['name'].text
            description = d['description'].text
            Channel.objects.get_or_create(
                category=cat, media=image, name=name, description=description,
                link=link)
