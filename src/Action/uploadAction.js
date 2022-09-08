import * as UploadApi from "../Api/UploadRequest";

// export const uploadImage = (data) => async (dispatch) => {
//   console.log("uploadimage data",data)
//   try {
//     await UploadApi.uploadImage(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const uploadPost = (data) => async (dispatch) => {
  console.log("from action:", data);
  dispatch({ type: "UPLOAD_START" });
  try {
    const newPost = await UploadApi.uploadPost(data);  
    console.log("uploadAction from",newPost)
    dispatch({ type: "UPLOAD_SUCCESS", data: newPost.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
