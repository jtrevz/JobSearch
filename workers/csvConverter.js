function CSVconverter(array) {
  //gets the keys to make first row
  const arr = [Object.keys(array[0])].concat(array);
  return arr.map((job) => Object.values(job).toString()).join("\n");
}

export default CSVconverter;
