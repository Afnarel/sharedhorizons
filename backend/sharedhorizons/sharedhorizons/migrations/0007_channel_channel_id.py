# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharedhorizons', '0006_video_channel'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel',
            name='channel_id',
            field=models.CharField(max_length=255, default=''),
            preserve_default=False,
        ),
    ]
