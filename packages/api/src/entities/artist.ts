import { prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

@ObjectType()
export class Artist {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  slug: string

  @Field()
  @prop({ required: true })
  title: string
}

export const ArtistModel = getModelForClass(Artist)
