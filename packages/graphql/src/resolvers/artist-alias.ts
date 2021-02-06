import { Resolver, FieldResolver, Root } from "type-graphql"

import { Artist, ArtistModel } from "../entities/artist"
import { ArtistAlias } from "../entities/artist-alias"

@Resolver(() => ArtistAlias)
export class ArtistAliasResolver {
  @FieldResolver(() => Artist, { nullable: true })
  async artist(@Root() alias: ArtistAlias): Promise<Artist> {
    return await ArtistModel.findById(alias.artist)
  }
}
