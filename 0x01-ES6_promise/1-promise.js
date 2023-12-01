export default function getFullResponseFromAPI(success) {
  const prom = new Promise((resolve, reject) => {
    if (success) {
      const ok = {
        status: 200,
        body: 'Success',
      };
      resolve(ok);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return prom;
}
