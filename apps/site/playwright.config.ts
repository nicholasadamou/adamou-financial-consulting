import { defineConfig, devices } from "@playwright/test";

const sitePortText = process.env.SITE_TEST_PORT ?? "3001";
const sitePort = Number(sitePortText);
if (!/^\d+$/.test(sitePortText) || sitePort < 1 || sitePort > 65535) {
  throw new Error("SITE_TEST_PORT must be a decimal integer from 1 to 65535.");
}
const siteOrigin = `http://127.0.0.1:${sitePort}`;

export default defineConfig({
  testDir: "./tests/browser",
  use: { baseURL: siteOrigin },
  projects: [
    {
      name: "desktop",
      testIgnore: "development.spec.ts",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      testIgnore: "development.spec.ts",
      use: { viewport: { width: 390, height: 844 } },
    },
    {
      name: "development",
      testMatch: "development.spec.ts",
      dependencies: ["desktop", "mobile"],
      use: { baseURL: "http://127.0.0.1:3003" },
    },
  ],
  webServer: [
    {
      command: `PORT=${sitePort} bun scripts/serve.ts`,
      url: siteOrigin,
      reuseExistingServer: false,
    },
    {
      command: "bunx astro dev --port 3003 --ignore-lock",
      url: "http://127.0.0.1:3003",
      reuseExistingServer: false,
    },
  ],
});
