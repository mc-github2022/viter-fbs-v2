<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_list = new PackagesList($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("packages_listId", $_GET)) {
  // check data
  checkPayload($data);
  // get data
  $packages_list->packages_list_aid = $_GET['packages_listId'];
  $packages_list->packages_list_title = checkIndex($data, "packages_list_title");
  $packages_list->packages_list_title_desc = $data["packages_list_title_desc"];
  $packages_list->packages_list_price = $data["packages_list_price"];
  $packages_list->packages_list_price_desc = $data["packages_list_price_desc"];
  $packages_list->packages_list_foreign_price = $data["packages_list_foreign_price"];
  $packages_list->packages_list_foreign_price_desc = $data["packages_list_foreign_price_desc"];
  $packages_list->packages_list_other_details = $data["packages_list_other_details"];
  $packages_list->packages_list_button_text = $data["packages_list_button_text"];
  $packages_list->packages_list_is_highlighted = $data["packages_list_is_highlighted"];
  $packages_list->packages_list_category_name_id = $data["packages_list_category_name_id"];
  $packages_list->packages_list_datetime = date("Y-m-d H:i:s");
  checkId($packages_list->packages_list_aid);


  //checks current data to avoid same entries from being updated
  $packages_list_title_old = checkIndex($data, 'packages_list_title_old');
  compareName($packages_list, $packages_list_title_old, $packages_list->packages_list_title);

  // update
  $query = checkUpdate($packages_list);
  returnSuccess($packages_list, "packages_list", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
