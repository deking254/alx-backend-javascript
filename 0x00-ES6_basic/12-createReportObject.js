export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let length = 0;
      for (const department in employeesList) {
        if (department) {
          length += 1;
        }
      }
      return length;
    },
  };
}
