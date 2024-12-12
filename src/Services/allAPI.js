import commonAPI from "./commonAPI";

import service_url from "./serviceUrl";

// api call for add video details

   export const addVideoAPI=async(video)=>{
        return await commonAPI("POST",`${service_url}/allVideos`,video)
   }

//    api call for get video 

export const getVideoAPI=async()=>{
    return await commonAPI("GET",`${service_url}/allVideos`,"")
}
//  api for delete videocard
export const deleteVideoAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${service_url}/allVideos/${videoId}`,{})
}
//  api call for watch history

export const saveWatchHistoryAPI = async (videoDetails) => {
    return await commonAPI("POST",`${service_url}/watchHistory`,videoDetails)
};

// api call for get watch history
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${service_url}/watchHistory`,"")
}
// api call for delete
export const deleteHistoryAPI=async(videoId)=>{
    return await commonAPI("DELETE",`${service_url}/watchHistory/${videoId}`,{})
}

// api call for add catogory
export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${service_url}/category`,categoryDetails)
}
// fetch category
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${service_url}/category`,"")
}
// api call for delete data

export const deleteCategoryAPI = async (categoryId) => {
    return await commonAPI("DELETE", `${service_url}/category/${categoryId}`, {});
};
  
// api call for single api
export const getSingleVideoAPI =async(videoId)=>{
    return await commonAPI("GET",`${service_url}/Allvideos/${videoId}`,"")
}
// update category

export const updateCategoryAPI = async (categoryId, categoryDetails) => {
    return await commonAPI("PUT", `${service_url}/category/${categoryId}`, categoryDetails);
};
// dec 9 3:18
// api call for getting single category
export const getSingleCategoryAPI = async (categoryId) => {
    return await commonAPI("GET", `${service_url}/category/${categoryId}`, "");
};


