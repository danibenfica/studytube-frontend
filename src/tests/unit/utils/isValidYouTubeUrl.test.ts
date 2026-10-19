import { describe, it, expect } from "vitest";
import { isValidYouTubeUrl } from "../../../utils/isValidYouTubeUrl";

describe("isValidYouTubeUrl", () => {
  it("aceita link do youtube.com", () => {
    expect(isValidYouTubeUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(true);
  });

  it("aceita link curto youtu.be", () => {
    expect(isValidYouTubeUrl("https://youtu.be/dQw4w9WgXcQ")).toBe(true);
  });

  it("recusa link de outro site", () => {
    expect(isValidYouTubeUrl("https://www.google.com")).toBe(false);
  });

  it("recusa texto vazio", () => {
    expect(isValidYouTubeUrl("   ")).toBe(false);
  });
});