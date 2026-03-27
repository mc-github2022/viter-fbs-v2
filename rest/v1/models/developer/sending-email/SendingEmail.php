<?php

class SendingEmail
{
    public $notification_purpose;


    public $notification_log_name;
    public $notification_log_email;
    public $notification_log_phone;
    public $notification_log_purpose;
    public $notification_log_subject;
    public $notification_log_message;
    public $notification_log_file;
    public $notification_log_receiver;
    public $notification_log_email_subject;
    public $notification_log_course;
    public $notification_log_school;
    public $notification_log_number_of_hours;
    public $notification_log_created;


    public $connection;
    public $lastInsertedId;

    public $tblNotification;
    public $tblNotificationLog;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotification = "fbsv2_notification";
        $this->tblNotificationLog = "fbsv2_notification_log";
    }

    public function readEmailsByPurpose()
    {
        try {
            $sql = "select notification_email ";
            $sql .= "from ";
            $sql .= "{$this->tblNotification} ";
            $sql .= "where notification_purpose = :notification_purpose ";
            $sql .= "order by notification_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_purpose" => $this->notification_purpose,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblNotificationLog} ";
            $sql .= "(notification_log_name, ";
            $sql .= "notification_log_email, ";
            $sql .= "notification_log_phone, ";
            $sql .= "notification_log_purpose, ";
            $sql .= "notification_log_subject, ";
            $sql .= "notification_log_message, ";
            $sql .= "notification_log_file, ";
            $sql .= "notification_log_receiver, ";
            $sql .= "notification_log_email_subject, ";
            $sql .= "notification_log_course, ";
            $sql .= "notification_log_school, ";
            $sql .= "notification_log_number_of_hours, ";
            $sql .= "notification_log_created ) values ( ";
            $sql .= ":notification_log_name, ";
            $sql .= ":notification_log_email, ";
            $sql .= ":notification_log_phone, ";
            $sql .= ":notification_log_purpose, ";
            $sql .= ":notification_log_subject, ";
            $sql .= ":notification_log_message, ";
            $sql .= ":notification_log_file, ";
            $sql .= ":notification_log_receiver, ";
            $sql .= ":notification_log_email_subject, ";
            $sql .= ":notification_log_course, ";
            $sql .= ":notification_log_school, ";
            $sql .= ":notification_log_number_of_hours, ";
            $sql .= ":notification_log_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_name" => $this->notification_log_name,
                "notification_log_email" => $this->notification_log_email,
                "notification_log_phone" => $this->notification_log_phone,
                "notification_log_purpose" => $this->notification_log_purpose,
                "notification_log_subject" => $this->notification_log_subject,
                "notification_log_message" => $this->notification_log_message,
                "notification_log_file" => $this->notification_log_file,
                "notification_log_receiver" => $this->notification_log_receiver,
                "notification_log_email_subject" => $this->notification_log_email_subject,
                "notification_log_course" => $this->notification_log_course,
                "notification_log_school" => $this->notification_log_school,
                "notification_log_number_of_hours" => $this->notification_log_number_of_hours,
                "notification_log_created" => $this->notification_log_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
