<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$careers_title = new CareersTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateCareersTitle = $data['isUpdateCareersTitle'] ?? '';

if ($isUpdateCareersTitle == "careersTitleUpdate") {

    $careers_title->careers_title_title = $data["careers_title_title"];
    $careers_title->careers_title_desc = $data["careers_title_desc"];
    $careers_title->careers_title_created = date("Y-m-d H:i:s");
    $careers_title->careers_title_datetime = date("Y-m-d H:i:s");

    $query = checkCreate($careers_title);
}

returnSuccess($careers_title, "careers title create", $query);
