import { expect, test } from "@playwright/test";

test("opens visual preview for Merchandising QA Scanner", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "Merchandising QA Scanner" })).toBeVisible();
  await expect(page.getByText("Findability checks for products that should be visible but are not selling.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
