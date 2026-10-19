import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { VideoCard } from "../../../components/VideoCard";
import type { Video } from "../../../types/Video";

function criarVideo(sobrescrever: Partial<Video> = {}): Video {
  return {
    id: "3f2b8c1e-0000-0000-0000-000000000001",
    youTubeId: "dQw4w9WgXcQ",
    title: "Aula de DDD",
    channelTitle: "Canal de videoaula",
    thumbnailUrl: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    duration: "00:04:13",
    watched: false,
    addedAt: "2026-10-18T22:00:00",
    watchedAt: null,
    ...sobrescrever,
  };
}

describe("VideoCard", () => {
  it("mostra título, canal e duração formatada", () => {
    render(<VideoCard video={criarVideo()} onPlay={vi.fn()} onToggleWatched={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "Aula de DDD" })).toBeInTheDocument();
    expect(screen.getByText("Canal de videoaula • 4:13")).toBeInTheDocument();
  });

  it("chama onAssistir com o youTubeId ao clicar em Assistir", () => {
    const onPlay = vi.fn();
    render(<VideoCard video={criarVideo()} onPlay={onPlay} onToggleWatched={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /assistir/i }));

    expect(onPlay).toHaveBeenCalledWith("dQw4w9WgXcQ");
  });

  it("chama onAlternar com o vídeo ao clicar em Já assisti", () => {
    const onToggleWatched = vi.fn();
    const video = criarVideo();
    render(<VideoCard video={video} onPlay={vi.fn()} onToggleWatched={onToggleWatched} />);

    fireEvent.click(screen.getByRole("button", { name: /já assisti/i }));

    expect(onToggleWatched).toHaveBeenCalledWith(video);
  });

  it("mostra Desmarcar e a classe assistido quando o vídeo já foi visto", () => {
    render(
      <VideoCard video={criarVideo({ watched: true })} onPlay={vi.fn()} onToggleWatched={vi.fn()} />
    );

    expect(screen.getByRole("button", { name: /desmarcar/i })).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveClass("card", "watched");
  });
});