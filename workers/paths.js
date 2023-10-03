const XPath = {
  cardButton: ".jobs-search-results__list-item",
  jobTitle: ".artdeco-entity-lockup__title",
  jobLink: `//div[@class='jobs-unified-top-card__content--two-pane']/a`,
  jobName: `//div[@class='jobs-unified-top-card__content--two-pane']/a/h2`,
  jobCompany: `.artdeco-entity-lockup__subtitle`,
  location: ".artdeco-entity-lockup__caption",
  locationPossible: `.job-card-container__metadata-item`,
  salary: `//li[@class='jobs-unified-top-card__job-insight']/span"/a`,
  applicants: `//li[@class='jobs-unified-top-card__job-insight']/span"/div[2]/ul/li[3]span`,
  about: "//div[@id='job-details']",
  matching: `.job-details-how-you-match__skills-item-subtitle`,
  url: "//ul[@class='scaffold-layout__list-container']/li/div/div//div/div/a",

  paginationButton: ":first-child",
};

export default XPath;
