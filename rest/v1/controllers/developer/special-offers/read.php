<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$special_offers = new SpecialOffers($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("special_offersid", $_GET)) {
  $special_offers->special_offers_aid = $_GET['special_offersid'];
  checkId($special_offers->special_offers_aid);
  $query = checkReadAll($special_offers);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($special_offers);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
