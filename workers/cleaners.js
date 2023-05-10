import { Skills } from "./classes.js";

//name filters
function nameFilter(name) {
  let points = 0;
  let position = name.toLowerCase();
  if (
    position.includes("onsite") ||
    position.includes("senior") ||
    position.includes("lead")
  ) {
    return points;
  }
  if (position.includes("junior")) {
    points = +20;
  }
  if (
    position.includes("react") ||
    position.includes("javascript") ||
    position.includes("node")
  ) {
    points += 10;
  }
  return points;
}

//set true or false

function skillCount(text) {
  const tLow = text.toLowerCase();
  let match = [];
  let nonMatch = [];

  Skills.match.map((skill) => {
    if (tLow.includes(skill.toLowerCase())) {
      match.push(skill);
    }
  });
  Skills.nonMatch.map((skill) => {
    if (tLow.includes(skill.toLowerCase())) {
      nonMatch.push(skill);
    }
  });

  return { match, nonMatch };
}

function skillExtract(str) {
  str = str.replace(/(\r\n|\n|\r)/gm, " ").replace("and", "");
  str = str.slice(str.indexOf("profile") + 7);
  return str.split(",").map((skill) => skill.trim());
}

export { skillExtract, skillCount, nameFilter };
