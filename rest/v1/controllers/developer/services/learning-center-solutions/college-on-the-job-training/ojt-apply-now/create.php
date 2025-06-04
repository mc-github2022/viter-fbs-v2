<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_apply = new OjtApplyNow($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateApplyNow = $data['isUpdateApplyNow'] ?? '';

if ($isUpdateApplyNow == "ojtApplyNowUpdate") {

    $ojt_apply->ojt_apply_subtitle = $data["ojt_apply_subtitle"];
    $ojt_apply->ojt_apply_title = $data["ojt_apply_title"];
    $ojt_apply->ojt_apply_requirement_list = $data["ojt_apply_requirement_list"];
    $ojt_apply->ojt_apply_button_text = $data["ojt_apply_button_text"];
    $ojt_apply->ojt_apply_img = $data["ojt_apply_img"];
    $ojt_apply->ojt_apply_created = date("Y-m-d H:i:s");
    $ojt_apply->ojt_apply_datetime = date("Y-m-d H:i:s");


    $ojt_apply_img_old = $data["ojt_apply_img_old"];

    // UPLOAD FILE TO GOOGLE DRIVE  
    $ojt_apply->ojt_apply_img = checkToUploadGoogleDrive(
        $ojt_apply->ojt_apply_img, // FILES
        $ojt_apply_img_old, // OLD FILES
    );

    $query = checkCreate($ojt_apply);
}

returnSuccess($ojt_apply, "create ojt apply now", $query);
