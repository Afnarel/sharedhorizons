from django import http
from django.conf import settings

try:
    XS_SHARING_ALLOWED_ORIGINS = settings.XS_SHARING_ALLOWED_ORIGINS
    XS_SHARING_ALLOWED_METHODS = settings.XS_SHARING_ALLOWED_METHODS
    XS_SHARING_ALLOWED_HEADERS = settings.XS_SHARING_ALLOWED_HEADERS
    XS_SHARING_ALLOWED_CREDENTIALS = settings.XS_SHARING_ALLOWED_CREDENTIALS
except AttributeError:
    XS_SHARING_ALLOWED_ORIGINS = '*'
    XS_SHARING_ALLOWED_METHODS = ['POST', 'GET', 'OPTIONS',
                                  'PUT', 'PATCH', 'DELETE']
    XS_SHARING_ALLOWED_HEADERS = ['X-Requested-With', 'Content-Type',
                                  'Authorization', 'Mobile-Version', '*']
    XS_SHARING_ALLOWED_CREDENTIALS = 'true'


class XsSharing(object):
    """
    This middleware allows cross-domain XHR using the html5 postMessage API.

    Access-Control-Allow-Origin: http://foo.example
    Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE

    Based off https://gist.github.com/426829
    """
    def process_request(self, request):
        if 'HTTP_ACCESS_CONTROL_REQUEST_METHOD' in request.META:
            response = http.HttpResponse()
            origin = self.get_origin(request)
            if origin is not None:
                response['Access-Control-Allow-Origin'] = origin

            response['Access-Control-Allow-Methods'] = ",".join(
                XS_SHARING_ALLOWED_METHODS)
            response['Access-Control-Allow-Headers'] = ",".join(
                XS_SHARING_ALLOWED_HEADERS)
            response['Access-Control-Allow-Credentials'] = \
                XS_SHARING_ALLOWED_CREDENTIALS
            return response
        return None

    def process_response(self, request, response):
        origin = self.get_origin(request)
        if origin is not None:
            response['Access-Control-Allow-Origin'] = origin

        response['Access-Control-Allow-Methods'] = ",".join(
            XS_SHARING_ALLOWED_METHODS)
        response['Access-Control-Allow-Headers'] = ",".join(
            XS_SHARING_ALLOWED_HEADERS)
        response['Access-Control-Allow-Credentials'] = \
            XS_SHARING_ALLOWED_CREDENTIALS
        return response

    def get_origin(self, request):
        origin = request.META.get('HTTP_ORIGIN', "")
        return origin
