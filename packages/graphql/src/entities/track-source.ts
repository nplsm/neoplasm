import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field, Int } from "type-graphql"
import { ObjectID } from "mongodb"

import { Track } from "./track"

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
