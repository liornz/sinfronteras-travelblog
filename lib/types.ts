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
