import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.isAuthenticated) {
      return 'You are not authorized to access this resource'
    }

    await next()
  }
}
