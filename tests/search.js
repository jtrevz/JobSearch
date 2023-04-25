import { chromium } from "playwright";
import { wait } from "../wait.js";

export async function search() {
  const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto(
    "https://www.linkedin.com/jobs/search?keywords=Software%20Developer&location=Houston%2C%20Texas%2C%20United%20States&geoId=103743442&trk=public_jobs_jobs-search-bar_search-submit&position=1&pageNum=0"
  );
  await wait(5000);
}
