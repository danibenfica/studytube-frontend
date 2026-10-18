export function formatarDuracao(duracao: string): string {
  const match = duracao.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return duracao;

  const horas = Number(match[1] ?? 0);
  const minutos = Number(match[2] ?? 0);
  const segundos = Number(match[3] ?? 0);

  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundos).padStart(2, "0");

  return horas > 0 ? `${horas}:${mm}:${ss}` : `${minutos}:${ss}`;
}