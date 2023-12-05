export default function cleanSet(set, startString) {
  let finalstring = '';
  let counter = 0;
  if (startString.length > 0) {
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        if (counter === 0) {
          finalstring += item.substring(startString.length);
          counter = 1;
        } else {
          finalstring += '-';
          finalstring += item.substring(startString.length);
        }
      }
      return null;
    });
  }
  return finalstring;
}
