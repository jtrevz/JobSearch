const Skills = {
  match: [
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "ReactJS",
    "Express",
    "Node",
    "JSON",
    "jQuery",
    "Mongo",
    "MySQL",
    "MERN",
    "API",
    "Git",
    "GraphQL",
    "ORM",
    "sequelize",
    "mongoose",
    "MVC",
    "Model View Controller",
    "Model-View-Controller",
    "Firebase",
    "OOP",
    "Object Oriented Programming",
    "testing",
    "Webpack",
    "MS Office",
    "Ajax",
    "RESTful",
    "MongoDB",
    "REST",
    "NodeJS",
    "Heroku",
    "relational",
    "JSX",
    "NoSQL",
    "No SQL",
    "GitHub",
    "Node.js",
    "Bootstrap",
    "JWT",
    "CSS Flexbox",
    "Handlebars",
    "NPM",
    "object oriented",
    "object-oriented",
  ],
  nonMatch: [
    "Java",
    "Python",
    "C#",
    "C++",
    "Ruby",
    "Swift",
    "Kotlin",
    "Go",
    "PHP",
    "AngularJS",
    "Vue.js",
    "Django",
    "Ruby on Rails",
    "Flask",
    "Spring",
    "Laravel",
    ".NET",
    "dotnet",
    "PostgreSQL",
    "Oracle",
    "SQL Server",
    "Amazon Web Services (AWS)",
    "Amazon Web Services",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Cloud",
    "DigitalOcean",
    "Bitbucket",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Travis CI",
    "JIRA",
    "Agile methodologies",
  ],
};

function Position(
  title,
  company,
  location,
  // remote,
  aboutSkills,
  matchSkills,
  score
) {
  this.title = title;
  this.company = company;
  this.location = location;
  // this.remote = remote;
  this.aboutSkills = aboutSkills;
  this.matchSkills = matchSkills;
  this.score = score;
}

export { Skills, Position };
