export function validarLinkYoutube(link: string): boolean {
  const texto = link.trim();
  if (!texto) return false;

  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(texto);
}