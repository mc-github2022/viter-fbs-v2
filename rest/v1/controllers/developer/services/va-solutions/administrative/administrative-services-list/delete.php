<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$administrative_services_list = new AdministrativeServicesList($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("administrative_services_listid", $_GET)) {
  // get data
  checkPayload($data);

  $administrative_services_list->administrative_services_list_aid = $_GET['administrative_services_listid'];

  checkId($administrative_services_list->administrative_services_list_aid);
  $query = checkDelete($administrative_services_list);

  returnSuccess($administrative_services_list, "services list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
