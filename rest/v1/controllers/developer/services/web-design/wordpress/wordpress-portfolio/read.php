<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wordpress_portfolio = new WordpressPortfolio($conn);
// get $_GET data
$error = [];
$returnData = [];

if (array_key_exists("wordpress_portfolioid", $_GET)) {
  $wordpress_portfolio->wordpress_portfolio_aid = $_GET['wordpress_portfolioid'];
  checkId($wordpress_portfolio->wordpress_portfolio_aid);
  $query = checkReadAll($wordpress_portfolio);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($wordpress_portfolio);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
