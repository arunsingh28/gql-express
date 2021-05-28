const app = require('express')()
const { graphqlHTTP } = require('express-graphql')

const Schema = require('./schema')
const { root } = require('./resolver')


app.use('/gql', graphqlHTTP({
    schema: Schema,
    rootValue: root,
    graphiql: true
}))

const PORT = process.env.PORT || 3000

app.listen(PORT, (console.log(`server running on PORT${PORT}`)))
