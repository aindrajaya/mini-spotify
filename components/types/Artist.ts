import { Song } from "./Song";

export type Artist = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  songs: Song[];
  name: string;
};