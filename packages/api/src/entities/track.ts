import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field, Int, ID } from "type-graphql"
import { ObjectID } from "mongodb"

import { Release } from "./release"
import { ArtistAlias } from "./artist-alias"
import { TrackSource } from "./track-source"

@ObjectType()
export class Track {
  @Field(() => ID)
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  title: string

  @Field(() => Int)
  @prop({ required: true })
  position: number

  @Field(() => Release)
  @prop({ required: true, ref: () => Release })
  release: Ref<Release>

  @Field(() => [ArtistAlias])
  @prop({ required: true, type: () => ArtistAlias })
  artists: ArtistAlias[]

  @Field(() => [ArtistAlias])
  @prop({ required: true, type: () => ArtistAlias })
  featuring: ArtistAlias[]

  @Field(() => [TrackSource])
  @prop({ required: true, type: () => TrackSource })
  sources: TrackSource[]
}

export const TrackModel = getModelForClass(Track)
