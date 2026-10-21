import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { VideoPlayer } from "../../../components/VideoPlayer";

vi.mock("react-youtube", () => ({
  default: ({ onError }: { onError?: () => void }) => (
    <button onClick={() => onError?.()}>simular erro do player</button>
  ),
}));

describe("VideoPlayer", () => {
  it("mostra o link para abrir o vídeo no YouTube", () => {
    render(<VideoPlayer youTubeId="dQw4w9WgXcQ" onClose={vi.fn()} />);

    expect(screen.getByRole("link", { name: /abrir no youtube/i })).toHaveAttribute(
      "href",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
  });

  it("mostra uma mensagem quando o player do YouTube dá erro", () => {
    render(<VideoPlayer youTubeId="dQw4w9WgXcQ" onClose={vi.fn()} />);

    expect(screen.queryByText(/não deu pra tocar/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /simular erro/i }));

    expect(screen.getByText(/não deu pra tocar/i)).toBeInTheDocument();
  });

  it("chama onClose ao clicar em Fechar player", () => {
    const onClose = vi.fn();
    render(<VideoPlayer youTubeId="dQw4w9WgXcQ" onClose={onClose} />);

    fireEvent.click(screen.getByRole("button", { name: /fechar player/i }));

    expect(onClose).toHaveBeenCalled();
  });
});
