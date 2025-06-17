<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$marketing_services_list = new MarketingServicesList($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("marketing_services_listid", $_GET)) {
  // get data
  checkPayload($data);

  $marketing_services_list->marketing_services_list_aid = $_GET['marketing_services_listid'];

  checkId($marketing_services_list->marketing_services_list_aid);
  $query = checkDelete($marketing_services_list);

  returnSuccess($marketing_services_list, "services list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
