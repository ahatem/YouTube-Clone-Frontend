import type { Channel } from '@/models/Models'
import ChannelRepository from '@/repositories/ChannelRepository'

export default class ChannelService {
  private static instance: ChannelService

  private channelRepo: ChannelRepository

  private constructor() {
    this.channelRepo = new ChannelRepository()
  }

  public static getInstance(): ChannelService {
    if (!ChannelService.instance) {
      ChannelService.instance = new ChannelService()
    }
    return ChannelService.instance
  }

  public findById(channelId: string): Channel {
    const id = channelId.replace('@', '')
    return this.channelRepo.findById(id)
  }
}
