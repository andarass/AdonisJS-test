import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class Sapronak extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public name: string

  @column()
  public date_in: DateTime

  @column()
  public date_out: DateTime

  @column()
  public type: string

  @column()
  public amount: number

  @column()
  public amount_type: string

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public deleted_at: DateTime

  @column()
  public created_by: string

  @column()
  public updated_by: string

  @beforeSave()
  public static async hashPassword (sapronak: Sapronak) {
    if (sapronak.$dirty.password) {
      sapronak.password = await Hash.make(sapronak.password)
    }
  }
}
