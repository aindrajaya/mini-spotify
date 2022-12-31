/* eslint-disable import/no-cycle */
import { Playlist } from "./Playlist";

export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  playlist: Playlist[];
};
