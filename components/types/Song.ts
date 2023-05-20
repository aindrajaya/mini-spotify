/* eslint-disable import/no-cycle */
import { Artist } from "./Artist";
import { Playlist } from "./Playlist";

export type Song = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  artist: Artist;
  artistId: number;
  playlist: Playlist[];
  duration: number;
  url: string;
};
