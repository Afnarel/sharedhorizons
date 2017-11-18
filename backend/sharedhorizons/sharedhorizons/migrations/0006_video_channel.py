# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharedhorizons', '0005_thumbnail_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='channel',
            field=models.ForeignKey(null=True, to='sharedhorizons.Channel'),
        ),
    ]
