function nameFilter(name) {
  let points = 0;
  let position = name.toLowerCase();
  // if (
  //   position.includes("onsite") ||
  //   position.includes("senior") ||
  //   position.includes("lead")
  // ) {
  //   return false;
  // }
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

function objLength(skills) {
  return skills.match.length + skills.nonMatch.length;
}

function determineScore(namePoints, aSkill, mSkill) {
  let result = 0;
  result =
    ((aSkill.match.length / aSkill.length +
      mSkill.match.length / mSkill.length) /
      2) *
    100;
  return result.toFixed(2) + namePoints;
}

export { nameFilter, objLength, determineScore };
