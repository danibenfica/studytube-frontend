import type { Video } from "../types/Video";

// Perfil http do backend (StudyTube.Api/Properties/launchSettings.json).
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5126/api/videos";

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? "Algo deu errado 😢");
  }
  return res.json();
}

export async function listarVideos(): Promise<Video[]> {
  return handle(await fetch(API_URL));
}

export async function adicionarVideo(url: string): Promise<Video> {
  return handle(
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
  );
}

export async function marcarAssistido(id: string): Promise<Video> {
  return handle(await fetch(`${API_URL}/${id}/watched`, { method: "PATCH" }));
}

export async function desmarcarAssistido(id: string): Promise<Video> {
  return handle(await fetch(`${API_URL}/${id}/watched`, { method: "DELETE" }));
}