<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$business_services_list = new BusinessServicesList($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("business_services_listid", $_GET)) {
  // get data
  checkPayload($data);

  $business_services_list->business_services_list_aid = $_GET['business_services_listid'];

  checkId($business_services_list->business_services_list_aid);
  $query = checkDelete($business_services_list);

  returnSuccess($business_services_list, "services list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
