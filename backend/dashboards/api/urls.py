from rest_framework import routers
from .views import DailyStatsViewSet


router = routers.DefaultRouter()

router.register(r"api/daily_stats", DailyStatsViewSet, basename="daily_stats")

urlpatterns = router.urls
