

// __.Module('web')  //__.xmap(['bc', 'ok'], ['Trades', 'Ticker', 'Depth'], (k, j) => k + j)
// .mongo( ['bcTradesClean', 'okTradesClean', 'Depth'] )
// .build()

import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import { Sequelize } from 'sequelize'

const db = new Sequelize('app', "root", null, { host: 'localhost', dialect: 'mysql' })

const PostModel = db.define('post', {
    content: { type: Sequelize.STRING }
  , views:   { type: Sequelize.INTEGER }
}, { timestamps: false })
db.sync()

createApolloServer({
    schema: makeExecutableSchema({
        typeDefs: `
            type Postt {
                id: Int
                content: String
                views: Int
            }
            type Query {
                posts (views: Int): [Postt]
                say: String
            }
            schema {
                query: Query
            }`,
        resolvers: {
           Query: {
               posts: (_, args) => db.models.post.findAll({where: args})
             , say: (root, args, context) => 'hello world2'
           }
        },
    })  })
