type Props = {
  assistidos: number;
  total: number;
};

export function Progresso({ assistidos, total }: Props) {
  if (total === 0) return null;
  return <p className="progresso">{assistidos} de {total} assistidos 🌸</p>;
}