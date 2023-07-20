import type { Channel } from '@/models/Models'
import allChannels from '@/assets/channels_data.json'

export default class ChannelRepository {
  private channels: Channel[] = []

  constructor() {
    allChannels.forEach((channel) => this.channels.push(channel))
  }

  public getVideoChannelById(videoId: string): Channel {
    return this.channels.filter((channel) => channel.videos.includes(videoId))[0]
  }

  public findById(channelId: string): Channel {
    return this.channels.find((channel) => channel.channel_id == channelId)!
  }
}
