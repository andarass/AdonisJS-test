import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class Daily_Report extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ isPrimary: true })
  public depletion: number

  @column({ isPrimary: true })
  public feed_intake: number

  @column({ isPrimary: true })
  public avg_bw: number

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

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
  public static async hashPassword (dailyReport: Daily_Report) {
    if (dailyReport.$dirty.password) {
      dailyReport.password = await Hash.make(dailyReport.password)
    }
  }
}
