import { Skills } from "./classes.js";

//name filters

//set true or false
function isRemote(location) {
  return location.match(/\(([^)]+)\)/)[1].toLowerCase() === "remote";
}

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
  let length = match.length + nonMatch.length;
  return { match, nonMatch, length };
}

function skillExtract(str) {
  if (!str) {
    return [];
  }
  str = str.replace(/(\r\n|\n|\r)/gm, " ").replace("and", "");
  // str = str.slice(str.indexOf("profile") + 7);
  return str.split(",").map((skill) => skill.trim());
}

export { skillExtract, skillCount, isRemote };
