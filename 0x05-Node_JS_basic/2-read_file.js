const file = require('fs');

function countStudents(path) {
  if (file.existsSync) {
    try {
      const content = file.readFileSync(path).toString();
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
      countries.forEach((country) => {
        const numberOfPeople = countryPeople[country].length;
        const people = countryPeople[country].join(', ');
        console.log(`Number of students in ${country}: ${numberOfPeople}. List: ${people}`);
      });
    } catch (error) {
      throw Error('Cannot load the database');
    }
  }
}
module.exports = countStudents;
