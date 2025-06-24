<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$work_titles = new WorkTitles($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateWorkTitle = $data['isUpdateWorkTitle'] ?? '';

// Set common fields
$work_titles->work_titles_created = date("Y-m-d H:i:s");
$work_titles->work_titles_datetime = date("Y-m-d H:i:s");


if ($isUpdateWorkTitle == "partnersTitleUpdate") {
    $work_titles->work_titles_partners_subtitle = $data["work_titles_partners_subtitle"];
    $work_titles->work_titles_partners_title = $data["work_titles_partners_title"];

    $query = checkCreate($work_titles);
}
if ($isUpdateWorkTitle == "teamsTitleUpdate") {
    $work_titles->work_titles_teams_subtitle = $data["work_titles_teams_subtitle"];
    $work_titles->work_titles_teams_title = $data["work_titles_teams_title"];

    $query = checkCreateTeamsTitle($work_titles);
}


// Return response
returnSuccess($work_titles, "work titles create", $query);
