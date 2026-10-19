import { describe, it, expect } from "vitest";
import { formatDuration } from "../../../utils/formatDuration";

describe("formatDuration", () => {
  it("formata minutos e segundos", () => {
    expect(formatDuration("PT4M13S")).toBe("4:13");
  });

  it("completa os segundos com zero", () => {
    expect(formatDuration("PT10M5S")).toBe("10:05");
  });

  it("formata horas", () => {
    expect(formatDuration("PT1H2M3S")).toBe("1:02:03");
  });

  it("formata só segundos", () => {
    expect(formatDuration("PT45S")).toBe("0:45");
  });

  it("devolve o texto original quando não reconhece", () => {
    expect(formatDuration("abc")).toBe("abc");
  });

  describe("formato TimeSpan do .NET (o que a API devolve)", () => {
    it("formata minutos e segundos", () => {
      expect(formatDuration("00:04:13")).toBe("4:13");
    });

    it("formata horas", () => {
      expect(formatDuration("01:02:03")).toBe("1:02:03");
    });

    it("soma os dias nas horas", () => {
      expect(formatDuration("1.02:03:04")).toBe("26:03:04");
    });

    it("ignora as frações de segundo", () => {
      expect(formatDuration("00:04:13.5000000")).toBe("4:13");
    });

    it("formata duração zero", () => {
      expect(formatDuration("00:00:00")).toBe("0:00");
    });
  });
});