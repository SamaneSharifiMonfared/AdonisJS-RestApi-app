# AdonisJS-RestApi-app-**CRUD Pokemon API**
    POST will allow users to Create Data

    GET will allow users to Read Data

    PUT/PATCH will allow users to entirely or partially Update Data

    DELETE will allows users to Delete Data


<div class="col-2"><img src="CRUD.jpg"></img></div>
This is a Rest API application using CRUD methodology (create,read,update,delete)
The main propose of this app is to simply create, read, update and delete Pokemons using endpoints.
<br>
I have used Adonis JS for structure of this project (Which is something like Laravel to PHP).
<br>
<br>
Database Installation:
npm i @adonisjs/lucid <br> node ace configure @adonisjs/lucid ->to configure (I choose MYSQL)

to test the api, I have used postman locally and afterward using AdonisJS defined tests and ran:

defining a simple test:
node ace make:test functional pokemon/list  --> Read list of Pokémon


run the tests I have wrote:
node ace test --watch

<b>References:</b><br>
Installation:<br>
https://medium.com/@andrewm.enoe/create-a-pokemon-api-using-node-express-knex-postgresql-5e5c88ae650b
<br>
Process:<br>
https://www.youtube.com/watch?v=bJCGbgJs6dU&t=1212s
<br>
Testing:
<br>
https://docs.adonisjs.com/guides/testing/http-tests#document
