import { chromium } from "playwright";
import { wait } from "../helpers/wait.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import XPath from "./paths.js";
import { skillExtract, skillCount } from "./cleaners.js";
import { nameFilter, objLength } from "./score.js";
import fs from "fs";
import { match } from "assert";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const userLogin = process.env.USER_LOGIN || "";
const userPass = process.env.USER_PASS || "";
const Roles = [];

export async function search() {
  const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/../index.html`);

  //Login
  // await page.goto("https://www.linkedin.com/");
  // await page.getByLabel("Email or phone").click();
  // await page.getByLabel("Email or phone").fill(process.env.EMAIL);
  // await page.getByLabel("Password", { exact: true }).click();
  // await page.getByLabel("Password", { exact: true }).fill(process.env.PW);
  // await page.getByRole("button", { name: "Sign in", exact: true }).click();
  // await wait(Math.floor(Math.random() * 10 + 1) * 1000);

  // //Job Search
  // await page.getByRole("link", { name: "Jobs", exact: true }).click();
  // await page
  //   .getByRole("combobox", { name: "Search by title, skill, or company" })
  //   .click();
  // await page
  //   .getByRole("combobox", { name: "Search by title, skill, or company" })
  //   .fill("full stack developer");
  // await wait(2000);
  // await page
  //   .getByRole("combobox", { name: "Search by title, skill, or company" })
  //   .press("Enter");

  // //Search filters
  // await page
  //   .getByRole("button", {
  //     name: "Show all filters. Clicking this button displays all available filter options.",
  //   })
  //   .click();
  // await page
  //   .locator("label")
  //   .filter({ hasText: "Most recent Filter by Most recent" })
  //   .click();
  // await wait(1000);
  // await page
  //   .getByRole("group", { name: "Experience level filter" })
  //   .getByText("Internship", { exact: true })
  //   .click();
  // await wait(1000);
  // await page
  //   .getByRole("dialog", { name: "All filters" })
  //   .locator("label")
  //   .filter({ hasText: "Associate Filter by Associate" })
  //   .click();
  // await wait(1000);
  // await page
  //   .getByRole("dialog", { name: "All filters" })
  //   .locator("label")
  //   .filter({ hasText: "Full-time Filter by Full-time" })
  //   .click();
  // await wait(1000);
  // await page
  //   .getByRole("group", { name: "Job type filter" })
  //   .locator("label")
  //   .filter({ hasText: "Internship Filter by Internship" })
  //   .click();
  // await wait(1000);
  // await page
  //   .getByRole("dialog", { name: "All filters" })
  //   .locator("label")
  //   .filter({ hasText: "Remote Filter by Remote" })
  //   .click();
  // // await wait(Math.floor(Math.random() * 10 + 1) * 1000);
  // await 2000;
  // await page.getByRole("button", { name: "Show results" }).click();

  //Getting DATA

  // await page.locator("css=job-card-list__title").nth(0).click(); // where the index is gonna be clicking through
  let title = await page.locator(XPath.jobLink).innerText();
  let company = await page.locator(XPath.jobCompany).innerText();
  let city = await page.locator(XPath.location).innerText();
  let remote = await page.locator(XPath.remote).innerText();
  // let salary = await page.locator(XPath.salary).innerText();
  let about = await page.locator(XPath.about).innerText();
  // let applicants = aawait page.locator(XPath.applicants).innerText();
  let matching = await page.locator(XPath.matching).innerText();
  let nonMatching = await page.locator(XPath.nonmatch).innerText();

  let href = await page.locator(XPath.url).first().getAttribute("href");

  await wait(2000);

  let aboutSkill = skillCount(about);
  let matchSkill = {
    match: skillExtract(matching),
    nonMatch: skillExtract(nonMatching),
  };

  matchSkill.length = objLength(matchSkill);

  let points =
    // if ((aboutSkill.match.length + ))

    await wait(5000);
}
