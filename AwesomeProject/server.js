const express = require('express');
const bodyParser = require('body-parser');
const { apolloExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const schema = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const getTokens = require('./spotify/GetTokens');


const PORT = 8080;
const app = express();


const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers,
  });
  
  app.get('/profile', (req, res, next) =>{
      getTokens();


  });

  app.use('/graphql', bodyParser.json(), apolloExpress({
    schema: executableSchema,
  }));
  
  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));
  
  app.listen(PORT, () => console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`
  ));

