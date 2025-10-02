function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    const result = mixedArray
      .filter((word) => typeof word === "string")
      .map((word) => word.toLowerCase());
    resolve(result);
  });
}

function runTest() {
  let arr = ["PIZZA", 10, true, 25, false, "Wings"];

  lowerCaseWords(arr).then((data) => {
    console.log(data);
  });
}

runTest();