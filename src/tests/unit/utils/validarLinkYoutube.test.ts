import { describe, it, expect } from "vitest";
import { validarLinkYoutube } from "../../../utils/validarLinkYoutube";

describe("validarLinkYoutube", () => {
  it("aceita link do youtube.com", () => {
    expect(validarLinkYoutube("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(true);
  });

  it("aceita link curto youtu.be", () => {
    expect(validarLinkYoutube("https://youtu.be/dQw4w9WgXcQ")).toBe(true);
  });

  it("recusa link de outro site", () => {
    expect(validarLinkYoutube("https://www.google.com")).toBe(false);
  });

  it("recusa texto vazio", () => {
    expect(validarLinkYoutube("   ")).toBe(false);
  });
});