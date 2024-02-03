const readDatabase =  require('../utils');
let databasePath = '../../database.csv';
class StudentsController{}
StudentsController.getAllStudents = function(request, response){
    //call readDatabase
    try{
      let studentsByCourse = readDatabase(databasePath)
      let title = 'This is the list of our students\n'
      let studentsByCourseArray = [];
      let courses = Object.keys(studentsByCourse);
      let i = 0;
      courses.forEach((course)=>{
	i += 1;
	let numberOfStudentsByCourse = studentsByCourse[course].length;
	let stringOfFirstNamesByCourse = studentsByCourse[course].join(', ');
	if (i < courses.length) {
          studentsByCourseArray.push(`Number of students in ${course}: ${numberOfStudentsByCourse}. List: ${stringOfFirstNamesByCourse}\n`);
	} else {
          studentsByCourseArray.push(`Number of students in ${course}: ${numberOfStudentsByCourse}. List: ${stringOfFirstNamesByCourse}`);
	}
      });
      response.writeHead(200);
      response.end(`${title}${studentsByCourseArray}`);
    } catch(e) {
      response.writeHead(500);
      response.end('Cannot load the database');
    }
  }
StudentsController.getAllStudentsByMajor = function(request, response){
    //calls readDatabase
    try{
      let studentsByCourse = readDatabase(databasePath);
      let studentsFirstNames = '';
      if (request.param === 'CS'){
        studentsFirstNames = studentsByCourse['CS'].join(', ');
      } else if (request.param === 'SWE'){
        studentsFirstNames = studentsByCourse['SWE'].join(', ');
	response.writeHead(200);
	response.end(`List: ${studentsFirstNames}`)
      } else {
        response.writeHead(500);
        response.end('Major parameter must be CS or SWE');
      }
    }catch(e){
      response.writeHead(500);
      response.end('Cannot load the database');
    }
  }
module.exports = StudentsController;
