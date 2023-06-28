import { numbersArray } from "../data/arrays";
import { multiplyBy2 } from "../utils/functions";

function customMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const transformedValue = callback(array[i], i, array);
    result.push(transformedValue);
  }
  return result;
}

export default customMap;