<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payment_overview = new PaymentOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$paymentOverviewUpdate = $data['paymentOverviewUpdate'] ?? '';

// Set common fields
$payment_overview->payment_overview_created = date("Y-m-d H:i:s");
$payment_overview->payment_overview_datetime = date("Y-m-d H:i:s");


if ($paymentOverviewUpdate == "paymentOverviewUpdateImg") {
    $payment_overview->payment_overview_subtitle = $data["payment_overview_subtitle"];
    $payment_overview->payment_overview_title = $data["payment_overview_title"];
    $payment_overview->payment_overview_button_text = $data["payment_overview_button_text"];
    $payment_overview->payment_overview_img = $data["payment_overview_img"];

    $payment_overview_img_old = $data["payment_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $payment_overview->payment_overview_img = checkToUploadGoogleDrive(
        $payment_overview->payment_overview_img, // FILES
        $payment_overview_img_old, // OLD FILES
    );

    $query = checkCreate($payment_overview);
}
if ($paymentOverviewUpdate == "paymentOverviewListUpdate") {
    $payment_overview->payment_overview_list_title_a = $data["payment_overview_list_title_a"];
    $payment_overview->payment_overview_list_description_a = $data["payment_overview_list_description_a"];
    $payment_overview->payment_overview_list_title_b = $data["payment_overview_list_title_b"];
    $payment_overview->payment_overview_list_description_b = $data["payment_overview_list_description_b"];
    $payment_overview->payment_overview_list_title_c = $data["payment_overview_list_title_c"];
    $payment_overview->payment_overview_list_description_c = $data["payment_overview_list_description_c"];

    $query = checkCreateOverviewList($payment_overview);
}


// Return response
returnSuccess($payment_overview, "payment overview create", $query);
