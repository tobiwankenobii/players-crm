from dashboards.models import ChannelsStats, ServerStats, UsersStats, Activity
from rest_framework import serializers


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = ("name",)


class UsersStatsSerializer(serializers.ModelSerializer):
    activities = ActivitySerializer(many=True)

    class Meta:
        model = UsersStats
        fields = ("total_users", "online_users", "offline_users", "activities")


class ChannelsStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChannelsStats
        fields = ("total_voice_channels", "occupied_voice_channels", "empty_voice_channels", "voice_channels_users")


class ServerStatsSerializer(serializers.ModelSerializer):
    users_stats = UsersStatsSerializer()
    channels_stats = ChannelsStatsSerializer()

    class Meta:
        model = ServerStats
        fields = ("created", "users_stats", "channels_stats")
