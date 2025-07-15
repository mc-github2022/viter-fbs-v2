<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$graphic_overview = new GraphicOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("graphic_overviewid", $_GET)) {
  $graphic_overview->graphic_overview_aid = $_GET['graphic_overviewid'];
  checkId($graphic_overview->graphic_overview_aid);
  $query = checkReadAll($graphic_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($graphic_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
