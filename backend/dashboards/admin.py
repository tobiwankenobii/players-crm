from django.contrib import admin
from .models import ServerStats, UsersStats, ChannelsStats


admin.site.register(ServerStats)
admin.site.register(UsersStats)
admin.site.register(ChannelsStats)
