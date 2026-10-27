import { describe, expect, it } from "vitest";
import { INITIAL_DRAFT, type OrderDraft } from "./types";
import { computeTotals } from "./totals";

const draft = (over: Partial<OrderDraft>): OrderDraft => ({ ...INITIAL_DRAFT, ...over });

describe("computeTotals", () => {
  it("adds the package price and the emirate delivery fee", () => {
    const t = computeTotals(draft({ packageId: "moment", emirate: "sharjah" }));
    expect(t.subtotal).toBe(89);
    expect(t.deliveryFee).toBe(30);
    expect(t.total).toBe(119);
    expect(t.net).toBe(113.33);
    expect(t.vat).toBe(5.67);
  });

  it("returns zero subtotal when no package is selected", () => {
    const t = computeTotals(draft({ packageId: null, emirate: "dubai" }));
    expect(t.pkg).toBeNull();
    expect(t.subtotal).toBe(0);
    expect(t.total).toBe(20);
  });
});
