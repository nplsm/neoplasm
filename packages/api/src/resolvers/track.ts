import { Resolver, Query, FieldResolver, Root } from "type-graphql"

import { Track, TrackModel } from "../entities/track"
import { TrackSource, TrackSourceModel } from "../entities/track-source"

@Resolver(() => Track)
export class TrackResolver {
  @Query(() => [Track])
  async tracks(): Promise<Track[]> {
    return await TrackModel.find({})
  }
}
