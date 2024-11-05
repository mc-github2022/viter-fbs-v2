import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../store/StoreAction";

const useSingleUploadPhoto = (url, dispatch) => {
  const [photo, setPhoto] = React.useState(null);

  const singleUploadPhoto = async (photo) => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);

      try {
        const response = await fetch(devApiUrl + url, {
          method: "POST",
          body: fd,
        });
        const data = await response.json();

        if (response.ok) {
          console.log("Upload successful:", data);
          return data; // Return data if upload is successful
        } else {
          console.error("Upload failed:", data);
          dispatch(setError(true));
          dispatch(setMessage("Failed to upload the photo."));
          return null;
        }
      } catch (error) {
        console.error("Upload error:", error);
        dispatch(setError(true));
        dispatch(setMessage("An error occurred during the upload."));
      }
    }
  };

  const handleChangePhoto = (e) => {
    const img = e.target.files[0];
    if (!img) {
      setPhoto("");
      dispatch(setError(false));
      return;
    }

    if (img.size > 5000000) {
      dispatch(setError(true));
      dispatch(setMessage("Photo is too big. It should be less than 5MB."));
    } else {
      dispatch(setError(false));
      setPhoto(img);
    }
  };

  return { singleUploadPhoto, handleChangePhoto, photo };
};

export default useSingleUploadPhoto;
