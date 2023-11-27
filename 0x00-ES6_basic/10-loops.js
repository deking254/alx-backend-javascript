export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr[i] = appendString + value;
    i += 1;
  }
  return arr;
}
