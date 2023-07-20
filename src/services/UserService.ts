import type { Category, VideoChannelDetails } from '@/models/Models'
import CategoryRepository from '@/repositories/CategoryRepository'
import ChannelRepository from '@/repositories/ChannelRepository'
import VideoRepository from '@/repositories/VideoRepository'
import { faker } from '@faker-js/faker'

export default class UserService {
  private static _instance: UserService

  private channelRepo: ChannelRepository
  private videoRepo: VideoRepository
  private categoryRepo: CategoryRepository

  private constructor() {
    this.channelRepo = new ChannelRepository()
    this.videoRepo = new VideoRepository()
    this.categoryRepo = new CategoryRepository()
  }

  public static getInstance() {
    if (!UserService._instance) UserService._instance = new UserService()
    return UserService._instance
  }

  getHomePageFeeds(): { categories: Category[]; videos: VideoChannelDetails[] } {
    const videos: VideoChannelDetails[] = this.videoRepo.getAllVideos().map((video) => {
      const channel = this.channelRepo.getVideoChannelById(video.video_id)
      return { ...video, channel }
    })

    const newVideos = faker.helpers.shuffle(videos) as VideoChannelDetails[]
    const categories = this.categoryRepo.fromVideos(newVideos)

    return { categories, videos: newVideos }
  }

  getRecommendations(video: VideoChannelDetails): {
    categories: Category[]
    videos: VideoChannelDetails[]
  } {
    const videos: VideoChannelDetails[] = this.videoRepo
      .getAllVideos()
      .map((video) => {
        const channel = this.channelRepo.getVideoChannelById(video.video_id)
        return { ...video, channel }
      })
      .filter((v) => v.video_id !== video.video_id)

    const newVideos = faker.helpers.shuffle(videos) as VideoChannelDetails[]
    const categories = this.categoryRepo.fromVideos(newVideos)

    return { categories, videos: newVideos }
  }
}
