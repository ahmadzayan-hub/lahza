import { describe, expect, it } from "vitest";
import { EVENT_PACKAGES } from "./catalog";
import { buildQuotation } from "./quotation";

const halfDay = EVENT_PACKAGES.find((p) => p.id === "halfday")!;

describe("buildQuotation", () => {
  it("charges only the package when guests fit its cup allowance", () => {
    const q = buildQuotation("Q-1", halfDay, 100);
    expect(q.lines).toHaveLength(1);
    expect(q.subtotal).toBe(2500);
    expect(q.vat).toBe(125);
    expect(q.total).toBe(2625);
  });

  it("adds extra cups at AED 12 each beyond the allowance", () => {
    const q = buildQuotation("Q-2", halfDay, 200);
    expect(q.lines).toHaveLength(2);
    expect(q.lines[1]).toMatchObject({ qty: 50, unit: 12 });
    expect(q.subtotal).toBe(3100);
    expect(q.vat).toBe(155);
    expect(q.total).toBe(3255);
  });
});
