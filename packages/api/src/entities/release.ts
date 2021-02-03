import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

import { ArtistAlias } from "./artist-alias"

@ObjectType()
export class Release {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  slug: string

  @Field()
  @prop({ required: true })
  title: string

  @Field(() => [ArtistAlias])
  @prop({ required: true, ref: () => ArtistAlias })
  artists: Ref<ArtistAlias>[]
}

export const ReleaseModel = getModelForClass(Release)
