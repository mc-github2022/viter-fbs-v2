<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Form($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("formid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactForm = $data['isUpdateContactForm'];

  if ($isUpdateContactForm == "contactFormUpdate") {
    $val->form_aid = $_GET['formid'];
    $val->form_address = $data["form_address"];
    $val->form_contacts = $data["form_contacts"];
    $val->form_img = $data["form_img"];
    $val->form_facebook_link = $data["form_facebook_link"];
    $val->form_linkedin_link = $data["form_linkedin_link"];
    $val->form_youtube_link = $data["form_youtube_link"];
    $val->form_instagram_link = $data["form_instagram_link"];
    $val->form_tiktok_link = $data["form_tiktok_link"];
    $val->form_updated = date("Y-m-d H:i:s");

    $val_img_old = $data["form_img_old"];

    checkId($val->form_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $val->form_img = checkToUploadGoogleDrive(
      $val->form_img, // FILES
      $val_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $val->form_img = checkDeleteGoogleDriveApiFiles(
      $val->form_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($val);
    returnSuccess($val, "form", $query);
  }
}

// return 404 error if endpoint not available
checkEndpoint();
