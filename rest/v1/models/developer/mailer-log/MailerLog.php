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

    public function updateMailerSubjectAndContent()
    {
        try {
            $sql = "update {$this->tblSendingEmailLog} set ";
            $sql .= "sending_email_log_subject = :sending_email_log_subject, ";
            $sql .= "sending_email_log_content = :sending_email_log_content, ";
            $sql .= "sending_email_log_datetime = :sending_email_log_datetime ";
            $sql .= "where sending_email_log_aid = :sending_email_log_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_subject" => $this->sending_email_log_subject,
                "sending_email_log_content" => $this->sending_email_log_content,
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

    // filter by status and search 
    public function filterByStatusSentOrFailedAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where ";
            $sql .= "sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by audience and search 
    public function filterByAudienceAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where ";
            $sql .= "sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by status and both date
    public function filterByStatusAndAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by audience and both date
    public function filterByAudienceAndAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, status, and both date
    public function filterBySearchStatusAndAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by search, audience, and both date
    public function filterBySearchAudienceAndAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter status, date from, and search
    public function filterByStatusDateFromSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter audience, date from, and search
    public function filterByAudienceDateFromSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter status, date to, and search
    public function filterByStatusDateToSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_to" => $this->dateTo,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter audience, date to, and search
    public function filterByAudienceDateToSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_to" => $this->dateTo,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by status and date from
    public function filterByStatusAndDateFrom()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by audience and date from
    public function filterByAudienceAndDateFrom()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by status and date to
    public function filterByStatusAndDateTo()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = :sending_email_log_is_success ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_to) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_to" => $this->dateTo,
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by audience and date to
    public function filterByAudienceAndDateTo()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_audience_id = :sending_email_log_audience_id ";
            $sql .= "and DATE(sending_email_log_created) = DATE(:date_to) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_to" => $this->dateTo,
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter both date
    public function filterByAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter one entry of date
    public function filterBySingleDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where ( DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "or DATE(sending_email_log_created) = DATE(:date_to) ) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_created asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter search and both date 
    public function searchAndAllDate()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where DATE(sending_email_log_created) between DATE(:date_from) and DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_is_active asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
                "date_to" => $this->dateTo,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter search and date from 
    public function searchAndDateFrom()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where DATE(sending_email_log_created) = DATE(:date_from) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_is_active asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_from" => $this->dateFrom,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter search and date to 
    public function searchAndDateTo()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSendingEmailLog} ";
            $sql .= "where DATE(sending_email_log_created) = DATE(:date_to) ";
            $sql .= "and (sending_email_log_email like :sending_email_log_email ";
            $sql .= "or sending_email_log_subject like :sending_email_log_subject ";
            $sql .= "or DATE_FORMAT(sending_email_log_created, '%M %e, %Y') LIKE :sending_email_log_created) ";
            $sql .= "order by sending_email_log_created desc, ";
            $sql .= "sending_email_log_email asc, ";
            $sql .= "sending_email_log_is_active asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_email" => "%{$this->sending_email_log_search}%",
                "sending_email_log_subject" => "%{$this->sending_email_log_search}%",
                "sending_email_log_created" => "%{$this->sending_email_log_search}%",
                "date_to" => $this->dateTo,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
