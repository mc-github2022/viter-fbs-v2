<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$packages_list = new PackagesList($conn);
// get should not be present

// check data
checkPayload($data);
// get data
$packages_list->packages_list_is_active = 1;
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
$packages_list->packages_list_created = date("Y-m-d H:i:s");
$packages_list->packages_list_datetime = date("Y-m-d H:i:s");

//checks newly added data if it already exists
isNameExist($packages_list, $packages_list->packages_list_title, $packages_list->packages_list_category_name_id);

$query = checkCreate($packages_list);

returnSuccess($packages_list, "packages_list", $query);
