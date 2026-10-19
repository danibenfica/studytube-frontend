import YouTube from "react-youtube";

type Props = {
  youTubeId: string;
  onClose: () => void;
};

export function VideoPlayer({ youTubeId, onClose }: Props) {
  return (
    <div className="player">
      <YouTube videoId={youTubeId} opts={{ width: "100%", playerVars: { autoplay: 1 } }} />
      <button onClick={onClose}>Fechar player ✖</button>
    </div>
  );
}