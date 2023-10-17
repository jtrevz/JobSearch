function nameFilter(name) {
  let points = 0;
  let position = name.toLowerCase();

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

function determineScore(namePoints, aSkill, mSkill, remote, location) {
  let result = 0;
  result =
    ((aSkill.match.length / aSkill.length +
      mSkill.match.length / mSkill.length) /
      2) *
    100;
  if (remote) {
    result += 30;
  } else if (location.toLowerCase().includes("houston")) {
    result += 15;
  }
  return parseFloat(result.toFixed(2)) + namePoints;
}

export { nameFilter, objLength, determineScore };
