<?php

class Subscribe
{
    public $subscriber_aid;
    public $subscriber_email;
    public $subscriber_is_active;
    public $subscriber_key;
    public $subscriber_feedback;
    public $subscriber_created;
    public $subscriber_datetime;

    public $notification_purpose;
    public $subscriber_count;

    public $connection;
    public $lastInsertedId;

    public $subscriber_start;
    public $subscriber_total;
    public $subscriber_search;

    public $tblSubscriber;
    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSubscriber = "fbsv2_subscriber_list";
        $this->tblNotification = "fbsv2_notification";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "order by subscriber_is_active desc, ";
            $sql .= "subscriber_email asc ";
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
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "order by subscriber_is_active desc, ";
            $sql .= "subscriber_email asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->subscriber_start - 1,
                "total" => $this->subscriber_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_is_active = :subscriber_is_active, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_datetime" => $this->subscriber_datetime,
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSubscriber}";
            $sql .= "( subscriber_email, ";
            $sql .= "subscriber_is_active, ";
            $sql .= "subscriber_key, ";
            $sql .= "subscriber_created, ";
            $sql .= "subscriber_datetime ) values ( ";
            $sql .= ":subscriber_email, ";
            $sql .= ":subscriber_is_active, ";
            $sql .= ":subscriber_key, ";
            $sql .= ":subscriber_created, ";
            $sql .= ":subscriber_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_key" => $this->subscriber_key,
                "subscriber_created" => $this->subscriber_created,
                "subscriber_datetime" => $this->subscriber_datetime,
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
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_email = :subscriber_email, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_datetime" => $this->subscriber_datetime,
                "subscriber_aid" => $this->subscriber_aid,
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
            $sql .= "from {$this->tblSubscriber} ";
            $sql .= "where ";
            $sql .= "subscriber_email like :subscriber_email ";
            $sql .= "order by subscriber_is_active desc, ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "%{$this->subscriber_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSubscriber} ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // validator
    // email
    public function checkEmail()
    {
        try {
            $sql = "select subscriber_email from {$this->tblSubscriber} ";
            $sql .= "where subscriber_email = :subscriber_email ";
            $sql .= "and subscriber_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "{$this->subscriber_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
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


    // count the subscribers
    public function readSubscriberCount()
    {
        try {
            $sql = "SELECT COUNT(*) AS subscriber_count ";
            $sql .= "FROM {$this->tblSubscriber} ";
            $sql .= "where subscriber_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute();

            return (int)$query->fetchColumn() + 1;
        } catch (PDOException $ex) {
            return false;
        }
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select subscriber_key from {$this->tblSubscriber} ";
            $sql .= "where subscriber_key = :subscriber_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_key" => $this->subscriber_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update unsubscribe
    public function updateUnsubscribe()
    {
        try {
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_key = '', ";
            $sql .= "subscriber_feedback = :subscriber_feedback, ";
            $sql .= "subscriber_is_active = :subscriber_is_active, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_key  = :original_subscriber_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "original_subscriber_key" => $this->subscriber_key,
                "subscriber_feedback" => $this->subscriber_feedback,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_datetime" => $this->subscriber_datetime,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
