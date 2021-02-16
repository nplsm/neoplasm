import { prop, getModelForClass } from "@typegoose/typegoose"
import { ObjectType, Field } from "type-graphql"
import { ObjectID } from "mongodb"

@ObjectType()
export class Link {
  readonly _id: ObjectID

  @Field()
  @prop({ required: true })
  target: string

  @Field()
  @prop({ required: true })
  href: string
}

export const LinkModel = getModelForClass(Link)
