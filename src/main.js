import {graphql} from 'graphql';
import {resolvers, schema} from './schema';

graphql(schema, '{ hello }', resolvers)
    .then((response) => {
        console.log(response);
    })
;