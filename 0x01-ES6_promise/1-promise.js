export default function getFullResponseFromAPI(success){
  let prom = new Promise((resolve, reject)=>{
	 if (success) {
	     let ok = {
	      "status": 200,
	      "body": 'Success',
	     }
	resolve(ok);
	} else {
	  reject(new Error("The fake API is not working currently"));
	}	  
  });
  return prom;	
}
