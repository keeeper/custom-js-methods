import { numbersArray, namesArray } from "./data/arrays";
import { multiplyBy2, includesA } from "./utils/functions";

import customMap from "./arrayMethods/customMap";
import customFilter from "./arrayMethods/customFilter";

const customMapWithNumbers = customMap(numbersArray, multiplyBy2);
const customFilterContainsA = customFilter(namesArray, includesA);
console.log("CustomMap:", customMapWithNumbers);
console.log("CustomFilter:", customFilterContainsA);