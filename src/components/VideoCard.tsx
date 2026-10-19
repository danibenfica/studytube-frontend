import type { Video } from "../types/Video";
import { formatDuration } from "../utils/formatDuration";

type Props = {
  video: Video;
  onPlay: (youTubeId: string) => void;
  onToggleWatched: (video: Video) => void;
};

export function VideoCard({ video, onPlay, onToggleWatched }: Props) {
  return (
    <li className={video.watched ? "card watched" : "card"}>
      <img src={video.thumbnailUrl} alt={video.title} onClick={() => onPlay(video.youTubeId)} />
      <div className="info">
        <h3>{video.title}</h3>
        <p>{video.channelTitle} • {formatDuration(video.duration)}</p>
        <div className="actions">
          <button onClick={() => onPlay(video.youTubeId)}>▶ Assistir</button>
          <button onClick={() => onToggleWatched(video)}>
            {video.watched ? "↩ Desmarcar" : "✔ Já assisti"}
          </button>
        </div>
      </div>
    </li>
  );
}