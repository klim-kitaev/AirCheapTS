import {Promise} from 'es6-promise';

class PromiseAjax
{
    public static httpGet(url: string):Promise<any>{
       
        return new Promise((resolve,reject)=>{
                 // Create a request
                var request = new XMLHttpRequest();
                request.onerror=()=>{
                    reject(new Error("Can't XHR "+url));
                }
                request.onload=()=>{
                    if(request.status===200){
                        resolve(request.responseText);
                    }else{
                        reject(new Error("Status code was " + request.status))
                    }                    
                }
                // Specify the HTTP verb and URL
                request.open('GET', url, true);
                // Send the request
                request.send();                                
        });
    }


}


export default PromiseAjax