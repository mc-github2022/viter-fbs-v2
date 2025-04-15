import React from "react";
import { setError, setMessage } from "../../store/StoreAction";
import {
  convertTimeToDecimal,
  devApiUrl,
  fetchFormData,
} from "../helpers/functions-general";
import getBlobDuration from "get-blob-duration";

const handleGetSeconds = async (blobFile) => {
  let result = 0,
    isFileOrBlob = blobFile instanceof File || blobFile instanceof Blob;
  if (!isFileOrBlob) return result;
  const isVideo = blobFile.type.split("/").includes("video");
  if (!isVideo) return result;
  const duration = await getBlobDuration(blobFile);
  return convertTimeToDecimal(0, 0, duration);
};

const handleMergeTwoArrayFiles = async (arrayOne = [], arrayTwo = []) => {
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    const duration = await handleGetSeconds(arrayOne[i]);
    arrayOne[i].duration = duration;
    const newFile = JSON.stringify({
      ...arrayOne[i],
      name: arrayOne[i].name,
      id: arrayOne[i]?.id || "",
    });
    result.push(newFile);
  }
  for (let i = 0; i < Array.from(arrayTwo).length; i++) {
    const duration = await handleGetSeconds(Array.from(arrayTwo)[i]);
    Array.from(arrayTwo)[i].duration = duration;
    const newFile = JSON.stringify({
      ...Array.from(arrayTwo)[i],
      name: Array.from(arrayTwo)[i].name,
      id: Array.from(arrayTwo)[i]?.id || "",
    });
    result.push(newFile);
  }
  return result;
};

const useUploadMultipleFiles = (url, dispatch) => {
  const [photoArrayList, setPhotoArrayList] = React.useState([]);

  const uploadMultiplePhoto = async () => {
    // console.log(clientId);
    if (photoArrayList.length > 0) {
      const fd = new FormData();
      let count = 0;
      for (let i = 0; i < photoArrayList.length; i++) {
        if (
          photoArrayList[i] instanceof File !== true ||
          photoArrayList[i] instanceof Blob !== true
        ) {
          continue;
        }
        fd.append(
          `photo${count}`,
          photoArrayList[i],
          photoArrayList[i].name.toLowerCase()
        );
        count++;
      }
      // if (isPhotoJsonString) return { success: true };
      if (count == 0) return { success: true };

      const data = await fetchFormData(devApiUrl + url, fd, dispatch);

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
      return data;
    }
  };

  const handleChangeMultiplePhoto = async (
    e,
    propsField,
    setPhotoArrayList,
    fieldValue,
    fileLimit = 20,
    isAcceptImageOnly = false
  ) => {
    let allImageSizes = 0;
    if (e.target.files.length === 0) return;
    // ACCEPT 20 and less lenght of files
    if (e.target.files.length > fileLimit) {
      dispatch(setError(true));
      dispatch(
        setMessage(`Invalid length of file. Only accept ${fileLimit} or less.`)
      );
      return false;
    }
    // CHECK IF IMAGE ONLY
    if (isAcceptImageOnly) {
      const checkCountIfFileIsImage = Array.from(e.target.files).filter(
        (item) => {
          allImageSizes += item.size;
          return item.type.split("/")[0] !== "image";
        }
      );
      // console.log(allImageSizes);
      if (checkCountIfFileIsImage.length > 0) {
        dispatch(setError(true));
        dispatch(setMessage(`Invalid file. Input only accept images.`));
        return false;
      }
    }
    // get files and sort by name
    const files = Array.from(e.target.files).sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    const myFiles = Array.from(files);
    // RENAME FILE FOR UNIQUE FILENAME
    const fileBlob = myFiles.map((item, i) =>
      item.slice(0, myFiles[i].size, myFiles[i].type)
    );
    const fileName = myFiles.map((item, i) => item.name.split(".")[0]);
    const fileExtension = myFiles.map((item, i) => item.name.split(".")[1]);
    const blobToFile = myFiles.map((item, i) => {
      // const isVideo = item.type.split("/").includes("video");
      const file = new File(
        [fileBlob[i]],
        `${fileName[i].toLowerCase()}_${Date.now()}.${fileExtension[i]}`,
        {
          type: myFiles[i].type,
        }
      );
      return file;
    });
    // COMBINE OLD FILES AND NEW INPUT FILE
    const oldFiles = photoArrayList?.length > 0 ? photoArrayList : [];
    const mergeFilesData = await handleMergeTwoArrayFiles(oldFiles, blobToFile);
    propsField.setFieldValue(fieldValue, [...mergeFilesData]);
    setPhotoArrayList([...oldFiles, ...Array.from(blobToFile)]);
  };

  return {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  };
};

export default useUploadMultipleFiles;
