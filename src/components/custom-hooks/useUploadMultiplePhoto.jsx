import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";

const useUploadMultiplePhoto = (url, dispatch) => {
  // const { store, dispatch } = React.useContext(StoreContext);
  const [photoArrayList, setPhotoArrayList] = React.useState([]);
  let isPhotoJsonString = false;

  const uploadMultiplePhoto = async () => {
    if (photoArrayList.length > 0) {
      const fd = new FormData();
      // loop file
      for (let i = 0; i < photoArrayList.length; i++) {
        if (
          photoArrayList[i] instanceof File !== true ||
          photoArrayList[i] instanceof Blob !== true
        ) {
          isPhotoJsonString = true;
          continue;
        }
        fd.append(
          `file${i}`,
          photoArrayList[i],
          photoArrayList[i].name.toLowerCase()
        );
      }
      // if photo is json string return succes and not upload
      if (isPhotoJsonString) return { success: true };
      // upload photo
      const data = await fetchFormData(devApiUrl + url, fd, dispatch);
      // if not success return error
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      // return data
      return data;
    }
  };

  const handleChangeMultiplePhoto = (
    e,
    fileLimit = 50,
    isAcceptImagesOnly = true
  ) => {
    const files = Array.from(e.target.files);

    // Check if no files were selected
    if (files.length === 0) {
      setPhotoArrayList([]); // You might not want to clear existing files here
      dispatch(setError(false));
      return;
    }

    // Limit the number of files
    if (files.length > fileLimit) {
      dispatch(setError(true));
      dispatch(setMessage(`Only ${fileLimit} images can upload.`));
      return;
    }

    // Filter to only accept images
    if (
      isAcceptImagesOnly &&
      files.some((file) => !file.type.startsWith("image/"))
    ) {
      dispatch(setError(true));
      dispatch(setMessage("Invalid file. Input only accept images."));
      return;
    }

    // Update the photo array list state
    // Here you can choose to concatenate with the existing state
    setPhotoArrayList((prevPhotos) => [...prevPhotos, ...files]);
  };

  return {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  };
};

export default useUploadMultiplePhoto;
