<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_banner = new PayrollBanner($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdatePayroll = $data['isUpdatePayroll'] ?? '';

if ($isUpdatePayroll == "payrollBannerUpdate") {

    $payroll_banner->payroll_banner_title = $data["payroll_banner_title"];
    $payroll_banner->payroll_banner_title_bold = $data["payroll_banner_title_bold"];
    $payroll_banner->payroll_banner_description = $data["payroll_banner_description"];
    $payroll_banner->payroll_banner_button_text = $data["payroll_banner_button_text"];
    $payroll_banner->payroll_banner_button_link = $data["payroll_banner_button_link"];
    $payroll_banner->payroll_banner_img = $data["payroll_banner_img"];
    $payroll_banner->payroll_banner_created = date("Y-m-d H:i:s");
    $payroll_banner->payroll_banner_datetime = date("Y-m-d H:i:s");


    $payroll_banner_img_old = $data["payroll_banner_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $payroll_banner->payroll_banner_img = checkToUploadGoogleDrive(
        $payroll_banner->payroll_banner_img, // FILES
        $payroll_banner_img_old, // OLD FILES
    );

    $query = checkCreate($payroll_banner);
}

returnSuccess($payroll_banner, "payroll banner create", $query);
