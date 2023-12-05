export default function hasValuesFromArray(set, array) {
  let notfound = 0;
  array.map((element) => {
    if (set.has(element) === false) {
      notfound = 1;
    }
    return null;
  });
  if (notfound === 0) {
    return true;
  }
  return false;
}
