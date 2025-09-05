<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$social_services_list = new SocialMediaServicesList($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("social_services_listid", $_GET)) {
  $social_services_list->social_services_list_aid = $_GET['social_services_listid'];
  checkId($social_services_list->social_services_list_aid);
  $query = checkReadAll($social_services_list);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($social_services_list);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
