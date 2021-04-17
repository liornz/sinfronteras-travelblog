export type location = {
  lat: number;
  lng: number;
};

export type post = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  youtubeId: string;
  isFeatured: boolean;
  location: location;
  zoom: number;
  content: string;
};
