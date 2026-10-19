import { describe, it, expect } from "vitest";
import { formatarDuracao } from "../../../utils/formatarDuracao";
describe("formatarDuracao", () => {
  it("formata minutos e segundos", () => {
    expect(formatarDuracao("PT4M13S")).toBe("4:13");
  });

  it("completa os segundos com zero", () => {
    expect(formatarDuracao("PT10M5S")).toBe("10:05");
  });

  it("formata horas", () => {
    expect(formatarDuracao("PT1H2M3S")).toBe("1:02:03");
  });

  it("formata só segundos", () => {
    expect(formatarDuracao("PT45S")).toBe("0:45");
  });

  it("devolve o texto original quando não reconhece", () => {
    expect(formatarDuracao("abc")).toBe("abc");
  });

  describe("formato TimeSpan do .NET (o que a API devolve)", () => {
    it("formata minutos e segundos", () => {
      expect(formatarDuracao("00:04:13")).toBe("4:13");
    });

    it("formata horas", () => {
      expect(formatarDuracao("01:02:03")).toBe("1:02:03");
    });

    it("soma os dias nas horas", () => {
      expect(formatarDuracao("1.02:03:04")).toBe("26:03:04");
    });

    it("ignora as frações de segundo", () => {
      expect(formatarDuracao("00:04:13.5000000")).toBe("4:13");
    });

    it("formata duração zero", () => {
      expect(formatarDuracao("00:00:00")).toBe("0:00");
    });
  });
});