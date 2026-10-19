const TIME_SPAN = /^(?:(\d+)\.)?(\d{1,2}):([0-5]\d):([0-5]\d)(?:\.\d+)?$/;
const ISO_8601 = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

export function formatarDuracao(duracao: string): string {
  const timeSpan = duracao.match(TIME_SPAN);
  if (timeSpan) {
    return montar(
      Number(timeSpan[1] ?? 0),
      Number(timeSpan[2]),
      Number(timeSpan[3]),
      Number(timeSpan[4]),
    );
  }

  const iso = duracao.match(ISO_8601);
  if (!iso) return duracao;

  return montar(0, Number(iso[1] ?? 0), Number(iso[2] ?? 0), Number(iso[3] ?? 0));
}

function montar(dias: number, horas: number, minutos: number, segundos: number): string {
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundos).padStart(2, "0");

  if (dias > 0) {
    return `${dias}:${String(horas).padStart(2, "0")}:${mm}:${ss}`;
  }

  return horas > 0 ? `${horas}:${mm}:${ss}` : `${minutos}:${ss}`;
}
