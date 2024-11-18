<?php

function getHtmlSendMessage(
    $title,
    $name,
    $email,
    $subject,
    $mobileNumber,
    $message,
) {
  $newSubject="";
  if($subject!=""){
    $newSubject='<p>Subject: ' .$subject. '</p>';
  }

  $html = '
  <style>
  @import url("https://fonts.cdnfonts.com/css/Helvetica Neue-neue-9");
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  p {
    font-size: 14px;
  }
</style>
 <body
    style="
      background-color: #f0f0f0;
      font-family: Helvetica Neue, sans-serif;
      line-height: 1.6;
      padding: 10px 0;
      background-color: #fff;
    "
  >
    <div>
      <div>
        <p><b>From: </b>' .$name. '</p>
        <p style="margin-bottom: 20px">
          <b>Initial Subject: </b> ' .$title. '
        </p>
        <div style="margin-bottom: 20px">
          <p><b>Message: </b></p>
          <p>
            ' .$message. '
          </p>
        </div>
      </div>
      <div>
        <p><b>Information</b></p>
        <p>Email: ' .$email. '</p>
        ' .$newSubject. '
        <p>Mobile Number: ' .$mobileNumber. '</p>
      </div>
    </div>
  </body>
';
  return $html;
}
