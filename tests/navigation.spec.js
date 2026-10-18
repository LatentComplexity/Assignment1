import { test, expect } from "@playwright/test";

const sections = ["Data Sources", "Collection Methods", "Analysis Methods", "Publication Venues"];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Four named tabs exist and Data Sources is initially selected", async ({ page }) => {
  await expect(page).toHaveTitle("MSR Research Guide");
  await expect(page.getByRole("tab")).toHaveText(sections);
  await expect(page.getByRole("tab", { name: "Data Sources", exact: true })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toHaveCount(1);
  await expect(page.getByRole("tabpanel", { name: "Data Sources", exact: true })).toBeVisible();
});

test("Every tab shows only its corresponding content, including on repeat visits", async ({ page }) => {
  for (const name of [...sections, ...sections.toReversed()]) {
    const tab = page.getByRole("tab", { name, exact: true });
    await tab.click();
    await expect(tab).toHaveAttribute("aria-selected", "true");
    await expect(page.locator('[role="tab"][aria-selected="true"]')).toHaveCount(1);
    await expect(page.locator('[role="tab"][tabindex="0"]')).toHaveCount(1);
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
    const panel = page.getByRole("tabpanel", { name, exact: true });
    await expect(panel.getByRole("heading", { name, exact: true })).toBeVisible();
    await expect(panel).toContainText(`Planned for milestone ${sections.indexOf(name) + 2}`);
    for (const other of sections.filter((section) => section !== name)) {
      await expect(page.getByRole("tab", { name: other, exact: true })).toHaveAttribute("aria-selected", "false");
      await expect(page.getByRole("tabpanel", { name: other, exact: true, includeHidden: true })).toBeHidden();
    }
  }
});

test("Arrows wrap and Home/End move selection and focus", async ({ page }) => {
  await page.getByRole("tab", { name: sections[0], exact: true }).focus();
  for (const [key, name] of [
    ["ArrowLeft", sections[3]], ["ArrowRight", sections[0]],
    ["ArrowRight", sections[1]], ["End", sections[3]], ["Home", sections[0]],
  ]) {
    await page.keyboard.press(key);
    await expect(page.getByRole("tab", { name, exact: true })).toBeFocused();
    await expect(page.getByRole("tab", { name, exact: true })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("tabpanel", { name, exact: true })).toBeVisible();
    await expect(page.getByRole("tabpanel")).toHaveCount(1);
  }
});

test("Tab enters the selected panel and Shift+Tab returns to its tab", async ({ page }) => {
  const tab = page.getByRole("tab", { name: "Analysis Methods", exact: true });
  await tab.click();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("tabpanel", { name: "Analysis Methods", exact: true })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(tab).toBeFocused();
});

test("All navigation remains usable at a 350px mobile width", async ({ page }) => {
  await page.setViewportSize({ width: 350, height: 812 });
  for (const name of sections) {
    const tab = page.getByRole("tab", { name, exact: true });
    await expect(tab).toBeInViewport();
    await tab.click();
    await expect(page.getByRole("tabpanel", { name, exact: true })).toBeVisible();
  }
  const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(hasHorizontalOverflow).toBe(false);
});
