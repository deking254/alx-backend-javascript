export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
    queue.push('Guardrail was processed');
  } catch (error) {
    queue.push(`${error.name}: ${error.message}`);
    queue.push('Guardrail was processed');
  }
  return queue;
}
