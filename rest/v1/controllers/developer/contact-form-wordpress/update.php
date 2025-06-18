<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_wordpress = new ContactFormWordpress($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contact_form_wordpress_id", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactFormWordpress = $data['isUpdateContactFormWordpress'];

  if ($isUpdateContactFormWordpress == "contactFormwordpressUpdate") {

    $form_wordpress->form_wordpress_aid = $_GET['contact_form_wordpress_id'];
    $form_wordpress->form_wordpress_file = $data["form_wordpress_file"];
    $form_wordpress->form_wordpress_datetime = date("Y-m-d H:i:s");

    $form_wordpress_file_old = $data["form_wordpress_file_old"];

    checkId($form_wordpress->form_wordpress_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];


    // UPLOAD FILE TO GOOGLDE DRIVE  
    $form_wordpress->form_wordpress_file = checkToUploadGoogleDrive(
      $form_wordpress->form_wordpress_file, // FILES
      $form_wordpress_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $form_wordpress->form_wordpress_file = checkDeleteGoogleDriveApiFiles(
      $form_wordpress->form_wordpress_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($form_wordpress);
  }

  returnSuccess($form_wordpress, "contact form wordpress update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
