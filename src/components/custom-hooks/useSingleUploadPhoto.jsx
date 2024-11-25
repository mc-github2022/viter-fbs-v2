import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../store/StoreAction";

const useSingleUploadPhoto = (url, dispatch) => {
  const [photoSingle, setPhoto] = React.useState(null);

  const singleUploadPhoto = async () => {
    if (photoSingle) {
      const fd = new FormData();
      fd.append("photo", photoSingle);

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      // consoleLog(data);
    }
  };

  const handleChangePhoto = (e) => {
    console.log(e.target.files[0]);

    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      // dispatch(setErrorMessage(""));
      return;
    }

    const img = e.target.files[0];
    // console.log(img);

    // console.log("img.size", img.size);
    if (img.size > 500000) {
      dispatch(setError(true));
      dispatch(setMessage("Photo is too big. It should be less than 500 KB."));
    } else {
      dispatch(setError(false));
      // consoleLog("Set photo");
      setPhoto(img);
    }
  };

  return { singleUploadPhoto, handleChangePhoto, photoSingle };
};

export default useSingleUploadPhoto;
