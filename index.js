import { search } from "./tests/search.js";

search()
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
