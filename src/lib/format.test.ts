import { describe, expect, it } from "vitest";
import { vatBreakdown } from "./format";

describe("vatBreakdown", () => {
  it("splits a 5% VAT-inclusive total into net and VAT", () => {
    expect(vatBreakdown(105)).toEqual({ net: 100, vat: 5, total: 105 });
  });

  it("rounds to fils and keeps net + VAT equal to the total", () => {
    const { net, vat, total } = vatBreakdown(119);
    expect(net).toBe(113.33);
    expect(vat).toBe(5.67);
    expect(Math.round((net + vat) * 100) / 100).toBe(total);
  });

  it("returns zeros for a zero total", () => {
    expect(vatBreakdown(0)).toEqual({ net: 0, vat: 0, total: 0 });
  });
});
