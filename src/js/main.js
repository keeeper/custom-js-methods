import { numbersArray, namesArray } from "./data/arrays";
import { multiplyBy2, includesA } from "./utils/functions";

import customMap from "./arrayMethods/customMap";
import customFilter from "./arrayMethods/customFilter";
import customFind from "./arrayMethods/customFind";

const customMapWithNumbers = customMap(numbersArray, multiplyBy2);
const customFilterContainsA = customFilter(namesArray, includesA);
const customFindContainsA = customFind(namesArray, includesA);

console.log("CustomMap:", customMapWithNumbers);
console.log("CustomFilter:", customFilterContainsA);
console.log("CustomFind:", customFindContainsA);