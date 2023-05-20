/* eslint-disable import/no-cycle */
import { Song } from "./Song";
import { User } from "./User";

export type Playlist = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  songs: Song[];
  user: User;
  userId: number;
};
