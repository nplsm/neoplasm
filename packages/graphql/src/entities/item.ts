import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

import { Release } from "./release"
import { ItemCopy } from "./item-copy"

@ObjectType()
export class Item {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  slug: string

  @Field(() => Release)
  @prop({ required: true, ref: () => Release })
  release: Ref<Release>

  @Field(() => [ItemCopy])
  @prop({ required: true, type: () => [ItemCopy] })
  copies: ItemCopy[]

  @Field({ nullable: true })
  @prop({ required: false })
  text?: string

  @Field({ nullable: true })
  @prop({ required: false })
  html?: string

  @Field(() => [String])
  @prop({ required: false })
  images?: string[]
}

export const ItemModel = getModelForClass(Item)
