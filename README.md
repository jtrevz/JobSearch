# Job Search

**------Currently working on new locators but will be working soon!------**

Job search application that automates job search, scrapes LinkedIn for job postings based on preferences and ranks job criteria and outputs CSV file with job results.

This is meant to be a tool to help prioritize job listings. Please note that the following code is not affiliated with, authorized, maintained, sponsored or endorsed by LinkedIn or any of its affiliates or subsidiaries. Use at your own risk.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technology](#technology)
- [Questions](#questions)

---

## Installation

If you wish to run your own copy of the application, please clone the repo and install the required node modules by running:

```
npm i
```

## Usage

After installing the required npm modules, add your LinkedIn user login information in the example env file. For now, you will have to hardcode job title (/workers/search.js/line:46), and filter preferences(search.js). Turning it into a CLI application and setting preferences is in the works! After preferences are done, run:

```
npm start
```

from the command line.

---

## Technology
-[Playwright](https://playwright.dev/)

-[node.js](https://nodejs.org/en)

---

## Questions
Any questions? Feel free to message me here on Github or email me at jennytrevizo18@gmail.com me! Good Luck on the job search!
