<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_overview = new PayrollOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payroll_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $payrollOverviewUpdate = $data['payrollOverviewUpdate'];

  if ($payrollOverviewUpdate == "payrollOverviewUpdateImg") {

    $payroll_overview->payroll_overview_aid = $_GET['payroll_overviewid'];
    $payroll_overview->payroll_overview_subtitle = $data["payroll_overview_subtitle"];
    $payroll_overview->payroll_overview_title = $data["payroll_overview_title"];
    $payroll_overview->payroll_overview_img = $data["payroll_overview_img"];
    $payroll_overview->payroll_overview_datetime = date("Y-m-d H:i:s");

    $payroll_overview_img_old = $data["payroll_overview_img_old"];

    checkId($payroll_overview->payroll_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $payroll_overview->payroll_overview_img = checkToUploadGoogleDrive(
      $payroll_overview->payroll_overview_img, // FILES
      $payroll_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $payroll_overview->payroll_overview_img = checkDeleteGoogleDriveApiFiles(
      $payroll_overview->payroll_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($payroll_overview);
  }
  if ($payrollOverviewUpdate == "payrollOverviewListUpdate") {
    $payroll_overview->payroll_overview_aid = $_GET['payroll_overviewid'];
    $payroll_overview->payroll_overview_list_title_a = $data["payroll_overview_list_title_a"];
    $payroll_overview->payroll_overview_list_description_a = $data["payroll_overview_list_description_a"];
    $payroll_overview->payroll_overview_list_title_b = $data["payroll_overview_list_title_b"];
    $payroll_overview->payroll_overview_list_description_b = $data["payroll_overview_list_description_b"];
    $payroll_overview->payroll_overview_list_title_c = $data["payroll_overview_list_title_c"];
    $payroll_overview->payroll_overview_list_description_c = $data["payroll_overview_list_description_c"];
    $payroll_overview->payroll_overview_datetime = date("Y-m-d H:i:s");

    checkId($payroll_overview->payroll_overview_aid);
    // update
    $query = checkUpdateOverviewList($payroll_overview);
  }

  returnSuccess($payroll_overview, "payroll overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
