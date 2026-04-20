<?php

function getHtmlSendMessage(
  $name,
  $email
) {


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
        <p style="margin-bottom: 5px; margin-top: 5px"><p>Hi! </p>' . $name . '</p> 
        <div style="margin-bottom: 20px">
          <p style="margin-top: 5px">Thank you for your interest in joining Frontline Business Solutions. We have received your application and appreciate the time and effort you put into submitting it. Our team is currently reviewing all applications, and we will reach out to you should your qualifications match our requirements. We appreciate your patience and wish you the best in your career journey.</p>
        </div>
      </div> 
    </div>
  </body>
';
  return $html;
}
