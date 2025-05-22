<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_overview = new PayrollOverview($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("payroll_overviewid", $_GET)) {
  // get data
  checkPayload($data);

  $payroll_overview->payroll_overview_aid = $_GET['payroll_overviewid'];
  $filesToDelete = $data['filesToDelete'];

  checkId($payroll_overview->payroll_overview_aid);
  $query = checkDelete($payroll_overview);

  // TO DELETE ALL FILES IN GOOGLE DRIVE API
  // returnError($jsonStringToArray);
  if ($filesToDelete != '') {
    $jsonStringToArray = (array)json_decode($filesToDelete);
    $pendingDeleteFile = array_map(function ($item) {
      return json_encode($item, true);
    }, $jsonStringToArray);
    checkDeleteGoogleDriveApiFiles($filesToDelete, $pendingDeleteFile);
  }

  returnSuccess($payroll_overview, "payroll overview", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
