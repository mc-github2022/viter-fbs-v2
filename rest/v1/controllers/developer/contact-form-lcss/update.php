<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_lcss = new ContactFormLcss($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("contact_form_lcss_id", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateContactFormLcss = $data['isUpdateContactFormLcss'];

  if ($isUpdateContactFormLcss == "contactFormLcssUpdate") {

    $form_lcss->form_lcss_aid = $_GET['contact_form_lcss_id'];
    $form_lcss->form_lcss_subtitle = $data["form_lcss_subtitle"];
    $form_lcss->form_lcss_title = $data["form_lcss_title"];
    $form_lcss->form_lcss_telephone = $data["form_lcss_telephone"];
    $form_lcss->form_lcss_phone = $data["form_lcss_phone"];
    $form_lcss->form_lcss_file = $data["form_lcss_file"];
    $form_lcss->form_lcss_computer_title = $data["form_lcss_computer_title"];
    $form_lcss->form_lcss_computer_name = $data["form_lcss_computer_name"];
    $form_lcss->form_lcss_computer_email = $data["form_lcss_computer_email"];
    $form_lcss->form_lcss_accounting_title = $data["form_lcss_accounting_title"];
    $form_lcss->form_lcss_accounting_name = $data["form_lcss_accounting_name"];
    $form_lcss->form_lcss_accounting_email = $data["form_lcss_accounting_email"];
    $form_lcss->form_lcss_datetime = date("Y-m-d H:i:s");

    $form_lcss_file_old = $data["form_lcss_file_old"];

    checkId($form_lcss->form_lcss_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];


    // UPLOAD FILE TO GOOGLDE DRIVE  
    $form_lcss->form_lcss_file = checkToUploadGoogleDrive(
      $form_lcss->form_lcss_file, // FILES
      $form_lcss_file_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $form_lcss->form_lcss_file = checkDeleteGoogleDriveApiFiles(
      $form_lcss->form_lcss_file, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($form_lcss);
  }

  returnSuccess($form_lcss, "contact form lcss update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
