from users.api.serializers import UserSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.contrib.auth.models import User


class UserViewSet(ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
