<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_banner = new PaymentBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("payment_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $payment_banner->payment_banner_aid = $_GET['payment_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($payment_banner->payment_banner_aid);
  $query = checkDelete($payment_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($payment_banner, "payment banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
