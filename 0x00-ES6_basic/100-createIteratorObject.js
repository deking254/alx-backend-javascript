export default function createIteratorObject(report) {
  const employeesProperty = 'allEmployees';
  const employeesReport = report[employeesProperty];
  const reportIterator = [];
  for (const department in employeesReport) {
    if (department) {
      for (const employee of employeesReport[department]) {
        reportIterator.push(employee);
      }
    }
  }
  return reportIterator;
}
