<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$val = new Content($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("formcontentid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $val->form_content_aid = $_GET['formcontentid'];
  $val->form_content_page_id = $data["form_content_page_id"];
  $val->form_content_purpose = $data["form_content_purpose"];
  $val->form_content_portfolio = $data["form_content_portfolio"];
  $val->form_content_title = $data["form_content_title"];
  $val->form_content_subtitle = $data["form_content_subtitle"];
  $val->form_content_is_upload_file = $data["form_content_is_upload_file"];
  $val->form_content_is_subject_input = $data["form_content_is_subject_input"];
  $val->form_content_details = $data["form_content_details"];
  $val->form_content_updated = date("Y-m-d H:i:s");

  $form_content_portfolio_old = $data["form_content_portfolio_old"];

  checkId($val->form_content_aid);

  $pendingDeleteFile = $data['pendingDeleteFile'];

  // UPLOAD FILE TO GOOGLDE DRIVE  
  $val->form_content_portfolio = checkToUploadGoogleDrive(
    $val->form_content_portfolio, // FILES
    $form_content_portfolio_old, // OLD FILES
  );
  // IF DELETE ARRAY > 0 DELETE SOME FILE
  $val->form_content_portfolio = checkDeleteGoogleDriveApiFiles(
    $val->form_content_portfolio, // FILES
    $pendingDeleteFile // TO DELETE FILES
  );

  // update
  $query = checkUpdate($val);
  returnSuccess($val, "form content", $query);
}


// return 404 error if endpoint not available
checkEndpoint();
