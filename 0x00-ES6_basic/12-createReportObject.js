export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let length = 0;
      for (const i in employeesList) {
        length++;
      }
      return length;
    },

  };
}
