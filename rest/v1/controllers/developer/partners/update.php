<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$partners = new Partners($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("partnersid", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $partners->partners_aid = $_GET['partnersid'];
  $partners->partners_name = $data["partners_name"];
  $partners->partners_page = checkIndex($data, "partners_page");
  $partners->partners_img = $data["partners_img"];
  $partners->partners_datetime = date("Y-m-d H:i:s");

  $partners_img_old = $data["partners_img_old"];

  checkId($partners->partners_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $partners->partners_img = checkToUploadGoogleDrive(
    $partners->partners_img, // FILES
    $partners_img_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $partners->partners_img = checkDeleteGoogleDriveApiFiles(
    $partners->partners_img, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );


  // update
  $query = checkUpdate($partners);
  returnSuccess($partners, "partners", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
