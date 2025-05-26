<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_overview = new PaymentOverview($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payment_overviewid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $paymentOverviewUpdate = $data['paymentOverviewUpdate'];

  if ($paymentOverviewUpdate == "paymentOverviewUpdateImg") {

    $payment_overview->payment_overview_aid = $_GET['payment_overviewid'];
    $payment_overview->payment_overview_subtitle = $data["payment_overview_subtitle"];
    $payment_overview->payment_overview_title = $data["payment_overview_title"];
    $payment_overview->payment_overview_button_text = $data["payment_overview_button_text"];
    $payment_overview->payment_overview_img = $data["payment_overview_img"];
    $payment_overview->payment_overview_datetime = date("Y-m-d H:i:s");

    $payment_overview_img_old = $data["payment_overview_img_old"];

    checkId($payment_overview->payment_overview_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $payment_overview->payment_overview_img = checkToUploadGoogleDrive(
      $payment_overview->payment_overview_img, // FILES
      $payment_overview_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $payment_overview->payment_overview_img = checkDeleteGoogleDriveApiFiles(
      $payment_overview->payment_overview_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($payment_overview);
  }
  if ($paymentOverviewUpdate == "paymentOverviewListUpdate") {
    $payment_overview->payment_overview_aid = $_GET['payment_overviewid'];
    $payment_overview->payment_overview_list_title_a = $data["payment_overview_list_title_a"];
    $payment_overview->payment_overview_list_description_a = $data["payment_overview_list_description_a"];
    $payment_overview->payment_overview_list_title_b = $data["payment_overview_list_title_b"];
    $payment_overview->payment_overview_list_description_b = $data["payment_overview_list_description_b"];
    $payment_overview->payment_overview_list_title_c = $data["payment_overview_list_title_c"];
    $payment_overview->payment_overview_list_description_c = $data["payment_overview_list_description_c"];
    $payment_overview->payment_overview_datetime = date("Y-m-d H:i:s");

    checkId($payment_overview->payment_overview_aid);
    // update
    $query = checkUpdateOverviewList($payment_overview);
  }

  returnSuccess($payment_overview, "payment overview update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
