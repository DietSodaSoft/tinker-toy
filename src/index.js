const fs = require('fs');
const { ApolloServer } = require('apollo-server');
const { loadSchema } = require('@graphql-tools/load')
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader')

let rawconfig = fs.readFileSync('schema-config.json');
const config = JSON.parse(rawconfig);

const glob = config["schemaRootFolder"] + '/**/*.graphqls';
console.log("Looking for GQL Schema: " + glob);

loadSchema(glob, {
    loaders: [new GraphQLFileLoader()]
}).then(schema => {
    const server = new ApolloServer({
        schema,
        mocks: true, });

      return server.listen()
}).then(() => {
  console.log(`
    🚀  Server is running!
        Schema from ${glob}
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
})

