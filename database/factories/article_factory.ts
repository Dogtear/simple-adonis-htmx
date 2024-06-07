import ArcticleTypes from '#enums/article_types'
import Article from '#models/article'
import factory from '@adonisjs/lucid/factories'
import { DateTime } from 'luxon'

export const ArticleFactory = factory
  .define(Article, async ({ faker }) => {
    return {
      title: faker.lorem.lines(1),
      summary: faker.lorem.sentence({ min: 3, max: 5 }),
      content: faker.lorem.paragraph(),
      typeId: ArcticleTypes.BLOG,
      publishDate: null,
    }
  })
  .state('blog', (row, { faker }) => {
    row.typeId = ArcticleTypes.BLOG
    row.publishDate = DateTime.fromJSDate(faker.date.past())
  })
  .state('article', (row, { faker }) => {
    row.typeId = ArcticleTypes.ARTICLE
    row.publishDate = DateTime.fromJSDate(faker.date.soon())
  })
  .build()
