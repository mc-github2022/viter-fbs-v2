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
  // get data
  $lcss_batch->lcss_batch_aid = $_GET['lcss_batchid'];
  checkId($lcss_batch->lcss_batch_aid);

  $query = checkDelete($lcss_batch);

  returnSuccess($lcss_batch, "lcssBatch", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
