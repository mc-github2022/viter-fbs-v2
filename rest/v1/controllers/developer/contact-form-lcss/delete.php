<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_lcss = new ContactFormLcss($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("contact_form_lcss_id", $_GET)) {
  // get data
  checkPayload($data);

  $form_lcss->form_lcss_aid = $_GET['contact_form_lcss_id'];
  $filesToDelete = $data['filesToDelete'];

  checkId($form_lcss->form_lcss_aid);
  $query = checkDelete($form_lcss);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($form_lcss, "contact form lcss delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
