import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql"

import { Artist, ArtistModel } from "../entities/artist"
import { ArtistAlias, ArtistAliasModel } from "../entities/artist-alias"
import { Release, ReleaseModel } from "../entities/release"
import { Track, TrackModel } from "../entities/track"

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

  @FieldResolver(() => [Release], { nullable: true })
  async releases(@Root() artist: Artist): Promise<Promise<Release>[]> {
    const aliases: ArtistAlias[] = await ArtistAliasModel.find({
      artist: artist._id,
    })
    return await Promise.all(
      aliases.map(async (aliase) => {
        return await ReleaseModel.find({
          artists: aliase._id,
        }).flat()
      })
    )
  }

  @FieldResolver(() => [Track], { nullable: true })
  async tracks(@Root() artist: Artist): Promise<Promise<Track>[]> {
    const aliases: ArtistAlias[] = await ArtistAliasModel.find({
      artist: artist._id,
    })
    return await Promise.all(
      aliases.map(async (aliase) => {
        return await TrackModel.find({
          artists: aliase._id,
        }).flat()
      })
    )
  }

  @FieldResolver(() => [Track], { nullable: true })
  async featuring(@Root() artist: Artist): Promise<Promise<Track>[]> {
    const aliases: ArtistAlias[] = await ArtistAliasModel.find({
      artist: artist._id,
    })
    return await Promise.all(
      aliases.map(async (aliase) => {
        return await TrackModel.find({
          featuring: aliase._id,
        }).flat()
      })
    )
  }
}
