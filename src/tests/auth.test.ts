import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth";
import { describe, expect, test } from "vitest";

const noAuthHeader: IncomingHttpHeaders = {
  authorization: undefined,
};

const incorrectAuthHeader: IncomingHttpHeaders = {
  authorization: "Test 123456",
};

const incorrectLengthAuthHeader: IncomingHttpHeaders = {
  authorization: "Test",
};

const correctAuthHeader: IncomingHttpHeaders = {
  authorization: "ApiKey 123456",
};

describe("Get API Key Test", () => {
  test("No Authorization being passed.", () => {
    expect(getAPIKey(noAuthHeader)).toBe(null);
  });

  test("Wrong Format of Authorization being passed.", () => {
    expect(getAPIKey(incorrectAuthHeader)).toBe(null);
  });

  test("Wrong Length of Authorization being passed.", () => {
    expect(getAPIKey(incorrectLengthAuthHeader)).toBe(null);
  });

  test("Correct Authorization being passed.", () => {
    expect(getAPIKey(correctAuthHeader)).toBe("123456");
  });
});
