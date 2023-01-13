import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pokemons from 'App/Models/Pokemons'

export default class PokemonController {
  public async index() {
    const pokemons = await Pokemons.all()
    return pokemons //returining all of pokemons from DB
  }

  public async store({ request, response }: HttpContextContract) {
    //create a new pokemon
    const pokemon = Pokemons.create({
      name: request.input('name'),
      color: request.input('color'),
      description: request.input('description'),
    })
    return pokemon
  }

  public async read({ request, response, params}: HttpContextContract){
    //update a pokemon by id
    const pokemon = Pokemons.findOrFail(params.id)
    return pokemon
  }

  public async update({ request, response, params}: HttpContextContract){
    //update a pokemon by id
    const pokemon = await Pokemons.findOrFail(params.id)
    pokemon.name = request.input('name')
    pokemon.color = request.input('color')
    pokemon.description = request.input('description')
    pokemon.save()
    return response.status(202).send(pokemon)
    //response status codes 200 : default . successful
    //response status codes 204 : no content
    //response status codes 202 : updated
  }

  public async delete({request, response, params}: HttpContextContract){

    const pokemon = await Pokemons.findOrFail(params.id)
    await pokemon.delete()
    return response.status(202).send(pokemon)
  }
}
