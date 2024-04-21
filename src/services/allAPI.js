//api for adding videos

import { serverURL } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const uploadVideoApi = async(reqBody)=>{
 return await   commonAPI('POST',`${serverURL}/videos`,reqBody)
 
}

//api to get uploaded videos

export const getUploadVideosApi = async()=>{
    return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete a video

export const deleteVideoApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

export const addToHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//api to get all video from history
export const getAllVideoHistoryApi = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete data from the watch history

export const deleteVideoHistoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

 //api to add category
export const addCategoryApi = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/category`,reqBody)
}
//api to get all category
export const getAllCategoryApi = async()=>{
    return await commonAPI('GET',`${serverURL}/category`,"")
}


//api to delete a category

export const deleteCategoryApi = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

//api to get  particular video

export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update the category

export const updateCategoryApi = async (id,reqBody)=>{
    return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}
