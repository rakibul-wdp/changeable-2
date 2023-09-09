var isEmpty = function (obj) {
  console.log(Object.keys(obj).length);
  if (Object.keys(obj).length == 0) {
    return true;
  } else {
    return false;
  }
};

const result = isEmpty({});

console.log("result=>", result);
