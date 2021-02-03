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
    return await ReleaseModel.findOne({ slug })
  }

  @FieldResolver(() => [Track], { nullable: true })
  async tracks(@Root() release: Release): Promise<Track[]> {
    return await TrackModel.find({ release: release._id })
  }
}
