from .serializers import VideoSerializer
# from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Video


CATEGORIES = {
    'education': ['#Science', '#Histoire', '#Sexualité'],
    'culture': ['#Culture', '#Littérature', '#Cinéma', '#Séries', '#Musique',
                '#Art', '#Humour'],
    'society': ['#Société', '#Politique'],
    'competences': ['#Droit', '#Santé', '#DIY', '#Cuisine']
}


class ListVideosView(APIView):
    """List of videos"""
    serializer_class = VideoSerializer
    # permission_classes = (IsAuthenticated,)
    # pagination_class = None

    def get(self, request):
        trending = Video.objects.order_by('-published_at').all()[:20]
        data = {
            'trending': VideoSerializer(trending, many=True).data
        }
        for category, subcategories in CATEGORIES.items():
            videos = Video.objects.filter(
                channel__category__name__in=subcategories).order_by('?')[:20]
            data[category] = VideoSerializer(videos, many=True).data
        return Response(data, status=status.HTTP_200_OK)


class ListUserVideosView(APIView):
    """List of user videos"""
    serializer_class = VideoSerializer
    # permission_classes = (IsAuthenticated,)
    # pagination_class = None

    def get(self, request, channel_id):
        videos = Video.objects.filter(
            channel__channel_id=channel_id).all()[:50]
        data = {
            'videos': VideoSerializer(videos, many=True).data
        }
        return Response(data, status=status.HTTP_200_OK)
