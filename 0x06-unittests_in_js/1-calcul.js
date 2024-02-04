function calculateNumber(type, a, b){
  let types = ['SUM', 'SUBTRACT', 'DIVIDE'];
  if (types.includes(type)) {
    if (type === 'SUM'){
      let sum = Math.round(a) + Math.round(b);
      return sum;
    }
    if (type === 'SUBTRACT'){
      let subtraction = Math.round(a) - Math.round(b);
      return subtraction;
    }
    if (type === 'DIVIDE'){
      if (Math.round(b) === 0){
        return 'Error';
      } else {
        let division = Math.round(a) / Math.round(b);
	return division;
      }
    }
  }
}
module.exports = calculateNumber;
