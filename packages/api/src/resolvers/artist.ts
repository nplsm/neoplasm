import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql"

import { Artist, ArtistModel } from "../entities/artist"

@Resolver(() => Artist)
export class ArtistResolver {
  @Query(() => [Artist])
  async artists(): Promise<Artist[]> {
    return await ArtistModel.find({})
  }

  @Query(() => Artist, { nullable: true })
  async artist(@Arg("slug", () => String) slug: string): Promise<Artist> {
    return await ArtistModel.find({ slug })
  }
}
