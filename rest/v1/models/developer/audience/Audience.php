<?php

class Audience
{
    public $audience_aid;
    public $audience_is_active;
    public $audience_name;
    public $audience_code;
    public $audience_description;
    public $audience_notification_email_id;
    public $audience_notification_email;
    public $audience_created;
    public $audience_datetime;

    public $connection;
    public $lastInsertedId;

    public $audience_start;
    public $audience_total;
    public $audience_search;

    public $tblAudience;
    public $tblSubscriber;
    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAudience = "fbsv2_audience";
        $this->tblSubscriber = "fbsv2_subscriber_list";
        $this->tblNotification = "fbsv2_notification";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAudience} as aud, ";
            $sql .= "{$this->tblNotification} as notif ";
            $sql .= "where aud.audience_notification_email_id = notif.notification_aid ";
            $sql .= "order by aud.audience_is_active desc, ";
            $sql .= "aud.audience_name asc ";
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
            $sql .= "{$this->tblAudience} as aud, ";
            $sql .= "{$this->tblNotification} as notif ";
            $sql .= "where aud.audience_notification_email_id = notif.notification_aid ";
            $sql .= "order by aud.audience_is_active desc, ";
            $sql .= "aud.audience_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->audience_start - 1,
                "total" => $this->audience_total,
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
            $sql .= "from {$this->tblAudience} ";
            $sql .= "where ( ";
            $sql .= "audience_name like :audience_name ";
            $sql .= "or audience_description like :audience_description ";
            $sql .= ") ";
            $sql .= "order by audience_is_active desc, ";
            $sql .= "audience_name asc, ";
            $sql .= "audience_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_name" => "%{$this->audience_search}%",
                "audience_description" => "%{$this->audience_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAudience}";
            $sql .= "(audience_is_active, ";
            $sql .= "audience_name, ";
            $sql .= "audience_code, ";
            $sql .= "audience_description, ";
            $sql .= "audience_notification_email_id, ";
            $sql .= "audience_notification_email, ";
            $sql .= "audience_created, ";
            $sql .= "audience_datetime ) values ( ";
            $sql .= ":audience_is_active, ";
            $sql .= ":audience_name, ";
            $sql .= ":audience_code, ";
            $sql .= ":audience_description, ";
            $sql .= ":audience_notification_email_id, ";
            $sql .= ":audience_notification_email, ";
            $sql .= ":audience_created, ";
            $sql .= ":audience_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_is_active" => $this->audience_is_active,
                "audience_name" => $this->audience_name,
                "audience_code" => $this->audience_code,
                "audience_description" => $this->audience_description,
                "audience_notification_email_id" => $this->audience_notification_email_id,
                "audience_notification_email" => $this->audience_notification_email,
                "audience_created" => $this->audience_created,
                "audience_datetime" => $this->audience_datetime,
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
            $sql = "update {$this->tblAudience} set ";
            $sql .= "audience_name = :audience_name, ";
            $sql .= "audience_description = :audience_description, ";
            $sql .= "audience_notification_email_id = :audience_notification_email_id, ";
            $sql .= "audience_notification_email = :audience_notification_email, ";
            $sql .= "audience_datetime = :audience_datetime ";
            $sql .= "where audience_aid = :audience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_name" => $this->audience_name,
                "audience_description" => $this->audience_description,
                "audience_notification_email_id" => $this->audience_notification_email_id,
                "audience_notification_email" => $this->audience_notification_email,
                "audience_datetime" => $this->audience_datetime,
                "audience_aid" => $this->audience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblAudience} ";
            $sql .= "where audience_aid = :audience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_aid" => $this->audience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblAudience} set ";
            $sql .= "audience_is_active = :audience_is_active, ";
            $sql .= "audience_datetime = :audience_datetime ";
            $sql .= "where audience_aid = :audience_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_is_active" => $this->audience_is_active,
                "audience_datetime" => $this->audience_datetime,
                "audience_aid" => $this->audience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAudience} ";
            $sql .= "where audience_name = :audience_name ";
            $sql .= "and audience_description = :audience_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_name" => $this->audience_name,
                "audience_description" => $this->audience_description,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //  search for receiver email
    public function searchReceiverEmail()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblNotification} ";
            $sql .= "where notification_email like :notification_email ";
            $sql .= "and notification_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "notification_email desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_email" => "%{$this->audience_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkAssociationSubscriberAudienceName()
    {
        try {
            $sql = "select subscriber_audience_id from {$this->tblSubscriber} ";
            $sql .= "where subscriber_audience_id = :subscriber_audience_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_audience_id" => $this->audience_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
