import { ArticleFactory } from '#database/factories/article_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await ArticleFactory.apply('article').createMany(10)
    await ArticleFactory.apply('blog').createMany(20)
  }
}
