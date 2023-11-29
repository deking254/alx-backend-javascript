export default function handleResponseFromAPI(promise){
  let ok = {
    "status": 200,
    "body": "success",
  }
  promise.then(()=>{
    console.log("Got a response from the API");
    return ok;
  });
  promise.catch(()=>{
    console.log("worry");
  })
}
