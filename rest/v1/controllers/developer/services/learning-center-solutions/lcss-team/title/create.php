<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$teams_title = new LcssTeamTitle($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateLcssTeamsTitle = $data['isUpdateLcssTeamsTitle'] ?? '';

// Set common fields
$teams_title->teams_title_created = date("Y-m-d H:i:s");
$teams_title->teams_title_datetime = date("Y-m-d H:i:s");


if ($isUpdateLcssTeamsTitle == "lcssTeamsTitleUpdate") {
    $teams_title->teams_title_substitle_a = $data["teams_title_substitle_a"];
    $teams_title->teams_title_title = $data["teams_title_title"];
    $teams_title->teams_title_substitle_b = $data["teams_title_substitle_b"];

    $query = checkCreate($teams_title);
}


// Return response
returnSuccess($teams_title, "create teams title", $query);

// Return 404 error if endpoint not available
checkEndpoint();
