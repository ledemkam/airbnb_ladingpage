export type CardItem = {
  id: number;
  city: string;
  country: string;
  dates: string;
  price_per_night: number;
  rating: number;
  owner: string;
  images: string[];
}

export type CardListState = {
  cards:CardItem[]
};
