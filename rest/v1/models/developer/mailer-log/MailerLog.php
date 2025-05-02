<?php

class MailerLog
{
    public $sending_email_log_aid;
    public $sending_email_log_is_active;
    public $sending_email_log_audience_id;
    public $sending_email_log_email;
    public $sending_email_log_subject;
    public $sending_email_log_content;
    public $sending_email_log_is_success;
    public $sending_email_log_created;
    public $sending_email_log_datetime;

    public $connection;
    public $lastInsertedId;

    public $sending_email_log_start;
    public $sending_email_log_total;
    public $sending_email_log_search;
    public $dateFrom;
    public $dateTo;

    public $tblSendingEmailLog;
    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSendingEmailLog = "fbsv2_sending_email_log";
        $this->tblNotification = "fbsv2_notification";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "order by sending_email_log_created desc ";
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
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "order by sending_email_log_created desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->sending_email_log_start - 1,
                "total" => $this->sending_email_log_total,
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
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where ";
            $sql .= "sending_email_log_email like :sending_email_log_email ";
            $sql .= "order by sending_email_log_created desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where ";
            $sql .= "sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "order by sending_email_log_created desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_is_success" => $this->sending_email_log_is_success,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByAudience()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where ";
            $sql .= "sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "order by sending_email_log_created desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateMailerLog()
    {
        try {
            $sql = "update {$this->tblSendingEmailLog} set ";
            $sql .= "sending_email_log_email = :sending_email_log_email, ";
            $sql .= "sending_email_log_datetime = :sending_email_log_datetime ";
            $sql .= "where sending_email_log_aid = :sending_email_log_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => $this->sending_email_log_email,
                "sending_email_log_datetime" => $this->sending_email_log_datetime,
                "sending_email_log_aid" => $this->sending_email_log_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function deleteMailerLog()
    {
        try {
            $sql = "delete from {$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_aid = :sending_email_log_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_aid" => $this->sending_email_log_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
