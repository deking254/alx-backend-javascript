import uploadPhoto from "./upload"
import createUser from "./utils"

export default async function asyncUploadUser(){
  let result = {};
  try {
    await uploadPhoto().then((obj)=>{result.photo = obj;});
    await createUser().then((obj)=>{result.user = obj;});
    return result;
  } catch (error) {
  console.log(error);
  result.photo = null;
  result.user = null;
  return result;
}
}
