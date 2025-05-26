<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_banner = new PaymentBanner($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("payment_bannerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdatePayment = $data['isUpdatePayment'];

  if ($isUpdatePayment == "paymentBannerUpdate") {

    $payment_banner->payment_banner_aid = $_GET['payment_bannerid'];
    $payment_banner->payment_banner_title = $data["payment_banner_title"];
    $payment_banner->payment_banner_title_bold = $data["payment_banner_title_bold"];
    $payment_banner->payment_banner_description = $data["payment_banner_description"];
    $payment_banner->payment_banner_button_text = $data["payment_banner_button_text"];
    $payment_banner->payment_banner_img = $data["payment_banner_img"];
    $payment_banner->payment_banner_datetime = date("Y-m-d H:i:s");

    $payment_banner_img_old = $data["payment_banner_img_old"];

    checkId($payment_banner->payment_banner_aid);

    $pendingDeleteFile = $data['pendingDeleteFile'];

    // UPLOAD FILE TO GOOGLDE DRIVE  
    $payment_banner->payment_banner_img = checkToUploadGoogleDrive(
      $payment_banner->payment_banner_img, // FILES
      $payment_banner_img_old, // OLD FILES
    );
    // IF DELETE ARRAY > 0 DELETE SOME FILE
    $payment_banner->payment_banner_img = checkDeleteGoogleDriveApiFiles(
      $payment_banner->payment_banner_img, // FILES
      $pendingDeleteFile // TO DELETE FILES
    );

    // update
    $query = checkUpdate($payment_banner);
  }

  returnSuccess($payment_banner, "payment banner update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
