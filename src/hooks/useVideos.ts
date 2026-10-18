import { useEffect, useState } from "react";
import type { Video } from "../types/Video";
import { adicionarVideo, desmarcarAssistido, listarVideos, marcarAssistido } from "../api/videosApi";

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    listarVideos()
      .then(setVideos)
      .catch(() => setErro("Não consegui falar com a API. Ela está rodando? 🥺"));
  }, []);

  async function adicionar(url: string) {
    setErro("");
    try {
      const novo = await adicionarVideo(url);
      setVideos((atuais) => [novo, ...atuais]);
      return true;
    } catch (err) {
      setErro((err as Error).message);
      return false;
    }
  }

  async function alternarAssistido(video: Video) {
    setErro("");
    try {
      const atualizado = video.watched
        ? await desmarcarAssistido(video.id)
        : await marcarAssistido(video.id);
      setVideos((atuais) => atuais.map((v) => (v.id === atualizado.id ? atualizado : v)));
    } catch (err) {
      setErro((err as Error).message);
    }
  }

  const assistidos = videos.filter((v) => v.watched).length;

  return { videos, erro, assistidos, adicionar, alternarAssistido };
}