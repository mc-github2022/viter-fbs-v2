<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_list = new SocialMediaServicesList($conn);
// get $_GET data
$body = file_get_contents("php://input");
$data = json_decode($body, true);
if (array_key_exists("social_services_listid", $_GET)) {
  // get data
  checkPayload($data);

  $social_services_list->social_services_list_aid = $_GET['social_services_listid'];

  checkId($social_services_list->social_services_list_aid);
  $query = checkDelete($social_services_list);

  returnSuccess($social_services_list, "services list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
