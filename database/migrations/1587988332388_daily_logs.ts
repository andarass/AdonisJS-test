import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DailyLogsSchema extends BaseSchema {
  protected tableName = 'daily_logs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('login', 255).notNullable()
      table.string('logout', 255).notNullable()
      table.integer('id_user', 255).notNullable()
      table.integer('id_kandang', 255).notNullable()
      table.integer('id_mitra', 255).notNullable()
      table.string('reason', 255).notNullable()
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
