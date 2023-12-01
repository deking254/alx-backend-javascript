import * as l from './utils';

const userProperty = 'createUser';
const photoProperty = 'uploadPhoto';
const createUser = l[userProperty];
const uploadPhoto = l[photoProperty];

export default function handleProfileSignup() {
  uploadPhoto().then((obj) => {
    createUser().then((usr) => {
      console.log(`${obj.body} ${usr.firstName} ${usr.lastName}`);
    });
  });
}
