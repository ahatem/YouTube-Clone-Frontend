export interface User {
  username: string
  email: string
  password: string
  profile: {
    name: string
    avatar: string
  }
  interests: string[]
  channels: string[]
}

export interface Channel {
  channel_id: string
  title: string
  description: string
  avatar: string
  cover: string
  is_verified: boolean
  videos: string[]
  subscribers: string[]
}

export interface Category {
  category_id: string
  name: string
}

export interface Video {
  video_id: string
  title: string
  description: string
  thumbnail_url: string
  upload_date: string
  views_count: number
  likes_count: number
  length: number
  categories: string[]
}

export interface Comment {
  comment_id: string
  user_id: string
  video_id: string
  comment_text: string
  comment_date: string
}

export interface VideoChannelDetails extends Video {
  channel: Channel
}
