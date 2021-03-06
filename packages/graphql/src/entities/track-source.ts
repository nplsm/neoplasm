import { prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

@ObjectType()
export class TrackSource {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  src: string

  @Field()
  @prop({ required: true })
  type: string
}

export const TrackSourceModel = getModelForClass(TrackSource)
