import { useState, type FormEvent } from "react";
import { validarLinkYoutube } from "../utils/validarLinkYoutube";

type Props = {
  onAdicionar: (url: string) => Promise<boolean>;
};

export function VideoForm({ onAdicionar }: Props) {
  const [url, setUrl] = useState("");

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!validarLinkYoutube(url)) {
        alert("Esse link não é do YouTube 🥺");
  return;
}
    const deuCerto = await onAdicionar(url);
    if (deuCerto) setUrl("");
  }

  return (
    <form onSubmit={enviar} className="form">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Cole aqui o link do YouTube 💕"
      />
      <button type="submit" disabled={!url}>Adicionar ✨</button>
    </form>
  );
}