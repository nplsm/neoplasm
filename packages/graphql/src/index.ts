import "reflect-metadata"
import { connect } from "mongoose"
import { buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"

import { ItemResolver } from "./resolvers/item"
import { ArtistResolver } from "./resolvers/artist"
import { ArtistAliasResolver } from "./resolvers/artist-alias"
import { ReleaseResolver } from "./resolvers/release"
import { TrackResolver } from "./resolvers/track"

import { seedDatabase } from "./helpers"
import { TypegooseMiddleware } from "./typegoose-middleware"

const PORT = process.env.PORT
const MONGO_DB_URL = process.env.MONGO_DB_URL

async function bootstrap() {
  try {
    const mongoose = await connect(MONGO_DB_URL)

    await mongoose.connection.db.dropDatabase()
    await seedDatabase()

    const schema = await buildSchema({
      resolvers: [
        ItemResolver,
        ArtistResolver,
        ArtistAliasResolver,
        ReleaseResolver,
        TrackResolver,
      ],
      globalMiddlewares: [TypegooseMiddleware],
      validate: false,
    })

    const server = new ApolloServer({
      schema,
      playground: true,
    })

    const { url } = await server.listen(PORT)
    console.log(`Server is running, GraphQL Playground available at ${url}`)
  } catch (err) {
    console.error(err)
  }
}

bootstrap()
