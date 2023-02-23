import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.status(200).json({ data: users })
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }
    return response.status(200).json({ data: user })
  }

  public async store({ request, response }: HttpContextContract) {
    console.log('request', request)
    const data = request.only([
      "name",
      "email",
      "role",
      "status",
      "password",
      "phone"
    ])
    // const data = request.only(['name', 'email', 'password',])
    const user = await User.create(data)
    return response.status(201).json({ data: user })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }
    user.name = request.input('name', user.name)
    user.id = request.input('id', user.id)
    user.email = request.input('email', user.email)
    user.password = request.input('password', user.password)
    user.phone = request.input('phone', user.phone)
    user.role = request.input('role', user.role)
    user.status = request.input('status', user.status)
    await user.save()
    return response.status(200).json({ data: user })
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)
    if (!user) {
      return response.status(404).json({ message: 'User not found' })
    }
    await user.delete()
    return response.status(204).json({ message: 'User deleted successfully' })
  }
}
