import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql"

import { Item, ItemModel } from "../entities/item"
import { Release, ReleaseModel } from "../entities/release"

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

  @FieldResolver(() => [Release], { nullable: true })
  async release(@Root() item: Item): Promise<Release> {
    return await ReleaseModel.findById(item.release)
  }
}
