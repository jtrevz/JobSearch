const button = "//ul[@class='scaffold-layout__list-container']/li";
const base1 = "//div[@class='jobs-unified-top-card__content--two-pane']";
const jobLink = `${base1}/a`;
const jobName = `${base1}/a/h2`;
const jobCompany = `${base1}//div/span[1]/span[1]`;
const location = `${base1}//div/span[1]/span[2]`;
const remote = `${base1}//div/span[1]/span[3]`;
// const location = `${baseX}//div/span[1]/span[2]`
const base2 = "//li[@class='jobs-unified-top-card__job-insight']/span"; // may also list level/full time
const salary = `${base2}/a`;
const applicants = `${base1}/div[2]/ul/li[3]span`;
const about = "//div[@id='job-details']";
const matching = "//*[@id='how-you-match-card']/section[2]/div/div/div[1]"; // click

const skillsList = "//ul[@class='job-details-skill-match-status-list']";
