<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_banner = new PaymentBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdatePayment = $data['isUpdatePayment'] ?? '';

if ($isUpdatePayment == "paymentBannerUpdate") {

    $payment_banner->payment_banner_title = $data["payment_banner_title"];
    $payment_banner->payment_banner_title_bold = $data["payment_banner_title_bold"];
    $payment_banner->payment_banner_description = $data["payment_banner_description"];
    $payment_banner->payment_banner_button_text = $data["payment_banner_button_text"];
    $payment_banner->payment_banner_img = $data["payment_banner_img"];
    $payment_banner->payment_banner_created = date("Y-m-d H:i:s");
    $payment_banner->payment_banner_datetime = date("Y-m-d H:i:s");


    $payment_banner_img_old = $data["payment_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $payment_banner->payment_banner_img = checkToUploadGoogleDrive(
        $payment_banner->payment_banner_img, // FILES
        $payment_banner_img_old, // OLD FILES
    );

    $query = checkCreate($payment_banner);
}

returnSuccess($payment_banner, "payment banner create", $query);
