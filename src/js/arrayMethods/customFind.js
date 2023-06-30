function customFind(arr, callback) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    const arrayItem = callback(arr[i], i, arr);
    if (arrayItem) {
      result = arr[i];
      break;
    }
  }
  return result;
}

export default customFind;