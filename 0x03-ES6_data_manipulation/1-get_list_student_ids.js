export default function getListStudentIds(arr) {
  const ids = [];
  if (arr.constructor.name === 'Array') {
    arr.map((item) => {
      ids.push(item.id);
      return null;
    });
  }
  return ids;
}
