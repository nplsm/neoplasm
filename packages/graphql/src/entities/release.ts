import { prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

import { ArtistAlias } from "./artist-alias"
import { Link } from "./link"

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
  code: string

  @Field()
  @prop({ required: true })
  cover: string

  @Field(() => [ArtistAlias])
  @prop({ required: true, type: () => ArtistAlias })
  artists: ArtistAlias[]

  @Field(() => [Link])
  @prop({ required: true, type: () => Link })
  links: Link[]
}

export const ReleaseModel = getModelForClass(Release)
