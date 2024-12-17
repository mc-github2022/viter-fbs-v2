<?php

function getHtmlSendMessage(
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
   
        <p style="margin-bottom: 5px; margin-top: 5px"><b>Email:  </b>' . $email . '</p>
       
        
      </div> 
    </div>
  </body>
';
  return $html;
}
