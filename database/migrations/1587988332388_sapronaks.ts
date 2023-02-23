import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SapronaksSchema extends BaseSchema {
  protected tableName = 'sapronaks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('name', 255).notNullable()
      table.dateTime('date_in').notNullable()
      table.dateTime('date_out').notNullable()
      table.string('type', 255).notNullable()
      table.string('amount_type', 255).notNullable()
      table.string('status', 255).notNullable()
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
