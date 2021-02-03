import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field, Int } from "type-graphql"
import { ObjectID } from "mongodb"

import { Release } from "./release"
import { ArtistAlias } from "./artist-alias"

@ObjectType()
export class Track {
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
  @prop({ required: true, ref: () => ArtistAlias })
  artists: Ref<ArtistAlias>[]

  @Field(() => [ArtistAlias])
  @prop({ required: true, ref: () => ArtistAlias })
  featuring: Ref<ArtistAlias>[]
}

export const TrackModel = getModelForClass(Track)
