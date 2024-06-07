import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { DateTime } from 'luxon'
import ArticleType from './article_type.js'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare typeId: number

  @column()
  declare summary: string

  @column()
  declare content: string

  @column.dateTime()
  declare publishDate: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => ArticleType, {
    foreignKey: 'typeId',
  })
  declare articleType: BelongsTo<typeof ArticleType>
}
