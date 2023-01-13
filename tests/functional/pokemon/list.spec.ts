import { test } from '@japa/runner'

test.group('Pokemon list', () => {
  test('get a paginated list of Pokemons', async ({ client }) => {
    const response = await client.get('/pokemon')
    console.log(response.body())
  })
})
