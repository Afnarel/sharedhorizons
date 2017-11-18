import sys
from bs4 import BeautifulSoup
if sys.version_info[0] < 3:
    from urllib import urlopen
else:
    from urllib.request import urlopen


class DifferentLengthsException(Exception):
    def __init__(self, message, errors):
        super(DifferentLengthsException, self).__init__(message)
        self.message = "The search strings return different numbers of results"


class Scraper(object):
    def __init__(self, url=None):
        if url is not None:
            self.open(url)

    def open(self, url):
        page = urlopen(url)
        self.data = BeautifulSoup(page.read(), "html.parser")

    def load_data(self, data):
        self.data = data

    def retrieve(self, search):
        elements = search.split('>')
        data_sources = [self.data]
        while elements:
            tag, filters, attr, nth = self.parse_element(elements.pop(0))
            results = []
            for data_source in data_sources:
                if tag is None:
                    results.append(data_source)
                elif nth is not None:
                    results.extend(
                        data_source.findAll(tag, **filters)[nth:nth+1])
                else:
                    results.extend(data_source.findAll(tag, **filters))

            # If there is no match, return an empty list
            if not results:
                return []

            # If an attribute was specified for this element,
            # return this attribute instead of the element
            if attr:
                # If an index is specified, split the attr and the index
                if '[' in attr and ']' in attr:
                    index = int(attr[attr.index('[')+1:attr.index(']')])
                    attr = attr[:attr.index('[')]
                else:
                    index = None

                # Get the attr instead of the element
                if attr in ['string']:
                    data_sources = [getattr(r, attr).strip() for r in results]
                elif attr in ['contents']:
                    data_sources = [getattr(r, attr)[0].strip()
                                    for r in results]
                elif attr in ['strings']:
                    data_sources = []
                    for r in results:
                        strings = [s.strip() for s in r.strings]
                        if index is None:
                            data_sources.append(strings)
                        elif index < len(strings):
                            data_sources.append(strings[index])
                        else:
                            data_sources.append(None)
                else:
                    data_sources = [r[attr].strip() for r in results]
            else:
                data_sources = results
        return data_sources

    def select(self, search):
        return self.data.select(search)

    def parse_element(self, element):
        elem = element.strip()
        attr = None

        if '.' in elem:
            elem, attr = elem.split('.')

        if not elem:
            tag, params, nth = None, {}, None
        elif '[' not in elem:
            tag, params, nth = elem, {}, None
        else:
            tag = elem[:elem.index('[')]
            param = elem[elem.index('[')+1:-1]
            if '=' in param:  # This is a parameter
                k, v = param.split('=')
                params, nth = {k: v}, None
            else:  # This is an index
                params, nth = {}, int(param)

        return tag, params, attr, nth

    def retrieve_multiple(self, searchstrings):
        all_results = []
        for searchstring in searchstrings:
            results = self.select(searchstring)  # Using select
            # results = self.retrieve(searchstring)  # Using retrieve
            all_results.append(results)

        length = min([len(r) for r in all_results])
        for result in all_results:
            if len(result) != length:
                raise DifferentLengthsException()

        return length, all_results

    def retrieve_multiple_it(self, searchstrings):
        length, all_results = self.retrieve_multiple(searchstrings)
        for i in range(length):
            yield (results[i] for results in all_results)

    def retrieve_multiple_dict(self, searchstrings):
        names = list(searchstrings.keys())
        length, all_results = self.retrieve_multiple(
            [searchstrings[name] for name in names])
        for i in range(length):
            d = {}
            for j in range(len(names)):
                d[names[j]] = all_results[j][i]
            yield d


if __name__ == '__main__':
    if len(sys.argv) != 3:
        print("Usage: %s url searchstring" % sys.argv[0])
        sys.exit(-1)

    url, searchstrings = sys.argv[1], sys.argv[2].split(' ')
    # print("URL: %s" % url)
    # print("Search strings:")
    # for searchstring in searchstrings:
    #   print("\t* %s" % searchstring)

    scraper = Scraper(url)
    for result_set in scraper.retrieve_multiple_it(searchstrings):
        print(";".join([str(a) for a in result_set]))

    ############
    # Examples #
    ############

    # url = 'https://catwell.info/booklist/'
    # scraper = Scraper(url)
    # scraper.select("html > body > #container > #books > .book > h3 > a")
    # scraper.retrieve('h3')
    # scraper.retrieve('div[class_=book]>div[class=cover]>a>img.src')

    # url = 'http://www.festival-cannes.com/fr/selection/cinema-de-la-plage'
    # scraper.open(url)
    # scraper.retrieve("h3[class_=title-item]>a.string")
    # scraper.retrieve("p[class_=description-item].contents")

    # scraper.retrieve("h3[class_=title-item]>a.string\
    # scraper.retrieve("p[class_=description-item].contents")
