export default function updateStudentGradeByCity(students, city, newgrades) {
  const studentsbycity = students.filter((student) => {
    if (student.location === city) {
      return student;
    }
    return student;
  });
  studentsbycity.map((student) => {
    let found = 0;
    newgrades.map((grade) => {
      if (student.id === grade.studentId) {
        found = 1;
        if (grade.hasOwnProperty('grade')) {
          student.grade = grade.grade;
        }
      }
      return null;
    });
    if (found === 0) {
      student.grade = 'N/A';
    }
    return null;
  });
  return studentsbycity;
}
