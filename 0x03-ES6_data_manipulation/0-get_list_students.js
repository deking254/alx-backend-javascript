export default function getListStudents() {
  const people = [];
  const guillaume = {};
  const james = {};
  const serena = {};
  guillaume.id = 1;
  guillaume.firstName = 'Guillaume';
  guillaume.location = 'San Francisco';
  james.id = 2;
  james.firstName = 'James';
  james.location = 'Columbia';
  serena.id = 5;
  serena.firstName = 'Serena';
  serena.location = 'San Francisco';
  people.push(guillaume);
  people.push(james);
  people.push(serena);
  return people;
}
