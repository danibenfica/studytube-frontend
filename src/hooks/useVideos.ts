import { useEffect, useState } from "react";
import type { Video } from "../types/Video";
import { addVideo, getVideos, markAsUnwatched, markAsWatched } from "../api/videosApi";

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getVideos()
      .then(setVideos)
      .catch(() => setError("Não consegui falar com a API. Ela está rodando? 🥺"));
  }, []);

  async function add(url: string) {
    setError("");
    try {
      const created = await addVideo(url);
      setVideos((current) => [created, ...current]);
      return true;
    } catch (err) {
      setError((err as Error).message);
      return false;
    }
  }

  async function toggleWatched(video: Video) {
    setError("");
    try {
      const updated = video.watched
        ? await markAsUnwatched(video.id)
        : await markAsWatched(video.id);
      setVideos((current) => current.map((v) => (v.id === updated.id ? updated : v)));
    } catch (err) {
      setError((err as Error).message);
    }
  }

  const watchedCount = videos.filter((v) => v.watched).length;

  return { videos, error, watchedCount, add, toggleWatched };
}