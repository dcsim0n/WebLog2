# Amateur Radio Web Log
Web based amateur radio contact log built with node and express.

## ARWL can be run on a raspberry pi
1. `git clone`
2. `yarn install` or `npm install`
3. `npx sequelize-cli db:migrate`
4. `npx sequelize-cli db:seed:all`
5. `yarn start` or `npm start`
6. navigate to `localhost:3000` and start logging contacts