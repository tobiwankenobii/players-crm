from django.db import models


class Activity(models.Model):
    """
    Simple model for storing User's activities.
    """

    name = models.TextField()

    def __str__(self):
        return self.name


class ServerStatus(models.Model):
    """
    Periodically selected values from the server.
    """

    created = models.DateTimeField(auto_now_add=True)
    total_users = models.IntegerField()
    offline_users = models.IntegerField()
    voice_chat_users = models.IntegerField()
    empty_voice_chats = models.IntegerField()
    activities = models.ManyToManyField(Activity)

    def __str__(self):
        return str(self.created)
