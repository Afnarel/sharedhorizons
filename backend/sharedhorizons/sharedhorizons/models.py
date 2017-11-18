from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Channel(models.Model):
    FEMALE = "female"
    MALE = "male"

    GENDERS = (
        (FEMALE, "Female"),
        (MALE, "Male")
    )

    channel_id = models.CharField(max_length=255)
    category = models.ForeignKey(Category, related_name='channels')
    name = models.CharField(max_length=255)
    description = models.TextField()
    media = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=GENDERS)

    def __str__(self):
        return self.name


class Video(models.Model):
    channel = models.ForeignKey(Channel, null=True)
    videoId = models.CharField(max_length=255)
    published_at = models.DateTimeField()
    title = models.CharField(max_length=255)
    description = models.TextField()

    @property
    def url(self):
        return "http://www.youtube.com/watch?v={video_id}".format(
            video_id=self.videoId)

    def __str__(self):
        return self.title


class Thumbnail(models.Model):
    video = models.ForeignKey(Video, related_name="thumbnails")
    url = models.CharField(max_length=255)
    label = models.CharField(max_length=20)
    width = models.IntegerField()
    height = models.IntegerField()

    def __str__(self):
        return "{} ({})".format(self.video.title, self.label)
