import { numbersArray } from "./data/arrays";
import { multiplyBy2 } from "./utils/functions";

import customMap from "./arrayMethods/customMap";

const customMapWithNumbers = customMap(numbersArray, multiplyBy2);
console.log("CustomMap:", customMapWithNumbers);