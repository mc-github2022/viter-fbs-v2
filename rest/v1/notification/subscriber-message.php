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
	$email
) {
	//trigger exception in a "try" block
	try {
		$mail = new PHPMailer(true);
		$mail->CharSet = "UTF-8";
		$mail->isSMTP();
		$mail->Host = 'mail.frontlinebusiness.com.ph';
		$mail->Port = 465;
		$mail->SMTPSecure = "ssl";
		// $mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		// $mail->Port = 587;
		// $mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;
		$mail->Username = USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = "Subscribe";
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
		$mail->Body = getHtmlSendMessage(
			$email
		);


		// $sent_count = 0;
		// $else_error_count = 0;
		// if (count($emailReceiver) > 0) {
		// 	for ($a = 0; $a < count($emailReceiver); $a++) {
		// 		$newEmailReceiver = trim($emailReceiver[$a]["subscriber_email"]);
		// 		if (trim($newEmailReceiver) != "") {
		// 			$mail->addAddress($newEmailReceiver);
		// 			if ($mail->Send()) {
		// 				$sent_count += 1;
		// 				$mail->clearAddresses(trim($newEmailReceiver));
		// 				continue;
		// 			} else {
		// 				$else_error_count += 1;
		// 				continue;
		// 			}
		// 		}
		// 	}
		// } else {
		// 	return array(
		// 		"error" => "No email receiver found!.",
		// 		"mail_success" => false
		// 	);
		// }

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
