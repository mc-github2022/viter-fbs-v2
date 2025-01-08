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
      <div>' . $newsletter . '</div>
   
      <div
        class="footer"
        style="
        padding: 0 50px 32px 50px;
        margin-bottom: 0;
        text-align: center;
        background-color: #fff;">
        <div style="text-align: center; line-height: 1;">
          <p style="font-size: 16px">
            <small>
               <a href="' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $newKey . '" style="color: #505050; text-decoration: underline"
                     >Unsubscribe</a>
            </small>
          </p>
          <p style="font-size: 12px; padding: 0 10px">
            Having issues with the link? Try to paste this text on your browser URL: <a target="_blank" rel="nofollow" style=" font-size: 12px; font-family: Helvetica Neue, sans-serif;text-decoration: none; color: #505050;" >' . $ROOT_DOMAIN . '' . $unsubscribe_link . '?key=' . $newKey . '</a> </p>
        </div>
      </div>
    </body>
  </html>
  ';

  return $html;
}
