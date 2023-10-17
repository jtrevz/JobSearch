import { chromium } from "playwright";
import { wait } from "../helpers/wait.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import CSVconverter from "./csvConverter.js";
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

  //Login
  await page.goto("https://www.linkedin.com/");
  await wait(5);
  await page.getByLabel("Email or phone").click();
  await page.getByLabel("Email or phone").fill(process.env.EMAIL);
  await page.getByLabel("Password", { exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill(process.env.PW);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await wait(15);

  // Job Search
  await page.getByRole("link", { name: "Jobs", exact: true }).click();
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .click();
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .fill("full stack developer");
  await wait(5);
  await page
    .getByRole("combobox", { name: "Search by title, skill, or company" })
    .press("Enter");

  // Search filters
  await wait(5);
  await page
    .getByRole("button", {
      name: "Show all filters. Clicking this button displays all available filter options.",
    })
    .click();
  await page
    .locator("label")
    .filter({ hasText: "Most recent Filter by Most recent" })
    .click();
  await wait(1);
  await page
    .getByRole("group", { name: "Experience level filter" })
    .getByText("Internship", { exact: true })
    .click();
  await wait(2);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Associate Filter by Associate" })
    .click();
  await wait(3);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Full-time Filter by Full-time" })
    .click();
  await wait(2);
  await wait(5);
  await page
    .getByRole("group", { name: "Job type filter" })
    .locator("label")
    .filter({ hasText: "Internship Filter by Internship" })
    .click();
  await wait(3);
  await page
    .getByRole("dialog", { name: "All filters" })
    .locator("label")
    .filter({ hasText: "Remote Filter by Remote" })
    .click();

  await wait(4);
  let showResultsBtn = page.locator(
    ".search-reusables__secondary-filters-show-results-button"
  );
  await showResultsBtn.click();

  //Getting DATA
  let pageNumber = 1;
  let newPage = true;

  let jobs = [];

  async function pageJobsData() {
    let listItemCount = (await page.$$(XPath.cardButton)).length;

    for (var i = 0; i < 7; i++) {
      //change this back tp list item length
      try {
        let job = await individualJob(page, i);
        console.log("search page job: " + job);
        if (job) jobs.push(job);
      } catch (e) {
        console.error(e);
        return;
      }
    }
  }

  function generateCSV() {
    var dateInitial = new Date();
    var date = `${
      dateInitial.getMonth() + 1
    }.${dateInitial.getDate()}.${dateInitial.getFullYear()}`;

    let data = CSVconverter(jobs);

    CSVconverter(jobs);

    fs.writeFile(__dirname + `/fsd-search(${date}).csv`, data, (e) => {
      if (e) {
        console.error(e);
      } else {
        console.log(`CSV file fsd-search(${date}).csv successfully written`);
      }
    });
  }

  await pageJobsData();

  while (newPage) {
    await pageJobsData();
    pageNumber++;
    try {
      await wait(3);
      let buttonAria = `Page ${pageNumber}`;
      let button = await page.locator(`[aria-label="${buttonAria}"]`);
      await button.click();
    } catch (e) {
      console.log(e);
      newPage = false;
    }
  }
  await wait(5);

  await generateCSV();
}
