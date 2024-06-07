import ArticleType from '#models/article_type'

export default class ArticleTypeServies {
  static async getAllArticleTypes() {
    const articleTypes = await ArticleType.all()
    return articleTypes
  }
}
