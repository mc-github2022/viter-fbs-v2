<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_details = new PackagesDetails($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$packages_details->packages_details_is_active = 1;
$packages_details->packages_details_title = checkIndex($data, "packages_details_title");
$packages_details->packages_details_list_id = $data["packages_details_list_id"];
$packages_details->packages_details_list = $data["packages_details_list"];
$packages_details->packages_details_is_highlighted = $data["packages_details_is_highlighted"];
$packages_details->packages_details_created = date("Y-m-d H:i:s");
$packages_details->packages_details_datetime = date("Y-m-d H:i:s");


$query = checkCreate($packages_details);

returnSuccess($packages_details, "packages_details", $query);
