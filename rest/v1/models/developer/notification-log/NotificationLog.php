<?php

class NotificationLog
{
    public $notification_log_aid;
    public $notification_log_name;
    public $notification_log_email;
    public $notification_log_phone;
    public $notification_log_purpose;
    public $notification_log_subject;
    public $notification_log_message;
    public $notification_log_file;
    public $notification_log_receiver;
    public $notification_log_created;

    public $connection;
    public $lastInsertedId;

    public $notification_log_start;
    public $notification_log_total;
    public $notification_log_search;

    public $tblNotificationLog;
    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotificationLog = "fbsv2_notification_log";
        $this->tblNotification = "fbsv2_notification";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNotificationLog} ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc, ";
            $sql .= "notification_log_purpose asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNotificationLog} ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc, ";
            $sql .= "notification_log_purpose asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->notification_log_start - 1,
                "total" => $this->notification_log_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblNotificationLog} ";
            $sql .= "where ( ";
            $sql .= "notification_log_name like :notification_log_name ";
            $sql .= "or notification_log_email like :notification_log_email ";
            $sql .= "or notification_log_subject like :notification_log_subject ";
            $sql .= "or notification_log_phone like :notification_log_phone ";
            $sql .= "or notification_log_message like :notification_log_message ";
            $sql .= "or notification_log_file like :notification_log_file ";
            $sql .= "or notification_log_receiver like :notification_log_receiver ";
            $sql .= "or notification_log_purpose like :notification_log_purpose ";
            $sql .= ") ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc, ";
            $sql .= "notification_log_purpose asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_name" => "%{$this->notification_log_search}%",
                "notification_log_email" => "%{$this->notification_log_search}%",
                "notification_log_subject" => "%{$this->notification_log_search}%",
                "notification_log_phone" => "%{$this->notification_log_search}%",
                "notification_log_message" => "%{$this->notification_log_search}%",
                "notification_log_file" => "%{$this->notification_log_search}%",
                "notification_log_receiver" => "%{$this->notification_log_search}%",
                "notification_log_purpose" => "%{$this->notification_log_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByPurpose()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNotificationLog} ";
            $sql .= "where notification_log_purpose = notification_log_purpose ";
            $sql .= "and notification_log_purpose = :notification_log_purpose ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc, ";
            $sql .= "notification_log_purpose asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_purpose" => $this->notification_log_purpose,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchAndPurpose()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNotificationLog} ";
            $sql .= "where notification_log_purpose = :notification_log_purpose ";
            $sql .= "and (notification_log_name like :notification_log_name ";
            $sql .= "or notification_log_email like :notification_log_email ";
            $sql .= "or notification_log_subject like :notification_log_subject ";
            $sql .= "or notification_log_phone like :notification_log_phone ";
            $sql .= "or notification_log_message like :notification_log_message ";
            $sql .= "or notification_log_file like :notification_log_file ";
            $sql .= "or notification_log_receiver like :notification_log_receiver) ";
            $sql .= "order by notification_log_created desc, ";
            $sql .= "notification_log_name asc, ";
            $sql .= "notification_log_purpose asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_log_name" => "%{$this->notification_log_search}%",
                "notification_log_email" => "%{$this->notification_log_search}%",
                "notification_log_subject" => "%{$this->notification_log_search}%",
                "notification_log_phone" => "%{$this->notification_log_search}%",
                "notification_log_message" => "%{$this->notification_log_search}%",
                "notification_log_file" => "%{$this->notification_log_search}%",
                "notification_log_receiver" => "%{$this->notification_log_search}%",
                "notification_log_purpose" => $this->notification_log_purpose,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
