const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const schema = require('./schema/schema');
const resolvers = require('./resolvers/resolver');

const getTokens = require('./spotify/GetTokens');

