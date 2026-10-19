import { useState } from "react";
import { useVideos } from "./hooks/useVideos";
import { VideoForm } from "./components/VideoForm";
import { VideoCard } from "./components/VideoCard";
import { VideoPlayer } from "./components/VideoPlayer";
import { WatchProgress } from "./components/WatchProgress";
import "./App.css";

export default function App() {
  const { videos, error, watchedCount, add, toggleWatched } = useVideos();
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <main className="app">
      <h1>🎀 StudyTube 🎀</h1>
      <p className="subtitle">sua listinha de estudos fofa</p>

      <VideoForm onAdd={add} />

      {error && <p className="error">{error}</p>}

      <WatchProgress watchedCount={watchedCount} total={videos.length} />

      {playingVideoId && (
        <VideoPlayer youTubeId={playingVideoId} onClose={() => setPlayingVideoId(null)} />
      )}

      <ul className="list">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} onPlay={setPlayingVideoId} onToggleWatched={toggleWatched} />
        ))}
      </ul>

      {videos.length === 0 && !error && (
        <p className="empty">Nenhum vídeo ainda... cole seu link aqui! 🐰</p>
      )}
    </main>
  );
}