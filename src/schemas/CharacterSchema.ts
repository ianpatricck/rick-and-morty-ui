export type CharacterSchema = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  epsode: Array<string>;
  url: string;
  created: string;
};
