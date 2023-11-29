import {uploadPhoto, createUser} from "./utils";

export function handleProfileSignup(){
  uploadPhoto().then((obj)=>{
    createUser().then((usr)=>{
      console.log(`${obj.body} ${usr.firstName} ${obj.lastName}`);
    });
  });
}
