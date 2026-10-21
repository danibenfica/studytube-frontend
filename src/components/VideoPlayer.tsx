import { useState } from "react";
import YouTube from "react-youtube";

type Props = {
  youTubeId: string;
  onClose: () => void;
};

export function VideoPlayer({ youTubeId, onClose }: Props) {
  const [hasPlayerError, setHasPlayerError] = useState(false);
  const youTubeUrl = `https://www.youtube.com/watch?v=${youTubeId}`;

  return (
    <div className="player">
      <YouTube
        videoId={youTubeId}
        opts={{ width: "100%", playerVars: { autoplay: 1 } }}
        onError={() => setHasPlayerError(true)}
      />
      {hasPlayerError && (
        <p className="error">Não deu pra tocar o vídeo aqui 😢 Tenta abrir no YouTube!</p>
      )}
      <a className="player-link" href={youTubeUrl} target="_blank" rel="noopener">
        Abrir no YouTube ↗
      </a>
      <button onClick={onClose}>Fechar player ✖</button>
    </div>
  );
}
