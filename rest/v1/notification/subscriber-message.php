<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

include_once("mail-config.php");
include_once("template/subscriber-message.php");

function sendEmailSubscriber(
	$unsubscribe_link,
	$email,
	$key
) {
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->CharSet = "UTF-8";
		$mail->isSMTP();
		$mail->Host = HOST;
		$mail->Port = PORT;
		$mail->SMTPSecure = SMTPSECURE;
		// $mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		// $mail->Port = 587;
		// $mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;
		$mail->Username = USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = "Welcome to Frontline Business Solutions Newsletter";
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlSendMessage(
			$unsubscribe_link,
			$email,
			$key,
			ROOT_DOMAIN,
		);


		// only 1 email can receiver
		if ($email != "") {
			$mail->addAddress($email);
		}
		if ($mail->Send()) {
			return array(
				"error" => "Sucessfully sent",
				"mail_success" => true
			);
		} else {
			return array(
				"error" => "No email receiver found!",
				"mail_success" => false
			);
		}
	}

	//catch exception
	catch (Exception $e) {
		return array(
			"mail_error" => $e->getMessage(),
			"error" => "Could not authenticate. Please make sure your email and password are correct.",
			"mail_success" => false
		);
	}
}
