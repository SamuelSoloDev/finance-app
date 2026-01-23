import { generateId } from "./generateId";
import { addType } from "./addType";

export function prepareObject(object, type){
  console.log(object);

  let newObject = addType(object, type)
  console.log(newObject);

  newObject.id = generateId();
  return newObject;
}