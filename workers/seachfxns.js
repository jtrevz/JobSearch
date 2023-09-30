import XPath from "./paths.js";
import { wait } from "../helpers/wait.js";
import { skillExtract, skillCount } from "./cleaners.js";
import { nameFilter, objLength, determineScore } from "./score.js";

export async function individualJob(page, i) {
  {
    await page.locator(XPath.jobTitle).nth(i).click(); // where the index is gonna be clicking through
    if (i % 3 == 0) await page.mouse.wheel(0, 300);

    let title = await page.locator(XPath.jobTitle).nth(i).innerText();
    let company = await page.locator(XPath.jobCompany).nth(i).innerText();
    let location;
    try {
      location = await page.locator(XPath.location).nth(i).innerText();
    } catch (e) {
      location = await page.locator(XPath.locationPossible).nth(i).innerText();
    }
    await wait(2000);
    let about = await page.locator(XPath.about).innerText();
    let matching = await page.locator(XPath.matching).nth(0).innerText();
    let nonMatching = await page.locator(XPath.matching).nth(1).innerText();

    let href = await page.locator(XPath.jobTitle).first().getAttribute("href");

    // await wait(2000);

    let aboutSkill = skillCount(about);
    let matchSkill = {
      match: skillExtract(matching),
      nonMatch: skillExtract(nonMatching),
    };

    matchSkill.length = objLength(matchSkill);

    console.log(
      `title: ${title}, \n company: ${company}, \n location: ${location}, \n aboutSkill: ${
        aboutSkill.match
      }, \n matchSkill: ${matchSkill.match}, \n score: ${determineScore(
        nameFilter(title),
        aboutSkill,
        matchSkill
      )}, \n `
    );
    console.log(matchSkill.match);
  }
}
