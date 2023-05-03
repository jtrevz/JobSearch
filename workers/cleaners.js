import { Skills } from "./classes.js";

//name filters

//set true or false

function skillCount(text) {
  const tLow = text.toLowerCase();
  let matchArr = [];
  let nonMatchArr = [];

  Skills.match.map((skill) => {
    if (tLow.includes(skill.toLowerCase())) {
      matchArr.push(skill);
    }
  });
  Skills.nonMatch.map((skill) => {
    if (tLow.includes(skill.toLowerCase())) {
      nonMatchArr.push(skill);
    }
  });

  return { matchArr, nonMatchArr };
}

function skillExtract(str) {
  str = str.replace(/(\r\n|\n|\r)/gm, " ").replace("and", "");
  str = str.slice(str.indexOf("profile") + 7);
  return str.split(",").map((skill) => skill.trim());
}

export { skillExtract, skillCount };
