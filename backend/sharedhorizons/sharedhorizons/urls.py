from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    # Examples:
    # url(r'^$', 'sharedhorizons.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/docs/', include('rest_framework_swagger.urls')),
    url(r'^api/videos/?$', views.ListVideosView.as_view()),
    url(r'^api/(?P<channel_id>\w+)/videos/?$', views.ListUserVideosView.as_view())
]
