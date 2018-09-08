import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import cors from 'cors';

import typeDefs from './schema.graphql';
import resolvers from './resolvers';

import config from './config/database.config';
import Item from './models/Item';

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected to the ${config.db} database`);
    }
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

const PORT = process.env.PORT || 1337;

const app = express();
app.use(cors()); // enable cors
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({
    schema,
    context: {
        Item
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
});
