export interface ICard {
  id: number;
  nameRU: string;
  nameEN: string;
  director: string;
  country: string;
  year: string;
  duration: number;
  description: string;
  trailerLink: string;
  created_at: string;
  updated_at: string;
  like?: boolean;
  image: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: string | null;
        url: string;
      };
      small: {
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        path: string | null;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string | null;
    created_at: string;
    updated_at: string;
  };
}

export interface ICardWithLike extends ICard {
  like: boolean;
}

export interface IState {
  card: {
    loading: boolean;
    loaded: boolean;
    error: boolean;
    cards: ICard[];
  };
  filter: {
    likeFilter: boolean;
  };
}
