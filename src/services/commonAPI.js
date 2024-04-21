import axios from "axios"



export const commonAPI =async (httpmethod,url,reqBody)=>{
   const reqConfig = {
    method:httpmethod,
    url:url,
    data:reqBody,
    headers:{"Content-Type":"application/json"}
   }



    return await axios (reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}
