from django.core.management.base import BaseCommand
from sharedhorizons.models import Video, Thumbnail, Channel
from tqdm import tqdm
import requests


URL = "https://www.googleapis.com/youtube/v3/search?key={key}&channelId={channel_id}&part=snippet,id&order=date&maxResults=20"  # noqa

API_KEY = "AIzaSyBICvdNQ6JDOpfyndXX4CzSL8WOYFxHXb0"


class Command(BaseCommand):

    def handle(self, *args, **options):
        channels = Channel.objects.filter(gender=Channel.MALE)
        channel_ids = channels.values_list("channel_id", flat=True)
        channels_map = {c.channel_id: c for c in channels.all()}

        pbar = tqdm(total=len(channel_ids), leave=True)
        for channel_id in channel_ids:
            # channel_id = "UC8cbWVUKfGS_HAmqkGT4sTg"
            self.process(channel_id, channels_map[channel_id])
            pbar.update(1)
        pbar.close()

    def process(self, channel_id, channel):
        f = open("error.log", "w")
        url = URL.format(key=API_KEY, channel_id=channel_id)
        res = requests.get(
            url, headers={'Content-type': 'application/json', 'Accept': '*/*'})
        data = res.json()
        try:
            for video in data["items"]:
                if "videoId" not in video["id"]:
                    continue
                # print(video)
                vid_obj, created = Video.objects.get_or_create(
                    videoId=video["id"]["videoId"],
                    defaults={
                        'published_at': video['snippet']['publishedAt'],
                        'title': video['snippet']['title'],
                        'description': video['snippet']['description'],
                        'channel': channel})
                if not created and not vid_obj.channel:
                    vid_obj.channel = channel
                    vid_obj.save()
                thumbnails = video['snippet']['thumbnails']
                for kind in ['default', 'medium', 'high']:
                    thumb, created = Thumbnail.objects.get_or_create(
                        video=vid_obj, label=kind, defaults={
                            'width': thumbnails[kind]['width'],
                            'height': thumbnails[kind]['height'],
                            'url': thumbnails[kind]['url']
                        })
                    if not created and not thumb.url:
                        thumb.url = thumbnails[kind]['url']
                        thumb.save()
        except KeyError:
            if 'error' in data:
                f.write("{} => {}".format(channel_id, str(data)))
            # print(data)
        f.close()
