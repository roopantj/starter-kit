// TODO Q6
const logHandler = async (logs) => {
  try {
    for (let i = 0; i < logs.length; i++) {
      await delay(1000).then(() => {
        console.log(logs[i]);
      });
    }
  } catch (e) {
    console.log("Whoops! logHandler() is broken 🙁");
  }
};

const delay = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, t);
  });
};

export { logHandler };

/*

*/
