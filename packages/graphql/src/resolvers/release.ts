import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql"

import { Release, ReleaseModel } from "../entities/release"
import { Track, TrackModel } from "../entities/track"

@Resolver(() => Release)
export class ReleaseResolver {
  @Query(() => [Release])
  async releases(): Promise<Release[]> {
    return await ReleaseModel.find({})
  }

  @Query(() => Release, { nullable: true })
  async release(
    @Arg("slug", () => String, { nullable: true }) slug?: string,
    @Arg("code", () => String, { nullable: true }) code?: string
  ): Promise<Release> {
    if (slug !== undefined) {
      return await ReleaseModel.findOne({ slug })
    } else if (code !== undefined) {
      return await ReleaseModel.findOne({ code })
    }
  }

  @FieldResolver(() => [Track], { nullable: true })
  async tracks(@Root() release: Release): Promise<Track[]> {
    return await TrackModel.find({ release: release._id })
  }
}
