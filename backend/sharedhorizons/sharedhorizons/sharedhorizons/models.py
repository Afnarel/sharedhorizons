from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)


class Channel(models.Model):
    category = models.ForeignKey(Category, related_name='channels')
    name = models.CharField(max_length=255)
    description = models.TextField()
    media = models.CharField(max_length=255)
