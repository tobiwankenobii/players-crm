from django.db import models


class Activity(models.Model):
    """
    Simple model for storing User's activities.
    """

    name = models.TextField()

    def __str__(self):
        return self.name


class UsersStats(models.Model):
    """
    Model for storing User's related numbers
    """

    total_users = models.IntegerField()
    online_users = models.IntegerField()
    offline_users = models.IntegerField()
    activities = models.ManyToManyField(Activity)

    def __str__(self):
        return f"{self.server_stats} | T {self.total_users} | ON {self.online_users} | OFF {self.offline_users}"


class ChannelsStats(models.Model):
    """
    Model for storing Channels related numbers
    """

    total_voice_channels = models.IntegerField()
    occupied_voice_channels = models.IntegerField()
    empty_voice_channels = models.IntegerField()
    voice_channels_users = models.IntegerField()

    def __str__(self):
        return f"{self.server_stats} | T {self.total_voice_channels} | ON {self.occupied_voice_channels} | OFF {self.empty_voice_channels} | U {self.voice_channels_users}"


class ServerStats(models.Model):
    """
    Periodically selected values from the server.
    """

    created = models.DateTimeField(auto_now_add=True)
    users_stats = models.OneToOneField(UsersStats, models.CASCADE, related_name="server_stats")
    channels_stats = models.OneToOneField(ChannelsStats, on_delete=models.CASCADE, related_name="server_stats")

    def __str__(self):
        return str(self.created.strftime("%Y-%m-%dT%H:%M"))
