import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql"

import { Release, ReleaseModel } from "../entities/release"
import { ArtistAlias, ArtistAliasModel } from "../entities/artist-alias"
import { Track, TrackModel } from "../entities/track"

@Resolver(() => Release)
export class ReleaseResolver {
  @Query(() => [Release])
  async releases(): Promise<Release[]> {
    return await ReleaseModel.find({})
  }

  @Query(() => Release, { nullable: true })
  async release(@Arg("slug", () => String) slug: string): Promise<Release> {
    return await ReleaseModel.find({ slug })
  }

  @FieldResolver(() => [ArtistAlias], { nullable: true })
  async artists(@Root() release: Release): Promise<Promise<ArtistAlias>[]> {
    return await Promise.all(
      release.artists.map(async (id) => {
        return await ArtistAliasModel.findById(id)
      })
    )
  }

  @FieldResolver(() => [Track], { nullable: true })
  async tracks(@Root() release: Release): Promise<Promise<Track>[]> {
    return await TrackModel.find({ release: release._id })
  }
}
