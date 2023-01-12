import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pokemons from 'App/Models/Pokemons'

export default class PokemonController {
  public async index() {
    return Pokemons.all() //returining all of pokemons from DB
  }

  public async store({ request, response }: HttpContextContract) {
    //create a new pokemon
    Pokemons.create({
      name: request.input('name'),
      color: request.input('color'),
      description: request.input('description'),
    })
    return response.send('created')
  }

  public async read({ request, response, params}: HttpContextContract){
    //update a pokemon by id
    const pokemon = Pokemons.findOrFail(params.id)
    return pokemon
  }

  public async update({ request, response, params}: HttpContextContract){
    //update a pokemon by id
    const pokemon = Pokemons.findOrFail(params.id)
    return pokemon
  }
}
