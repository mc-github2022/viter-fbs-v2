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
  // get data
  $special_offers->special_offers_aid = $_GET['special_offersid'];
  checkId($special_offers->special_offers_aid);

  $query = checkDelete($special_offers);

  returnSuccess($special_offers, "specialOffers", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
