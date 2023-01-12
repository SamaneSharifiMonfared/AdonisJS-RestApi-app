/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
// import PokemonController from 'App/Controllers/Http/PokemonController'

Route.get('/pokemon', 'PokemonController.index') //Read list of Pokémon
Route.get('/pokemon/:id', 'PokemonController.read') //Read one of Pokémons with id
Route.post('/pokemon', 'PokemonController.store') //Create new Pokemon
Route.patch('/pokemon/update/:id', 'PokemonController.update') // update pokemon by id and the information in the request
Route.delete('/pokemon/delete/:id', 'PokemonController.delete') //Delete pokemon by id in the body request
