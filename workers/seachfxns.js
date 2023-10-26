import XPath from "./paths.js";
import { wait } from "../helpers/wait.js";
import { skillExtract, skillCount, isRemote } from "./cleaners.js";
import { Position } from "./classes.js";

import { nameFilter, objLength, determineScore } from "./score.js";

//check if job includes sr senior imme then return

export async function individualJob(page, i) {
  let job = page.locator(XPath.jobTitle).nth(i);

  await job.scrollIntoViewIfNeeded();
  //TD:better scroll functionality needed
  await job.click();

  let title = await page.locator(XPath.jobTitle).nth(i).innerText();

  let company = await page.locator(XPath.jobCompany).nth(i).innerText();
  let location;
  try {
    location = await page.locator(XPath.location).nth(i).innerText();
  } catch (e) {
    location = await page.locator(XPath.locationPossible).nth(i).innerText();
  }
  await wait(4);
  let about = await page.locator(XPath.about).innerText();
  let matching;
  let matchSkill = {};
  try {
    matching = await page.locator(XPath.matching).nth(0).innerText();
    matchSkill.match = skillExtract(matching);
  } catch (e) {
    console.log(e);
    matchSkill.nonMatch = [];
  }
  let nonMatching;
  try {
    nonMatching = await page.locator(XPath.matching).nth(1).innerHTML();
    matchSkill.nonMatch = skillExtract(nonMatching);
  } catch (e) {
    console.log(`${i}: ${title} nonMatching: ${nonMatching}`);
    matchSkill.nonMatch = [];
  }

  // let href = await page.locator(XPath.jobTitle).first().getAttribute("href");

  await wait(3);
  let remote = isRemote(location);
  let aboutSkill = skillCount(about);

  matchSkill.length = objLength(matchSkill);
  let score = determineScore(
    nameFilter(title),
    aboutSkill,
    matchSkill,
    remote,
    location
  );

  console.log(matchSkill.match);
  const position = new Position(
    title.trim(),
    company.trim(),
    location.trim(),
    remote,
    aboutSkill.match,
    matchSkill.match,
    score
  );
  return { ...position };
}
