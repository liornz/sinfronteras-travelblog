export type location = {
  lat: number;
  lng: number;
};

export type post = {
  slug: string;
  countrySlug: string;
  title: string;
  subtitle: string;
  country: string;
  region: string;
  image: string;
  blurDataURL: string;
  youtubeId: string;
  isFeatured: boolean;
  location: location;
  zoom: number;
  content: string;
};

export type postMetaData = {
  title: string;
  subtitle: string;
  country: string;
  region: string;
  image: string;
  blurDataURL: string;
  youtubeId: string;
  isFeatured: boolean;
  location: location;
  zoom: number;
};

export type commentData = {
  _id: string;
  email: string;
  name: string;
  text: string;
};

export type enteredCommentData = {
  email: string;
  name: string;
  text: string;
};

export type countryMetaData = {
  name: string;
  flag: string;
  flagBlurDataURL: string;
  image: string;
  blurDataURL: string;
}

export type country = {
  slug: string;
  name: string;
  flag: string;
  flagBlurDataURL: string;
  image: string;
  blurDataURL: string;
};

export type enteredMessageData = {
  email: string;
  name: string;
  message: string;
};
