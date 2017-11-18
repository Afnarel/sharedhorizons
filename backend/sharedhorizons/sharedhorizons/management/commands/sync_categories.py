from django.core.management.base import BaseCommand
from sharedhorizons.crawler import crawl


class Command(BaseCommand):

    def handle(self, *args, **options):
        # crawl('categories')
        crawl('others')
