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
});