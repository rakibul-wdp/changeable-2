var chunk = function (arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

const result = chunk([1, 2, 3, 4, 5], 1);

console.log("result=>", result);
