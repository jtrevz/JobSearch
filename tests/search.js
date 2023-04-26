import { chromium } from "playwright";
import { wait } from "../wait.js";
import dotenv from "dotenv";
dotenv.config();

export async function search() {
  const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  const page = await browser.newPage();

  //Login

  await page.goto("https://www.linkedin.com/");
  await page.getByLabel("Email or phone").click();
  await page.getByLabel("Email or phone").fill(process.env.EMAIL);
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill(process.env.PW);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await wait(Math.floor(Math.random() * 10 + 1) * 1000);

  //Job Search
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .click();
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .fill("full stack developer");
  await wait(2000);
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .press("Enter");

  //--search filters
  await page
    .getByRole("button", {
      name: "Show all filters. Clicking this button displays all available filter options.",
    })
    .click();
  await page
    .locator("label")
    .filter({ hasText: "Most recent Filter by Most recent" })
    .click();
  await wait(1000);
  await page
    .getByRole("group", { name: "Experience level filter" })
    .getByText("Internship", { exact: true })
    .click();
  await wait(1000);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Associate Filter by Associate" })
    .click();
  await wait(1000);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Full-time Filter by Full-time" })
    .click();
  await wait(1000);
  await page
    .getByRole("group", { name: "Job type filter" })
    .locator("label")
    .filter({ hasText: "Internship Filter by Internship" })
    .click();
  await wait(1000);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Remote Filter by Remote" })
    .click();
  await wait(Math.floor(Math.random() * 10 + 1) * 1000);
  await page.getByRole("button", { name: "Show results" }).click();

  //Getting DATA
}
