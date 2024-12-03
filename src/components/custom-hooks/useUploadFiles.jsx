import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../store/StoreAction";

const useUploadFiles = (url, dispatch) => {
  const [newfile, setFiles] = React.useState(null);

  const uploadFiles = async () => {
    if (newfile) {
      const fd = new FormData();
      fd.append("file", newfile);

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      // console.log(data);
    }
  };

  const handleChangeFiles = (e) => {
    // console.log(e.target.files[0]);

    if (!e.target.files[0]) {
      setFiles("");
      dispatch(setError(false));
      // dispatch(setErrorMessage(""));
      return;
    }

    const val = e.target.files[0];
    // console.log("val", val);

    // console.log("val.size", val.size);
    if (val.size > 8000000) {
      dispatch(setError(true));
      dispatch(setMessage("File is too big. It should be less than 8MB."));
    } else {
      dispatch(setError(false));
      // consoleLog("Set file");
      setFiles(val);
    }
  };

  return { uploadFiles, handleChangeFiles, newfile };
};

export default useUploadFiles;
