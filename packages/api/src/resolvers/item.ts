import { Resolver, Query, Arg } from "type-graphql"

import { Item, ItemModel } from "../entities/item"

@Resolver(() => Item)
export class ItemResolver {
  @Query(() => [Item])
  async items(): Promise<Item[]> {
    return await ItemModel.find({})
  }

  @Query(() => Item, { nullable: true })
  async item(@Arg("slug", () => String) slug: string): Promise<Item> {
    return await ItemModel.find({ slug })
  }
}
