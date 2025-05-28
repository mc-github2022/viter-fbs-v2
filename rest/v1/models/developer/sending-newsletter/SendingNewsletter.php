<?php

class SendingNewsletter
{
    public $audience_name;

    public $subscriber_aid;
    public $subscriber_email;
    public $subscriber_is_active;
    public $subscriber_key;
    public $subscriber_audience_id;

    public $sending_email_log_aid;
    public $sending_email_log_is_active;
    public $sending_email_log_audience_id;
    public $sending_email_log_email;
    public $sending_email_log_subject;
    public $sending_email_log_content;
    public $sending_email_log_is_success;
    public $sending_email_log_key;
    public $sending_email_log_created;
    public $sending_email_log_datetime;

    public $connection;
    public $lastInsertedId;
    public $subscriber_search;

    public $tblSubscriber;
    public $tblAudience;
    public $tblSendingEmailLog;
    public $tblNewsletter;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSubscriber = "fbsv2_subscriber_list";
        $this->tblAudience = "fbsv2_audience";
        $this->tblSendingEmailLog = "fbsv2_sending_email_log";
        $this->tblNewsletter = "fbsv2_newsletter";
    }

    // read email to send newsletter
    public function readAllEmailNewsletter()
    {
        try {
            $sql = "select subscriber_email, subscriber_key ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "where subscriber_is_active = 1 ";
            $sql .= "order by subscriber_email ";
            $query = $this->connection->query($sql);
            $query->execute([]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readEmailNewsletter()
    {
        try {
            $sql = "select subscriber_email, subscriber_key ";
            $sql .= "from {$this->tblSubscriber} ";
            $sql .= "where (subscriber_audience_id = :subscriber_audience_id ";
            $sql .= "or subscriber_email = :subscriber_email) ";
            $sql .= "and subscriber_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute(
                [
                    "subscriber_audience_id" => $this->subscriber_audience_id,
                    "subscriber_email" => $this->subscriber_email,
                ]
            );
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function searchSubcribers() // for Subscribers debounce
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSubscriber} as subscriber, ";
            $sql .= "{$this->tblAudience} as audience ";
            $sql .= "where subscriber.subscriber_audience_id = audience.audience_aid ";
            $sql .= "and (subscriber.subscriber_email like :subscriber_email ";
            $sql .= "or audience.audience_name like :audience_name) ";
            $sql .= "and subscriber_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "%{$this->subscriber_search}%",
                "audience_name" => "%{$this->subscriber_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchNewsletter() // for subject debounce
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblNewsletter} ";
            $sql .= "where ";
            $sql .= "newsletter_subject like :newsletter_subject ";
            $sql .= "and newsletter_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "newsletter_subject asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_subject" => "%{$this->subscriber_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readEmailLog()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSendingEmailLog} ";
            $sql .= "where sending_email_log_is_success = 0 ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSendingEmailLog} ";
            $sql .= "(sending_email_log_audience_id, ";
            $sql .= "sending_email_log_email, ";
            $sql .= "sending_email_log_subject, ";
            $sql .= "sending_email_log_content, ";
            $sql .= "sending_email_log_key, ";
            $sql .= "sending_email_log_is_active, ";
            $sql .= "sending_email_log_created, ";
            $sql .= "sending_email_log_datetime ) values ( ";
            $sql .= ":sending_email_log_audience_id, ";
            $sql .= ":sending_email_log_email, ";
            $sql .= ":sending_email_log_subject, ";
            $sql .= ":sending_email_log_content, ";
            $sql .= ":sending_email_log_key, ";
            $sql .= "1, ";
            $sql .= ":sending_email_log_created, ";
            $sql .= ":sending_email_log_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_audience_id" => $this->sending_email_log_audience_id,
                "sending_email_log_email" => $this->sending_email_log_email,
                "sending_email_log_subject" => $this->sending_email_log_subject,
                "sending_email_log_content" => $this->sending_email_log_content,
                "sending_email_log_key" => $this->sending_email_log_key,
                "sending_email_log_created" => $this->sending_email_log_created,
                "sending_email_log_datetime" => $this->sending_email_log_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSendingEmailLog} set ";
            $sql .= "sending_email_log_is_success = :sending_email_log_is_success, ";
            $sql .= "sending_email_log_datetime = :sending_email_log_datetime ";
            $sql .= "where sending_email_log_email = :sending_email_log_email ";
            $sql .= "and sending_email_log_is_success = 0 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sending_email_log_is_success" => $this->sending_email_log_is_success,
                "sending_email_log_datetime" => $this->sending_email_log_datetime,
                "sending_email_log_email" => $this->sending_email_log_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
