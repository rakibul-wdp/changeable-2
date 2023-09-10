var chunk = function (arr, size) {
  const result = [];
  let subArr = [];

  for (let i = 0; i < arr.length; i++) {
    subArr.push(arr[i]);
    if (subArr.length === size) {
      result.push(subArr);
      subArr = [];
    }
  }

  if (subArr.length) {
    result.push(subArr);
  }

  return result;
};

const result = chunk([1, 2, 3, 4, 5], 2);

console.log("result=>", result);
