from celery import shared_task
from django.db import transaction
from utils import DiscordBot, DiscordDataConverter


@shared_task
def recalculate_server_data():
    """Task for fetching data from Discord server"""
    bot = DiscordBot()
    bot.fetch_data()
    converter = DiscordDataConverter
    with transaction.atomic():
        members_stats = converter.convert_members(bot.members)
        channels_stats = converter.convert_channels(bot.channels)
        converter.create_server_stats(members_stats, channels_stats)
