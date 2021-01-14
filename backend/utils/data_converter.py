from typing import List
from dashboards.models import Activity, ChannelsStats, ServerStats, UsersStats
import discord


class DiscordDataConverter:
    """
    Class for converting Discord's data into stats models
    """

    activity_types = {
        discord.ActivityType.listening: "Music",
        discord.ActivityType.streaming: "Streaming",
        discord.ActivityType.watching: "Watching",
    }

    @classmethod
    def convert_members(cls, members: List[discord.Member]) -> UsersStats:
        total_users = len(members)
        online_users = [member for member in members if member.status != discord.Status.offline]
        activities = [user.activities[0] for user in online_users if user.activities]
        activity_instances = [cls.convert_activity(activity).id for activity in activities]
        user_stats = UsersStats.objects.create(
            total_users=total_users,
            online_users=len(online_users),
            offline_users=total_users - len(online_users),
        )
        user_stats.activities.set(activity_instances)
        return user_stats

    @classmethod
    def convert_activity(cls, activity: discord.Activity) -> Activity:
        if not hasattr(activity, "type") or isinstance(activity, discord.CustomActivity):
            return cls._create_activity("Other")

        if predefined_activity := cls.activity_types.get(activity.type, None):
            return cls._create_activity(predefined_activity)

        if activity.type == discord.ActivityType.playing:
            name = getattr(activity, "name", "Other")
            return cls._create_activity(name)

        return cls._create_activity("Other")

    @classmethod
    def _create_activity(cls, name: str) -> Activity:
        return Activity.objects.get_or_create(name=name)[0]

    @classmethod
    def convert_channels(cls, channels: List[discord.abc.GuildChannel]) -> ChannelsStats:
        voice_channels = [channel for channel in channels if channel.type == discord.ChannelType.voice]
        total_voice_channels = len(voice_channels)
        occupied_voice_channels = [len(channel.members) for channel in voice_channels if len(channel.members) > 0]
        empty_voice_channels = total_voice_channels - len(occupied_voice_channels)
        voice_channels_users = sum(occupied_voice_channels)
        return ChannelsStats.objects.create(
            total_voice_channels=total_voice_channels,
            occupied_voice_channels=len(occupied_voice_channels),
            empty_voice_channels=empty_voice_channels,
            voice_channels_users=voice_channels_users,
        )

    @classmethod
    def create_server_stats(cls, user_stats: UsersStats, channels_stats: ChannelsStats):
        ServerStats.objects.create(users_stats=user_stats, channels_stats=channels_stats)
