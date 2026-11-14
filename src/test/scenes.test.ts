import { describe, expect, it } from "vitest";
import { INDUSTRIES } from "@/lib/site";
import { SCENES } from "@/lib/scenes";

describe("industry scroll story", () => {
  it.each(INDUSTRIES.map((i) => [i.slug, i]))(
    "%s has one visitor scene per journey stage",
    (_, ind) => {
      expect(SCENES[ind.slug]).toHaveLength(ind.stages.length);
    },
  );
});
