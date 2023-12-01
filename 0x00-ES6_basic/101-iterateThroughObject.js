export default function iterateThroughObject(reportWithIterator) {
  let nameString = '';
  let counter = 0;
  for (const employee of reportWithIterator) {
    if (counter === 0) {
      nameString += employee;
      counter = 1;
    } else {
      nameString += ` |  ${employee}`;
    }
  }
  return nameString;
}
