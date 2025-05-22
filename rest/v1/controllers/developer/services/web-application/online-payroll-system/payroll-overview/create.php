<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$payroll_overview = new PayrollOverview($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$payrollOverviewUpdate = $data['payrollOverviewUpdate'] ?? '';

// Set common fields
$payroll_overview->payroll_overview_created = date("Y-m-d H:i:s");
$payroll_overview->payroll_overview_datetime = date("Y-m-d H:i:s");


if ($payrollOverviewUpdate == "payrollOverviewUpdateImg") {
    $payroll_overview->payroll_overview_subtitle = $data["payroll_overview_subtitle"];
    $payroll_overview->payroll_overview_title = $data["payroll_overview_title"];
    $payroll_overview->payroll_overview_img = $data["payroll_overview_img"];

    $payroll_overview_img_old = $data["payroll_overview_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $payroll_overview->payroll_overview_img = checkToUploadGoogleDrive(
        $payroll_overview->payroll_overview_img, // FILES
        $payroll_overview_img_old, // OLD FILES
    );

    $query = checkCreate($payroll_overview);
}
if ($payrollOverviewUpdate == "payrollOverviewListUpdate") {
    $payroll_overview->payroll_overview_list_title_a = $data["payroll_overview_list_title_a"];
    $payroll_overview->payroll_overview_list_description_a = $data["payroll_overview_list_description_a"];
    $payroll_overview->payroll_overview_list_title_b = $data["payroll_overview_list_title_b"];
    $payroll_overview->payroll_overview_list_description_b = $data["payroll_overview_list_description_b"];
    $payroll_overview->payroll_overview_list_title_c = $data["payroll_overview_list_title_c"];
    $payroll_overview->payroll_overview_list_description_c = $data["payroll_overview_list_description_c"];

    $query = checkCreateOverviewList($payroll_overview);
}


// Return response
returnSuccess($payroll_overview, "payroll overview create", $query);
