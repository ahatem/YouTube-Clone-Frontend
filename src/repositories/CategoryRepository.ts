import type { Category, Video } from '@/models/Models'
import allCategories from '@/assets/categories_data.json'

export default class CategoryRepository {
  private categories: Category[] = []

  constructor() {
    allCategories.forEach((category) => this.categories.push(category))
  }

  fromVideos(videos: Video[]): Category[] {
    const categoryIds: string[] = videos.flatMap((video) => video.categories)
    const uniqueCategoryIds: string[] = [...new Set(categoryIds)]
    const result: (Category | undefined)[] = uniqueCategoryIds.map((categoryId) =>
      this.categories.find((category) => category.category_id === categoryId)
    )
    return result.filter(Boolean) as Category[]
  }
}
