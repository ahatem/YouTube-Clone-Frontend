import type { Video } from '@/models/Models'
import type { VideoChannelDetails } from '@/models/Models'
import ChannelRepository from '@/repositories/ChannelRepository'
import VideoRepository from '@/repositories/VideoRepository'

export default class VideoService {
  private static instance: VideoService

  private videoRepo: VideoRepository
  private channelRepo: ChannelRepository

  private constructor() {
    this.videoRepo = new VideoRepository()
    this.channelRepo = new ChannelRepository()
  }

  public static getInstance(): VideoService {
    if (!VideoService.instance) {
      VideoService.instance = new VideoService()
    }
    return VideoService.instance
  }

  public findById(videoId: string): Video {
    return this.videoRepo.findById(videoId) as Video
  }

  public findByIdWithChannel(videoId: string): VideoChannelDetails {
    const video = this.findById(videoId)
    const channel = this.channelRepo.getVideoChannelById(videoId)
    return { ...video, channel }
  }
}
