<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_banner = new PayrollBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payroll_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdatePayroll = $data['isUpdatePayroll'];

  if ($isUpdatePayroll == "payrollBannerUpdate") {

    $payroll_banner->payroll_banner_aid = $_GET['payroll_bannerid'];
    $payroll_banner->payroll_banner_title = $data["payroll_banner_title"];
    $payroll_banner->payroll_banner_title_bold = $data["payroll_banner_title_bold"];
    $payroll_banner->payroll_banner_description = $data["payroll_banner_description"];
    $payroll_banner->payroll_banner_button_text = $data["payroll_banner_button_text"];
    $payroll_banner->payroll_banner_button_link = $data["payroll_banner_button_link"];
    $payroll_banner->payroll_banner_img = $data["payroll_banner_img"];
    $payroll_banner->payroll_banner_datetime = date("Y-m-d H:i:s");

    $payroll_banner_img_old = $data["payroll_banner_img_old"];

    checkId($payroll_banner->payroll_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $payroll_banner->payroll_banner_img = checkToUploadGoogleDrive(
      $payroll_banner->payroll_banner_img, // FILES
      $payroll_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $payroll_banner->payroll_banner_img = checkDeleteGoogleDriveApiFiles(
      $payroll_banner->payroll_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($payroll_banner);
  }

  returnSuccess($payroll_banner, "payroll banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
