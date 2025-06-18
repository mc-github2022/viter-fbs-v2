<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_overview = new WordpressOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("wordpress_overviewid", $_GET)) {
  $wordpress_overview->wordpress_overview_aid = $_GET['wordpress_overviewid'];
  checkId($wordpress_overview->wordpress_overview_aid);
  $query = checkReadAll($wordpress_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($wordpress_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
