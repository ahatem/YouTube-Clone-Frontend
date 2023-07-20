import type { Video } from '@/models/Models'
import allVideos from '@/assets/videos_data.json'

export default class VideoRepository {
  private videos: Video[] = []

  constructor() {
    allVideos.forEach((video) => this.videos.push(video))
  }

  public getAllVideos(): Video[] {
    return this.videos
  }

  public findById(videoId: string): Video | undefined {
    return this.videos.find((video) => video.video_id === videoId)
  }
}
