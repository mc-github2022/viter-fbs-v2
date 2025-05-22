<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_banner = new PayrollBanner($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("payroll_bannerid", $_GET)) {
  // get data
  checkPayload($data);

  $payroll_banner->payroll_banner_aid = $_GET['payroll_bannerid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($payroll_banner->payroll_banner_aid);
  $query = checkDelete($payroll_banner);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($payroll_banner, "payroll banner", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
