# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharedhorizons', '0007_channel_channel_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='gender',
            field=models.PositiveSmallIntegerField(default=1, choices=[(1, 'Female'), (2, 'Male')]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='thumbnail',
            name='video',
            field=models.ForeignKey(related_name='thumbnails', to='sharedhorizons.Video'),
        ),
    ]
