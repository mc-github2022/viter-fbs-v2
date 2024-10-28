<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$special_offers = new SpecialOffers($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$special_offers->special_offers_icons = $data["special_offers_icons"];
$special_offers->special_offers_services = $data["special_offers_services"];
$special_offers->special_offers_price = $data["special_offers_price"];
$special_offers->special_offers_link = $data["special_offers_link"];
$special_offers->special_offers_created = date("Y-m-d H:i:s");
$special_offers->special_offers_datetime = date("Y-m-d H:i:s");

// //checks newly added data if it already exists
// isNameExist($special_offers, $special_offers->special_offers_name);

$query = checkCreate($special_offers);

returnSuccess($special_offers, "specialOffers", $query);
