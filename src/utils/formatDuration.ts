const TIMESPAN = /^(?:(\d+)\.)?(\d{1,2}):(\d{2}):(\d{2})(?:\.\d+)?$/;
const ISO_8601 = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;

function buildTime(horas: number, minutos: number, segundos: number): string {
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundos).padStart(2, "0");

  return horas > 0 ? `${horas}:${mm}:${ss}` : `${minutos}:${ss}`;
}

export function formatDuration(duration: string): string {
  const timeSpan = duration.match(TIMESPAN);
  if (timeSpan) {
    const dias = Number(timeSpan[1] ?? 0);
    const horas = Number(timeSpan[2]) + dias * 24;
    return buildTime(horas, Number(timeSpan[3]), Number(timeSpan[4]));
  }

  const iso = duration.match(ISO_8601);
  if (iso) {
    return buildTime(Number(iso[1] ?? 0), Number(iso[2] ?? 0), Number(iso[3] ?? 0));
  }

  return duration;
}