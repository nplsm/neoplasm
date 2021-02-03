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

  @Field()
  @prop({ required: true })
  cover: string

  @Field(() => [ArtistAlias])
  @prop({ required: true, type: () => ArtistAlias })
  artists: ArtistAlias[]
}

export const ReleaseModel = getModelForClass(Release)
