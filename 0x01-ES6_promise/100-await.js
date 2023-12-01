import * as all from './utils';

const userProperty = 'createUser';
const photoProperty = 'uploadPhoto';
const createUser = all[userProperty];
const uploadPhoto = all[photoProperty];

export default async function asyncUploadUser() {
  const result = {};
  try {
    await uploadPhoto().then((obj) => {
      result.photo = obj;
    });
    await createUser().then((obj) => {
      result.user = obj;
    });
    return result;
  } catch (error) {
    result.photo = null;
    result.user = null;
    return result;
  }
}
