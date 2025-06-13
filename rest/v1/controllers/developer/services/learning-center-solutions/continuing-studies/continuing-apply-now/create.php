<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$continuing_apply = new ContinuingApplyNow($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateContinuingApplyNow = $data['isUpdateContinuingApplyNow'] ?? '';

if ($isUpdateContinuingApplyNow == "continuingApplyNowUpdate") {

    $continuing_apply->continuing_apply_subtitle = $data["continuing_apply_subtitle"];
    $continuing_apply->continuing_apply_title = $data["continuing_apply_title"];
    $continuing_apply->continuing_apply_requirement_list = $data["continuing_apply_requirement_list"];
    $continuing_apply->continuing_apply_other_details = $data["continuing_apply_other_details"];
    $continuing_apply->continuing_apply_button_text = $data["continuing_apply_button_text"];
    $continuing_apply->continuing_apply_img = $data["continuing_apply_img"];
    $continuing_apply->continuing_apply_created = date("Y-m-d H:i:s");
    $continuing_apply->continuing_apply_datetime = date("Y-m-d H:i:s");


    $continuing_apply_img_old = $data["continuing_apply_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $continuing_apply->continuing_apply_img = checkToUploadGoogleDrive(
        $continuing_apply->continuing_apply_img, // FILES
        $continuing_apply_img_old, // OLD FILES
    );

    $query = checkCreate($continuing_apply);
}

returnSuccess($continuing_apply, "create continuing apply now", $query);
