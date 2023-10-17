function CSVconverter(array) {
  //gets the keys to make first row
  let res = "";
  array.sort((a, b) => (a.score > b.score ? -1 : 1));
  res += Object.keys(array[0]).join(",") + "\n";

  array.forEach((obj) => {
    let result = "";
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "string" && obj[key].includes(",")) {
          obj[key] = obj[key].replace(/,/g, "|");
        } else if (Array.isArray(obj[key])) {
          obj[key] = obj[key].join("|");
        }
        result += obj[key] + ",";
      }
    }
    res += result + "\n";
  });
  return res;
}

export default CSVconverter;
