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
  // check data
  checkPayload($data);
  // get data
  $special_offers->special_offers_aid = $_GET['special_offersid'];
  $special_offers->special_offers_icons = $data["special_offers_icons"];
  $special_offers->special_offers_services = $data["special_offers_services"];
  $special_offers->special_offers_price = $data["special_offers_price"];
  $special_offers->special_offers_link = $data["special_offers_link"];
  $special_offers->special_offers_datetime = date("Y-m-d H:i:s");
  checkId($special_offers->special_offers_aid);


  // //checks current data to avoid same entries from being updated
  // $user_other_special_offers_fname_old = checkIndex($data, 'user_other_special_offers_fname_old');
  // compareName($special_offers, $user_other_special_offers_fname_old, $special_offers->user_other_special_offers_fname);

  // update
  $query = checkUpdate($special_offers);
  returnSuccess($special_offers, "specialOffers", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
