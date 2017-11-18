from rest_framework import serializers
from django.contrib.humanize.templatetags.humanize import naturaltime
from random import randint
from .models import Video


class VideoSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    channel_id = serializers.SerializerMethodField()
    nb_views = serializers.SerializerMethodField()
    published_date = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    thumbnail = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()
    length = serializers.SerializerMethodField()
    gender = serializers.SerializerMethodField()

    def get_author(self, video):
        return video.channel.name

    def get_gender(self, video):
        return video.channel.gender

    def get_channel_id(self, video):
        return video.channel.channel_id

    def get_nb_views(self, video):
        return "2.8M"

    def get_published_date(self, video):
        return naturaltime(video.published_at)

    def get_category(self, video):
        return video.channel.category.name

    def get_thumbnail(self, video):
        return video.thumbnails.get(label="medium").url

    def get_url(self, video):
        return video.url

    def get_length(self, video):
        return "{}:{}".format(
            str(randint(0, 59)).zfill(2), str(randint(0, 59)).zfill(2))

    class Meta:
        model = Video
        fields = (
            'title',
            'author',
            'gender',
            'channel_id',
            'nb_views',
            'published_date',
            'description',
            'category',
            'thumbnail',
            'url',
            'length'
        )
