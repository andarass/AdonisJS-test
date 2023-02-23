import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class Daily_Log extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public login: DateTime

  @column()
  public logout: DateTime

  @column()
  public id_user: number

  @column()
  public id_kandang: number

  @column()
  public id_mitra: number

  @column()
  public reason: string

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
  public static async hashPassword (dailyLog: Daily_Log) {
    if (dailyLog.$dirty.password) {
      dailyLog.password = await Hash.make(dailyLog.password)
    }
  }
}
