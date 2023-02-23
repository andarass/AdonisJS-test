import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class Kandang extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public type: string

  @column()
  public status: boolean

  @column()
  public address: string

  @column()
  public city: string

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
  public static async hashPassword (kandang: Kandang) {
    if (kandang.$dirty.password) {
      kandang.password = await Hash.make(kandang.password)
    }
  }
}
