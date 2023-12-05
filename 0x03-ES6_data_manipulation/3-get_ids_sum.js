export default function getStudentIdsSum(arr) {
  let total = 0;
  const j = arr.reduce((person) => {
    const i = arr.indexOf(person);
    total += person.id;
    return arr[i + 1];
  });
  total += j.id;
  return total;
}
