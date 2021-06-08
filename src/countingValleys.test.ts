import countingValleys from "./countingValleys";

test("DDUU", () => {
  const path = "DDUU";
  const valleys = countingValleys(path);
  expect(valleys).toBe(1);
});

test("DDDUUU", () => {
  const path = "DDDUUU";
  const valleys = countingValleys(path);
  expect(valleys).toBe(1);
});

test("DDUUDDUUDDUU", () => {
  const path = "DDUUDDUUDDUU";
  const valleys = countingValleys(path);
  expect(valleys).toBe(3);
});

test("DDUUUDDDUUUDDDUUUDDU", () => {
  const path = "DDUUUDDDUUUDDDUUUDDU";
  const valleys = countingValleys(path);
  expect(valleys).toBe(4);
});

test("DDU", () => {
  const path = "DDU";
  expect(() => countingValleys(path)).toThrow(new Error("Invalid path"));
});
