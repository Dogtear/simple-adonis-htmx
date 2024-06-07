import Article from '#models/article'

export default class ArticleServies {
  static async getAllArticles() {
    const articles = await Article.all()

    return articles
  }

  static async handleFilterArticle() {}
}
