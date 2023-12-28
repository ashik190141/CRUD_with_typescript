## The project locally run on port 5000
In package.json, there is a script "start:dev"="ts-node-dev --respawn --transpile-only src/server.ts" and a build script "build":"tsc". If you run the project locally write the command ---- npm run start:dev

## For running the server command
npm run start:dev
write the command and click enter button. The server start with port 5000. 

## For creating a user. Post operation
The api is "http://localhost:5000/api/users/"

## For getting all users. Get operation
The api is "http://localhost:5000/api/users/"

## For updating a user. Put operation
The api is "http://localhost:5000/api/users/:userId"

## For deleting a user. Delete operation
The api is "http://localhost:5000/api/users/:userId"

## For adding an order to a specific user. Put operation
The api is "http://localhost:5000/api/users/:userId/orders"

## For getting order to a specific user. Get operation
The api is "http://localhost:5000/api/users/:userId/orders"

## For getting total price to a specific user. Get operation
The api is "http://localhost:5000/api/users/:userId/orders/total-price"