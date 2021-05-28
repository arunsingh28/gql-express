const { buildSchema } = require('graphql')



module.exports = schema = buildSchema(`
    type Query{
        getPerson(id: Int!): Person
        getAllPerson: [Person]
    }

    type Mutation{
        updatePersonName(name:String!,id:Int!): Person
    }


    type Person{
        id: Int!,
        name: String!,
        sex: String!,

    }

`)


