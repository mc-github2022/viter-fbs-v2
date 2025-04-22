<?php

// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$footer = new Footer($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("footerid", $_GET)) {
  // check data
  checkPayload($data);
  // get data

  $isUpdateFooter = $data['isUpdateFooter'];


  if ($isUpdateFooter == "footerQuicklinksUpdate") {
    $footer->footer_aid = $_GET['footerid'];
    $footer->footer_quicklink_a = $data["footer_quicklink_a"];
    $footer->footer_quicklink_link_a = $data["footer_quicklink_link_a"];
    $footer->footer_quicklink_b = $data["footer_quicklink_b"];
    $footer->footer_quicklink_link_b = $data["footer_quicklink_link_b"];
    $footer->footer_quicklink_c = $data["footer_quicklink_c"];
    $footer->footer_quicklink_link_c = $data["footer_quicklink_link_c"];
    $footer->footer_quicklink_d = $data["footer_quicklink_d"];
    $footer->footer_quicklink_link_d = $data["footer_quicklink_link_d"];
    $footer->footer_quicklink_e = $data["footer_quicklink_e"];
    $footer->footer_quicklink_link_e = $data["footer_quicklink_link_e"];

    $footer->footer_datetime = date("Y-m-d H:i:s");
    checkId($footer->footer_aid);

    // update
    $query = checkUpdate($footer);
  }
  if ($isUpdateFooter == "footerCopyrightUpdate") {
    $footer->footer_aid = $_GET['footerid'];
    $footer->footer_copyright = $data["footer_copyright"];
    $footer->footer_privacy_text = $data["footer_privacy_text"];
    $footer->footer_privacy_link = $data["footer_privacy_link"];
    $footer->footer_terms_text = $data["footer_terms_text"];
    $footer->footer_terms_link = $data["footer_terms_link"];
    $footer->footer_eula_text = $data["footer_eula_text"];
    $footer->footer_eula_link = $data["footer_eula_link"];

    $footer->footer_datetime = date("Y-m-d H:i:s");
    checkId($footer->footer_aid);
    // update
    $query = checkUpdateCopyright($footer);
  }


  returnSuccess($footer, "footer update", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
