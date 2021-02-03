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

  @Field(() => Track)
  @prop({ required: true, ref: () => Track })
  track: Ref<Track>
}

export const TrackSourceModel = getModelForClass(TrackSource)
