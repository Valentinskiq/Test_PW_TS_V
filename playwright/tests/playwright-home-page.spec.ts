import { test, expect } from "@playwright/test";
import { DotenvConfigOptions } from "dotenv";

test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);
  });

  test("Has logo exist", async ({ page }) => {
    const logo = page.locator('img[alt="Playwright logo"]').first(); // Променено на locator
    await expect(logo).toBeVisible();
  });

  test("Has heading exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // locate heading one by locator tag name
    const headingTitle = page.locator("h1");
    // log in the test results located element value
    console.log((await headingTitle.innerText()).valueOf());
    await expect(headingTitle).toBeVisible();
  });

  test("Have nav links exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // locate nav link Docs by role and text
    const docsLink = page.getByRole("link", { name: "Docs" });
    const apiLink = page.getByRole("link", { name: "API" });

    await expect(docsLink).toBeVisible();
    await expect(apiLink).toBeVisible();
  });

  test("Click Community nav link and check the path", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    //  locate nav link Community by role and text
    const communityLink = page.getByRole("link", { name: "Community" });
    // click the loacted element
    await communityLink.click();
    //expect the current pag to have passed url
    await expect(page).toHaveURL("https://playwright.dev/community/welcome");

    const headingTwo = page.getByRole("heading", { name: "Ambassadors" });
    await expect(headingTwo).toBeVisible();
  });

  test("Select playwright env from the list", async ({ page }) => {
    const initialEnv = page.getByRole("button", { name: "Node.js" });
    await initialEnv.hover();
    const envList = page.locator(".dropdown_menu");
    await expect(envList).toBeVisible();
    const listItem = page.locator("ul.dropdown__menu a").getByText("Python");
    await listItem.click();
    await expect(page).toHaveURL("https://playwright.dev/python/");
  });

  test("Check if logos list exist", async ({ page }) => {
    const url = process.env.BASE_URL as string;
    await page.goto(url);

    // locate logos list by locator class name syntax
    const logosListItems = page.locator("ul.logosList_zAAF li");
    // expect the count of list items
    await expect(logosListItems).toHaveCount(9);
  });
});
