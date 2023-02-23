import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('phone', 255).nullable()
      table.boolean('status').notNullable()
      table.string('role', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('remember_me_token').nullable()
      table.string('created_by', 255).notNullable()
      table.string('updated_by', 255).nullable()
      table.dateTime("deleted_at").defaultTo(null)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
