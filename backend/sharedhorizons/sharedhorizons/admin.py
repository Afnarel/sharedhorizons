from django.contrib import admin
from . import models


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


class ChannelAdmin(admin.ModelAdmin):
    list_display = ('channel_id', 'name', 'category_name', 'img')
    list_filter = ('category',)
    search_fields = ('channel_id', 'name',)

    def category_name(self, obj):
        return obj.category.name

    def img(self, obj):
        return '<img src="{} width="42" height="42" />'.format(obj.media)

    img.allow_tags = True


class VideoAdmin(admin.ModelAdmin):
    list_display = ('videoId', 'channel_name', 'title', 'link', 'published_at')
    list_filter = ('published_at',)
    search_fields = ('videoId', 'title')

    def channel_name(self, obj):
        return obj.channel.name

    def link(self, obj):
        l = obj.url
        return '<a href="{}">{}</a>'.format(l, l)

    link.allow_tags = True


class ThumbnailAdmin(admin.ModelAdmin):
    list_display = ('video_id', 'label', 'width', 'height', 'img')
    list_filter = ('label',)
    search_fields = ('video__videoId',)

    def video_id(self, obj):
        return obj.video.videoId

    def img(self, obj):
        return '<img src="{}" height="42" width="42" />'.format(obj.url)

    img.allow_tags = True


admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Channel, ChannelAdmin)
admin.site.register(models.Video, VideoAdmin)
admin.site.register(models.Thumbnail, ThumbnailAdmin)
