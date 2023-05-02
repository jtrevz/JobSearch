import { Skills, desc } from "./classes.js";

function skillCount(text) {
  let points = 0;
  let caseText = text.toLowerCase();
  for (const point in Skills) {
    Skills[point].map((skill) => {
      if (text.toLowerCase().includes(skill.toLowerCase())) {
        points += parseInt(point);
      }
    });
  }
  return points;
}

function skillExtract(str) {
  str = str.replace(/(\r\n|\n|\r)/gm, " ").replace("and", "");
  str = str.slice(str.indexOf("profile") + 7);
  return str.split(",").map((skill) => skill.trim());
}

export { skillExtract };
