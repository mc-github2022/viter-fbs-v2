<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form_wordpress = new ContactFormWordpress($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("contact_form_wordpress_id", $_GET)) {
  // get data
  checkPayload($data);

  $form_wordpress->form_wordpress_aid = $_GET['contact_form_wordpress_id'];
  $filesToDelete = $data['filesToDelete'];

  checkId($form_wordpress->form_wordpress_aid);
  $query = checkDelete($form_wordpress);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($form_wordpress, "contact form wordpress delete", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
