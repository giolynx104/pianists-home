import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("go to sign in page", async ({ page }) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("button", { name: "Sign In" }).click();
  await expect(page).toHaveURL(
    "http://localhost:3000/api/auth/signin?callbackUrl=%2F",
  );
});

test("dashboard navigation", async ({ page }) => {
  await page.goto("http://localhost:3000/home");
  await page.getByRole("link", { name: "Dashboard" }).click();
  await expect(page).toHaveURL("http://localhost:3000/dashboard");
});
