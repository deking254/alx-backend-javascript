export default function updateUniqueItems(map) {
  for (const item of map) {
    if (item[1] === 1) {
      map.set(item[0], 100);
    }
  }
  return map;
}
