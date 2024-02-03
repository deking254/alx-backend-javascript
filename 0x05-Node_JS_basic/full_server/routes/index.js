const app = require('../server');
const appController = require('../controllers/AppController');
const studentsController = require('../controllers/StudentsController');
app.get('/', (request, response)=>{
  appController.getHomepage(request, response);
});
app.get('/students', (request, response)=>{
  studentsController.getAllStudents(request, response);
});
app.get('/students/:major', (request, response)=>{
  studentsController.getAllStudentsByMajor(request, response);
});
app.listen(1245);
