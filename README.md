## FeathersJs + NextJs + MongoDB - Mongoose Boilerplate

User `yarn start` to spin the dev server which includes `FeathersJs` and `NextJs`. Check other commands in package.json file.
___

Uses React Contextual API and Hooks for state management. 

### Routes

- POST : `/authentication` for login (get jwt token)
- POST : `/users` for registration
- GET : `/users` for list of users 
- GET : `/users/{ID}` for specific user 

##### Redirects
- Login user redirect to `"/"` details on `client/pages/auth/login.js`

##TODO

- withAuth - to conditionally serve pages that required authentication.
