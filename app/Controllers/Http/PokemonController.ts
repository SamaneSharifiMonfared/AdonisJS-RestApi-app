import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pokemons from 'App/Models/Pokemons'

export default class PokemonController {
  public async index() {
    return Pokemons.all()
  }
  public async store({ request, response }: HttpContextContract) {
    Pokemons.create({
      name: request.input('name'),
      color: request.input('color'),
      description: request.input('description'),
    })
    return response.send('created')
  }
}
