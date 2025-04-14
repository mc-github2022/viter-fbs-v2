<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$process = new HomeProcess($conn);
// get should not be present

// check data
checkPayload($data);
// get data

$isUpdateHomeProcess = $data['isUpdateHomeProcess'] ?? '';

// Set common fields
$process->process_created = date("Y-m-d H:i:s");
$process->process_datetime = date("Y-m-d H:i:s");


if ($isUpdateHomeProcess == "processTitleUpdate") {
    $process->process_title = $data["process_title"];
    $process->process_subtitle = $data["process_subtitle"];

    $query = checkCreate($process);
}
if ($isUpdateHomeProcess == "processAUpdate") {
    $process->process_title_a = $data["process_title_a"];
    $process->process_description_a = $data["process_description_a"];

    $query = checkCreateProcessA($process);
}
if ($isUpdateHomeProcess == "processBUpdate") {
    $process->process_title_b = $data["process_title_b"];
    $process->process_description_b = $data["process_description_b"];

    $query = checkCreateProcessB($process);
}
if ($isUpdateHomeProcess == "processCUpdate") {
    $process->process_title_c = $data["process_title_c"];
    $process->process_description_c = $data["process_description_c"];

    $query = checkCreateProcessC($process);
}
if ($isUpdateHomeProcess == "processDUpdate") {
    $process->process_title_d = $data["process_title_d"];
    $process->process_description_d = $data["process_description_d"];

    $query = checkCreateProcessD($process);
}

// Return response
returnSuccess($process, "process", $query);

// Return 404 error if endpoint not available
checkEndpoint();
