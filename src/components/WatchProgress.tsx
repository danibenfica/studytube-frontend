type Props = {
  watchedCount: number;
  total: number;
};

export function WatchProgress({ watchedCount, total }: Props) {
  if (total === 0) return null;
  return <p className="progress">{watchedCount} de {total} assistidos 🌸</p>;
}