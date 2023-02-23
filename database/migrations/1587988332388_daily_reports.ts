import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DailyReportsSchema extends BaseSchema {
  protected tableName = 'daily_reports'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('depletion', 255).notNullable()
      table.string('feed_intake', 255).notNullable()
      table.string('avg_bw', 255).notNullable()
      table.string('remember_me_token').nullable()
      table.string('created_by', 255).notNullable()
      table.string('updated_by', 255).notNullable()
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
