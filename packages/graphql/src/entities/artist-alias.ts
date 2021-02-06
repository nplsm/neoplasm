import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

import { Artist } from "./artist"

@ObjectType()
export class ArtistAlias {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  alias: string

  @Field(() => Artist)
  @prop({ required: true, ref: () => Artist })
  artist: Ref<Artist>
}

export const ArtistAliasModel = getModelForClass(ArtistAlias)
