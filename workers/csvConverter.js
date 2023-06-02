function CSVconverter(array) {
  //gets the keys to make first row
  const arr = [Object.keys(array[0])].concat(array);
  return arr.map((job) => Object.values(job).toString()).join("\n");
}

console.log(
  CSVconverter([
    {
      id: 1,
      name: "Foo",
      timestamp: new Date(),
    },
    {
      id: 2,
      name: "Bar",
      timestamp: new Date(),
    },
    {
      id: 3,
      name: "Baz",
      timestamp: new Date(),
    },
  ])
);
