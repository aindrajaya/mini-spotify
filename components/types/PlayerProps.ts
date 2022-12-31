import { Song } from "./Song";

export type PlayerProps = {
  songs: Song[];
  activeSong: Song;
};