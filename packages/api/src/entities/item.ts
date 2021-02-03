import { prop, Ref, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

import { Release } from "./release"
import { ItemCopy } from "./item-copy"

@ObjectType()
export class Item {
  readonly _id: ObjectID

  @Field(() => Release)
  @prop({ required: true, type: () => Release })
  release: Ref<Release>

  @Field(() => [ItemCopy])
  @prop({ required: true, type: () => [ItemCopy] })
  copies: ItemCopy[]
}

export const ItemModel = getModelForClass(Item)
