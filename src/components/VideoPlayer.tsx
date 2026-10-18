import YouTube from "react-youtube";

type Props = {
  youTubeId: string;
  onFechar: () => void;
};

export function VideoPlayer({ youTubeId, onFechar }: Props) {
  return (
    <div className="player">
      <YouTube videoId={youTubeId} opts={{ width: "100%", playerVars: { autoplay: 1 } }} />
      <button onClick={onFechar}>Fechar player ✖</button>
    </div>
  );
}