export default function getStudentsByLocation(arr, city) {
  return arr.filter((item) => {
    if (item.location === city) {
      return item.location;
    }
    return null;
  });
}
