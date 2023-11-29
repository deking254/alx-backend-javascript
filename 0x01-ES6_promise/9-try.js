export default function guardrail(mathFunction){
  let queue = [];
  try {
    let result = mathFunction();
    queue.push(result);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}
