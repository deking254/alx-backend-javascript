const file = require('fs');

function countStudents(path) {
  file.exists(path, (r) => {
    if (r) {
      file.readFile(path, (r, contents) => {
        const content = contents.toString();
        const array = content.split('\n');
        const numberOfStudents = array.length - 2;
        const countryPeople = {};
        const countries = [];
        array.forEach((line) => {
          if (line.length > 0) {
            const fields = line.split(',');
            if (countryPeople[fields[3]]) {
              countryPeople[fields[3]].push(fields[0]);
            } else if (fields[3] !== 'field') {
              countries.push(fields[3]);
              countryPeople[fields[3]] = [];
              countryPeople[fields[3]].push(fields[0]);
            }
          }
        });
        console.log('Number of students: %d', numberOfStudents);
        countries.forEach((country) => {
          const numberOfPeople = countryPeople[country].length;
          const people = countryPeople[country].join(', ');
          console.log('Number of students in %s: %d. List: %s', country, numberOfPeople, people);
        });
      });
    } else {
      throw Error('Cannot load the database');
    }
  });
}
module.exports = countStudents;
