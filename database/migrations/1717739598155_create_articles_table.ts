import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('type_id').unsigned().references('article_types.id').notNullable()
      table.string('title', 100).notNullable()
      table.string('summary', 200).notNullable().defaultTo('')
      table.text('content')

      table.timestamp('publish_date').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
