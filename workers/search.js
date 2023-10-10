import { chromium } from "playwright";
import { wait } from "../helpers/wait.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { individualJob } from "./seachfxns.js";
import fs from "fs";
import { Position } from "./classes.js";
import { error } from "console";
import XPath from "./paths.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const userLogin = process.env.USER_LOGIN || "";
const userPass = process.env.USER_PASS || "";
const Roles = [];

const jobs = [];

export async function search() {
  const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  const page = await browser.newPage();
  // await page.goto(`file://${__dirname}/../index.html`);

  // //Login
  await page.goto("https://www.linkedin.com/");
  await wait(5000);
  await page.getByLabel("Email or phone").click();
  await page.getByLabel("Email or phone").fill(process.env.EMAIL);
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill(process.env.PW);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await wait(Math.floor(Math.random() * 10 + 1) * 1000);

  // Job Search
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

  // Search filters
  await wait(5000);
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
  await wait(5000);
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

  // await wait(Math.floor(Math.random() * 10 + 1) * 1000);
  await 2000;
  await page.getByRole("button", { name: "Show results" }).click();

  //Getting DATA
  let pageNumber = 1;
  let newPage = true;

  let jobs = [];

  async function pageJobsData() {
    let listItemCount = (await page.$$(XPath.cardButton)).length;

    for (var i = 0; i < listItemCount; i++) {
      //change this back tp list item length
      let job = await individualJob(page, i);
      console.log("search page job: " + job);
      jobs.push(job);
    }
  }

  while (newPage) {
    // await pageJobsData();
    pageNumber++;
    try {
      // await page.locator("button:near(.promo-card)").click();
      // await page
      //   .locator(
      //     `//li[@class="artdeco-pagination__indicator--number"][${pageNumber}]/button`
      //   )
      //   .click();
      await wait(2000);
      let buttonAria = `Page ${pageNumber}`;
      let button = await page.locator(`[aria-label="${buttonAria}"]`);
      await button.click();
    } catch (e) {
      console.log(e);
      newPage = false;
    }
  }

  // console.log(position);
  // console.log(jobs[7]);
  await wait(5000);
  //   }
  // }
}
