import asyncio
import discord
from os import environ


class DiscordBot:
    """
    Class for fetching data from Discord server
    """

    members: list
    channels: list

    def __init__(self):
        self.intents = discord.Intents.default()
        self.intents.members = True
        self.intents.presences = True

    def fetch_data(self):
        client = discord.Client(intents=self.intents)

        @client.event
        async def on_ready():
            self.members = list(client.get_all_members())
            self.channels = list(client.get_all_channels())
            await client.close()

        loop = asyncio.get_event_loop()
        try:
            loop.run_until_complete(client.start(environ.get("DISCORD_TOKEN")))
        except Exception as e:
            print("Error", e)
