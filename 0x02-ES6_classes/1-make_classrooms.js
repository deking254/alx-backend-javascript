import ClassRoom from "./0-classroom";

export default function initializeRooms(){
  let objects = [];
  let object1 = new ClassRoom(19);
  let object2 = new ClassRoom(20);
  let object3 = new ClassRoom(34);
  objects.push(object1);
  objects.push(object2);
  objects.push(object3);
  return objects;
}
