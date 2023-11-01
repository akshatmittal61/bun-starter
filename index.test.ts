import { describe, expect, test, beforeAll } from "bun:test";

beforeAll(() => {
	console.log("beforeAll");
});

describe("test", () => {
	test("addition", () => {
		expect(1 + 1).toBe(2);
	});
});
