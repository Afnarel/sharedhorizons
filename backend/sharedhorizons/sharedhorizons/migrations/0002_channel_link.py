# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sharedhorizons', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='channel',
            name='link',
            field=models.CharField(max_length=255, default=''),
            preserve_default=False,
        ),
    ]
