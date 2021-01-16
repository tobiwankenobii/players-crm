from dashboards.models import ServerStats
from dashboards.api.serializers import ServerStatsSerializer
from rest_framework.viewsets import ReadOnlyModelViewSet


class DailyStatsViewSet(ReadOnlyModelViewSet):
    queryset = ServerStats.objects.all()
    serializer_class = ServerStatsSerializer
