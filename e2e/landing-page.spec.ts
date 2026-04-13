import { test, expect } from "@playwright/test";

const SKOOL_URL = "https://www.skool.com/ai-mit-arnie-ki-revolution/about";
const YOUTUBE_URL = "https://www.youtube.com/@Arnold-Oberleiter";
const MAILTO = "mailto:arnio93@gmail.com";
const CONSULT_MAILTO =
  "mailto:arnio93@gmail.com?subject=Inquiry:%20AI%20Consulting%20%26%20Automation";

test.describe("Arnie AI landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Arnie AI/);
  });

  test("Skool community CTA links to the Skool URL", async ({ page }) => {
    const skoolLinks = page.locator(`a[href="${SKOOL_URL}"]`);
    await expect(skoolLinks.first()).toBeVisible();
    expect(await skoolLinks.count()).toBeGreaterThanOrEqual(1);
  });

  test("YouTube icon links to the YouTube channel", async ({ page }) => {
    const yt = page.locator('a[aria-label="YouTube"]').first();
    await expect(yt).toHaveAttribute("href", YOUTUBE_URL);
  });

  test('"Book a Consultation" uses mailto', async ({ page }) => {
    const book = page.getByRole("link", { name: /Book a Consultation/i });
    await expect(book).toHaveAttribute("href", MAILTO);
  });

  test('"Schedule Your Initial Consultation" uses detailed mailto', async ({
    page,
  }) => {
    const schedule = page.getByRole("link", {
      name: /Schedule Your Initial Consultation/i,
    });
    await expect(schedule).toHaveAttribute("href", CONSULT_MAILTO);
  });

  test("hero image (ich1) is rendered", async ({ page }) => {
    await expect(page.locator('img[src*="ich1"]').first()).toBeVisible();
  });

  test("community image (ich2) is rendered", async ({ page }) => {
    await page.locator("#community").scrollIntoViewIfNeeded();
    await expect(page.locator('img[src*="ich2"]').first()).toBeVisible();
  });

  test("key content keywords are present on the page", async ({ page }) => {
    await expect(page.getByText(/€4 million/).first()).toBeVisible();
    await expect(page.getByText(/n8n/).first()).toBeVisible();
    await expect(page.getByText(/Claude Code/).first()).toBeVisible();
    await expect(page.getByText(/ComfyUI/).first()).toBeVisible();
    await expect(page.getByText(/LLMs/).first()).toBeVisible();
    await expect(page.getByText(/Diffusion/).first()).toBeVisible();
  });

  test("growth video becomes visible on scroll with correct attributes", async ({
    page,
  }) => {
    const section = page.locator("#growth");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeInViewport();

    const video = section.locator("video");
    await expect(video).toBeVisible();

    const source = video.locator('source[src*="video-stock-animation.mp4"]');
    await expect(source).toHaveCount(1);

    const attrs = await video.evaluate((el: HTMLVideoElement) => ({
      autoplay: el.autoplay,
      loop: el.loop,
      muted: el.muted,
    }));
    expect(attrs.autoplay).toBe(true);
    expect(attrs.loop).toBe(true);
    expect(attrs.muted).toBe(true);
  });
});
