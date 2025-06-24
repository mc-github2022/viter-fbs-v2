<?php

function getHtmlSendMessage(
  $unsubscribe_link,
  $newsletter,
  $newKey,
  $ROOT_DOMAIN
) {

  $html = '
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
    </head>
    <body>
      <div style="
        padding-bottom: 16px;>' . $newsletter . '</div>
   
      <div
        class="footer"
        style="padding: 16px 0px; margin-bottom: 0; text-align: center; background-color: #fff; margin: 0 auto; max-width: 700px; width: 100%; line-height: 1;">
          <div ><p style="font-size: 16px; padding-top: 16px;"> Want to change how you receive these emails? <br></p> <small >
            <a style="font-size: 14px;  text-decoration: underline; font-family: Arial, Helvetica, sans-serif" href="' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $newKey . '">Unsubscribe</a></small>
          </div>
      </div>
    </body>
  </html>
  ';

  return $html;
}
