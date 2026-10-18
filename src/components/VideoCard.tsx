import type { Video } from "../types/Video";
import { formatarDuracao } from "../utils/formatarDuracao";

type Props = {
  video: Video;
  onAssistir: (youTubeId: string) => void;
  onAlternar: (video: Video) => void;
};

export function VideoCard({ video, onAssistir, onAlternar }: Props) {
  return (
    <li className={video.watched ? "card assistido" : "card"}>
      <img src={video.thumbnailUrl} alt={video.title} onClick={() => onAssistir(video.youTubeId)} />
      <div className="info">
        <h3>{video.title}</h3>
        <p>{video.channelTitle} • {formatarDuracao(video.duration)}</p>
        <div className="botoes">
          <button onClick={() => onAssistir(video.youTubeId)}>▶ Assistir</button>
          <button onClick={() => onAlternar(video)}>
            {video.watched ? "↩ Desmarcar" : "✔ Já assisti"}
          </button>
        </div>
      </div>
    </li>
  );
}