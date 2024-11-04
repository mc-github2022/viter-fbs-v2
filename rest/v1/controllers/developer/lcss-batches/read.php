<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lcss_batch = new LcssBatches($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("lcss_batchid", $_GET)) {
  $lcss_batch->lcss_batch_aid = $_GET['lcss_batchid'];
  checkId($lcss_batch->lcss_batch_aid);
  $query = checkReadAll($lcss_batch);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($lcss_batch);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
