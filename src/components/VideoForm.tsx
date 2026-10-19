import { useState, type FormEvent } from "react";
import { isValidYouTubeUrl } from "../utils/isValidYouTubeUrl";

type Props = {
  onAdd: (url: string) => Promise<boolean>;
};

export function VideoForm({ onAdd }: Props) {
  const [url, setUrl] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isValidYouTubeUrl(url)) {
      alert("Esse link não é do YouTube 🥺");
      return;
    }

    const succeeded = await onAdd(url);
    if (succeeded) setUrl("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Cole aqui o link do YouTube 💕"
      />
      <button type="submit" disabled={!url}>Adicionar ✨</button>
    </form>
  );
}