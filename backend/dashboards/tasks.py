from celery import shared_task

from utils import DiscordBot, DiscordDataConverter


@shared_task
def recalculate_server_data():
    """Task for fetching data from Discord server"""
    bot = DiscordBot()
    bot.fetch_data()
    converter = DiscordDataConverter
    converter.convert_members(bot.members)
    converter.convert_channels(bot.channels)
