import { useState } from "react";
import { useVideos } from "./hooks/useVideos";
import { VideoForm } from "./components/VideoForm";
import { VideoCard } from "./components/VideoCard";
import { VideoPlayer } from "./components/VideoPlayer";
import { Progresso } from "./components/Progresso";
import "./App.css";

export default function App() {
  const { videos, erro, assistidos, adicionar, alternarAssistido } = useVideos();
  const [tocando, setTocando] = useState<string | null>(null);

  return (
    <main className="app">
      <h1>🎀 StudyTube 🎀</h1>
      <p className="subtitulo">sua listinha de estudos fofa</p>

      <VideoForm onAdicionar={adicionar} />

      {erro && <p className="erro">{erro}</p>}

      <Progresso assistidos={assistidos} total={videos.length} />

      {tocando && <VideoPlayer youTubeId={tocando} onFechar={() => setTocando(null)} />}

      <ul className="lista">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} onAssistir={setTocando} onAlternar={alternarAssistido} />
        ))}
      </ul>

      {videos.length === 0 && !erro && (
        <p className="vazio">Nenhum vídeo ainda... cole seu link aqui! 🐰</p>
      )}
    </main>
  );
}