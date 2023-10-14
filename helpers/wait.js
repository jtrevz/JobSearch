export async function wait(timeMS) {
  let ran = Math.floor(Math.random() * timeMS + 1) * 1000;
  await new Promise((res) => {
    setTimeout(() => {
      res("");
      console.log(timeMS, ran);
    }, ran);
  });
}
