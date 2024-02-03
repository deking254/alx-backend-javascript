let fs = require('fs')
function readDatabase(path){
  fs.readFile(path, (error, content)=>{
	  console.log(error);
    return new Promise((resolve, reject) =>{
      if (error == null){
        let records = content.toString().split('\n')
        const countryPeople = {};
        const countries = [];
        records.forEach((record)=>{
          if (record.length > 0) {
            const fields = record.split(',');
	    if (countryPeople[fields[3]]) {
              countryPeople[fields[3]].push(fields[0]);
	    } else if (fields[3] !== 'field') {
              countries.push(fields[3]);
              countryPeople[fields[3]] = [];
              countryPeople[fields[3]].push(fields[0]);
	    }
	  }
        })
        resolve(countryPeople);
      } else {
        reject('Cannot load the database');
      }
    })
  });
}
module.exports = readDatabase;
