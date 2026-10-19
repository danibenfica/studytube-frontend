export function isValidYouTubeUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) return false;

  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(trimmed);
}