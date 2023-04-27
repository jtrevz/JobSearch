const XPath = {
  button: "//ul[@class='scaffold-layout__list-container']/li",
  jobLink: `//div[@class='jobs-unified-top-card__content--two-pane']/a`,
  jobName: `//div[@class='jobs-unified-top-card__content--two-pane']/a/h2`,
  jobCompany: `//div[@class='jobs-unified-top-card__content--two-pane']//div/span[1]/span[1]`,
  location: `//div[@class='jobs-unified-top-card__content--two-pane']//div/span[1]/span[2]`,
  remote: `//div[@class='jobs-unified-top-card__content--two-pane']//div/span[1]/span[3]`,
  salary: `//li[@class='jobs-unified-top-card__job-insight']/span"/a`,
  applicants: `//li[@class='jobs-unified-top-card__job-insight']/span"/div[2]/ul/li[3]span`,
  about: "//div[@id='job-details']",
  matching: "//*[@id='how-you-match-card']/section[2]/div/div/div[1]", // click
  nonmatch: "//*[@id='how-you-match-card']/section[2]/div/div/div[2]",
  skillsList: "//ul[@class='job-details-skill-match-status-list']",
};

export default XPath;
