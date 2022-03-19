When you want to quickly prototype API models in GraphQL SDL. 

Sort of like graphqleditor.com,
but where the SDL files are on your local machine, where you're using your favorite IDE
(not a clunkly SPA web page) to edit/modify GQL Schema SDL files.

# Configure
Configure the folder where the SDL files are located in `schema-config.js`.
This will recursively include all `.graphqls` files.

The SDL files can be anywhere on the host machine; they do not need
to be in this project.
```js
const config = {
    schemaRootFolder: '/Users/you/projects/super-secret/schema'
};

module.exports = config;
```

#Use
Fire up the nanobots.

### Install Dependencies
`$ yarn install`

### Run Schema Webservice
`$ yarn start`

### Use GraphiQL (GQL Schema Browser)
Use any GQL schema browser to inspect the API models. I recommend [GraphiQL](https://www.electronjs.org/apps/graphiql).
* Using GraphiQL, MacOS didn't trust the developer. I had to go to Finder, right click on GraphiQL, click 'Open', then trust it. 
* From there it wasn't an issue

Other candidates include:
* Apollo GraphQL Explorer
* GraphQL Playground
* [Voyager](https://apis.guru/graphql-voyager/)
  * Not bad, but I have to assemble the entire group of files and paste them on the screen. No thanks.
* ETC
