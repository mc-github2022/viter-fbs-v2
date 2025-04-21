<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_default = new ContactFormDefault($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contact_form_default_id", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactFormDefault = $data['isUpdateContactFormDefault'];

  if ($isUpdateContactFormDefault == "contactFormDefaultUpdate") {

    $form_default->form_default_aid = $_GET['contact_form_default_id'];
    $form_default->form_default_subtitle = $data["form_default_subtitle"];
    $form_default->form_default_title = $data["form_default_title"];
    $form_default->form_default_address = $data["form_default_address"];
    $form_default->form_default_telephone = $data["form_default_telephone"];
    $form_default->form_default_phone = $data["form_default_phone"];
    $form_default->form_default_email = $data["form_default_email"];
    $form_default->form_default_img = $data["form_default_img"];
    $form_default->form_default_file = $data["form_default_file"];
    $form_default->form_default_facebook_link = $data["form_default_facebook_link"];
    $form_default->form_default_linkedin_link = $data["form_default_linkedin_link"];
    $form_default->form_default_youtube_link = $data["form_default_youtube_link"];
    $form_default->form_default_instagram_link = $data["form_default_instagram_link"];
    $form_default->form_default_tiktok_link = $data["form_default_tiktok_link"];
    $form_default->form_default_datetime = date("Y-m-d H:i:s");

    $form_default_img_old = $data["form_default_img_old"];
    $form_default_file_old = $data["form_default_file_old"];

    checkId($form_default->form_default_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $form_default->form_default_img = checkToUploadGoogleDrive(
      $form_default->form_default_img, // FILES
      $form_default_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $form_default->form_default_img = checkDeleteGoogleDriveApiFiles(
      $form_default->form_default_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $form_default->form_default_file = checkToUploadGoogleDrive(
      $form_default->form_default_file, // FILES
      $form_default_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $form_default->form_default_file = checkDeleteGoogleDriveApiFiles(
      $form_default->form_default_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($form_default);
  }

  returnSuccess($form_default, "contact form default update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
