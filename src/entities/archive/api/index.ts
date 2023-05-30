import { EventsDocument } from './events/events.graphql.interface';
import { fetchMixes } from './fetch-mixes';
import {
  GenreDocument,
  GenresDocument,
} from './genre/genres.graphql.interface';
import { GuestsDocument, GuestsQuery } from './guest/guest.graphql.interface';
import { MixesDocument, MixesQuery } from './mix/mix.graphql.interface';
import { MixSiblingsDocument } from './mix/mix-siblings.graphql.interface';
import { MixesSlugDocument } from './mix/mixes-slug.graphql.interface';
import { MoodDocument, MoodsDocument } from './mood/mood.graphql.interface';
import {
  ReleasesDocument,
  ReleasesQuery,
} from './release/releases.graphql.interface';
import { ShowsDocument, ShowsQuery } from './shows/shows.graphql.interface';

export const ArchiveApi = {
  EventsDocument,
  MixesDocument,
  MixesSlugDocument,
  MixSiblingsDocument,
  ShowsDocument,
  ReleasesDocument,
  GuestsDocument,
  GenresDocument,
  GenreDocument,
  MoodDocument,
  MoodsDocument,
  fetchMixes,
};
export type { GuestsQuery, MixesQuery, ReleasesQuery, ShowsQuery };
