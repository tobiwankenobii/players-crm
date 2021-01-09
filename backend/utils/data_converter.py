class DiscordDataConverter:
    """
    Class for converting Discord's data into stats models
    """

    @classmethod
    def convert_members(cls, members):
        for mem in members:
            print(mem)

    @classmethod
    def convert_channels(cls, channels):
        for chan in channels:
            print(chan)
