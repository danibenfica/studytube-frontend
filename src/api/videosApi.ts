import type { Video } from "../types/Video";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5126/api/videos";

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error ?? "Algo deu errado 😢");
  }
  return res.json();
}

export async function getVideos(): Promise<Video[]> {
  return handleResponse(await fetch(API_URL));
}

export async function addVideo(url: string): Promise<Video> {
  return handleResponse(
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    })
  );
}

export async function markAsWatched(id: string): Promise<Video> {
  return handleResponse(await fetch(`${API_URL}/${id}/watched`, { method: "PATCH" }));
}

export async function markAsUnwatched(id: string): Promise<Video> {
  return handleResponse(await fetch(`${API_URL}/${id}/watched`, { method: "DELETE" }));
}