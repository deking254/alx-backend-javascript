export default function createInt8TypedArray(length, position, value) {
  let buffer;
  try {
    buffer = new Int8Array(length);
    buffer[position] = value;
  } catch (err) {
    throw new Error('Position outside range');
  }
  return buffer.buffer;
}
