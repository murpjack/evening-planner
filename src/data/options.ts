import { dataEntry } from "../types/data";
import data from './data.json';

export const options: dataEntry[] = [{
  id: 0,
  name: "Option 1",
  foodDrink: data[0].foodDrink[0],
  fun: data[0].entertainment[0]
},
{
  id: 1,
  name: "Option 2",
  foodDrink: data[0].foodDrink[1],
  fun: data[0].entertainment[1]
},
{
  id: 2,
  name: "Option 3",
  foodDrink: data[0].foodDrink[2],
  fun: data[0].entertainment[2]
}];
export default options;
