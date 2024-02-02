const file = require('fs');

function countStudents(path) {
  try {
    const a = new Promise((resolve) => {
      file.readFile(path, (r, contents) => {
        if (r === null) {
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
          console.log(`Number of students: ${numberOfStudents}`);
          for (let i = 0; i < countries.length; i += 1) {
            const numberOfPeople = countryPeople[countries[i]].length;
            const people = countryPeople[countries[i]].join(', ');
            console.log(`Number of students in ${countries[i]}: ${numberOfPeople}. List: ${people}`);
            if (i === countries.length - 1) {
              resolve();
            }
          }
        }
      });
    });
    return a;
  } catch (e) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
