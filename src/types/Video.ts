export type Video = {
  id: string;
  youTubeId: string;
  title: string;
  channelTitle: string;
  thumbnailUrl: string;
  duration: string;
  watched: boolean;
  addedAt: string;
  watchedAt: string | null;
};