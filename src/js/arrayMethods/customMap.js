function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const transformedValue = callback(array[i], i, array);
    result.push(transformedValue);
  }
  
  return result;
}

export default customMap;