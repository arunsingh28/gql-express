const app = require('express')()
const { graphqlHTTP } = require('express-graphql')

const Schema = require('./schema')
const { root } = require('./resolver')


app.use('/gql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))


app.listen(3000, (console.log('server running...')))