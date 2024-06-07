// import type { HttpContext } from '@adonisjs/core/http'

import ArticleServies from '#services/article_service'
import ArticleTypeServies from '#services/article_type_service'
import { HttpContext } from '@adonisjs/core/http'

export default class ArticlesController {
  async index({ view }: HttpContext) {
    const articles = await ArticleServies.getAllArticles()
    const articleTypes = await ArticleTypeServies.getAllArticleTypes()

    return view.render('pages/home', { articles, articleTypes })
  }
}
