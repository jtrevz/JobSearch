export async function wait(timeMS) {
  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, timeMS);
  });
}
