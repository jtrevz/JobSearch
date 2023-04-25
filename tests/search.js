import { chromium } from "playwright";
import { wait } from "../wait.js";

export async function search() {
  const browser = await chromium.launch({ headless: false });
  //   const context = await browser.newContext();
  const page = await browser.newPage();

  await page.goto(
    "https://www.linkedin.com/jobs/search/?currentJobId=3553971114&distance=25&geoId=103644278&keywords=software%20developer"
  );
  await wait(5000);
}
