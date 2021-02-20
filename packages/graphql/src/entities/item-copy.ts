import { prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"

import { Item } from "./item"

@ObjectType()
export class ItemCopy {
  @Field()
  @prop({ required: true })
  _id: string

  @Field(() => [Item])
  item: Item
}

export const ItemCopyModel = getModelForClass(ItemCopy)
