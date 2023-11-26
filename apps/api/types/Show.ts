import type { LinksToSocials } from './components/LinksToSocials';
import type { Media } from './Media';
import type { Mix } from './Mix';

export interface Show {
  id: number;
  attributes: {
    name: string;
    slug?: string;
    image?: { data: Media };
    mixes: { data: Mix[] };
    socials?: LinksToSocials;
    youtubePlayerLink?: string;
    descriptionRu?: string;
    descriptionEn?: string;
  };
}