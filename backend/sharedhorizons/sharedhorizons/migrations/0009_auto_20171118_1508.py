# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharedhorizons', '0008_auto_20171118_1503'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='gender',
        ),
        migrations.AddField(
            model_name='channel',
            name='gender',
            field=models.CharField(max_length=10, default='female', choices=[('female', 'Female'), ('male', 'Male')]),
            preserve_default=False,
        ),
    ]
