function customFilter(arr, callback) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    const appliedCallback = callback(arr[i], i, arr);
    if (appliedCallback) {
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}

export default customFilter;