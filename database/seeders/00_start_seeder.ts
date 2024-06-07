import ArcticleTypes from '#enums/article_types'
import ArticleType from '#models/article_type'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ArticleType.createMany([
      {
        id: ArcticleTypes.BLOG,
        name: 'Blog',
      },
      {
        id: ArcticleTypes.ARTICLE,
        name: 'Article',
      },
    ])
  }
}
