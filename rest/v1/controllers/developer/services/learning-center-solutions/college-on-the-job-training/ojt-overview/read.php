<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$ojt_overview = new OjtOverview($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("ojt_overviewid", $_GET)) {
  $ojt_overview->ojt_overview_aid = $_GET['ojt_overviewid'];
  checkId($ojt_overview->ojt_overview_aid);
  $query = checkReadAll($ojt_overview);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($ojt_overview);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
