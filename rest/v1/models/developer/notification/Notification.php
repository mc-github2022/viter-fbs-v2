<?php

class Notification
{
    public $notification_aid;
    public $notification_is_active;
    public $notification_name;
    public $notification_email;
    public $notification_phone_no;
    public $notification_purpose;
    public $notification_created;
    public $notification_updated;

    public $connection;
    public $lastInsertedId;

    public $notification_start;
    public $notification_total;
    public $notification_search;

    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotification = "fbsv2_notification";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNotification} ";
            $sql .= "order by notification_is_active desc, ";
            $sql .= "notification_name asc, ";
            $sql .= "notification_purpose asc ";
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
            $sql .= "{$this->tblNotification} ";
            $sql .= "order by notification_is_active desc, ";
            $sql .= "notification_name asc, ";
            $sql .= "notification_purpose asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->notification_start - 1,
                "total" => $this->notification_total,
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
            $sql .= "from {$this->tblNotification} ";
            $sql .= "where ( ";
            $sql .= "notification_name like :notification_name ";
            $sql .= "or notification_email like :notification_email ";
            $sql .= "or notification_purpose like :notification_purpose ";
            $sql .= ") ";
            $sql .= "order by notification_is_active desc, ";
            $sql .= "notification_name asc, ";
            $sql .= "notification_purpose asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_name" => "%{$this->notification_search}%",
                "notification_email" => "%{$this->notification_search}%",
                "notification_purpose" => "%{$this->notification_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblNotification}";
            $sql .= "(notification_is_active, ";
            $sql .= "notification_name, ";
            $sql .= "notification_email, ";
            $sql .= "notification_phone_no, ";
            $sql .= "notification_purpose, ";
            $sql .= "notification_created, ";
            $sql .= "notification_updated ) values ( ";
            $sql .= ":notification_is_active, ";
            $sql .= ":notification_name, ";
            $sql .= ":notification_email, ";
            $sql .= ":notification_phone_no, ";
            $sql .= ":notification_purpose, ";
            $sql .= ":notification_created, ";
            $sql .= ":notification_updated )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_is_active" => $this->notification_is_active,
                "notification_name" => $this->notification_name,
                "notification_email" => $this->notification_email,
                "notification_phone_no" => $this->notification_phone_no,
                "notification_purpose" => $this->notification_purpose,
                "notification_created" => $this->notification_created,
                "notification_updated" => $this->notification_updated,
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
            $sql = "update {$this->tblNotification} set ";
            $sql .= "notification_name = :notification_name, ";
            $sql .= "notification_email = :notification_email, ";
            $sql .= "notification_phone_no = :notification_phone_no, ";
            $sql .= "notification_purpose = :notification_purpose, ";
            $sql .= "notification_updated = :notification_updated ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_name" => $this->notification_name,
                "notification_email" => $this->notification_email,
                "notification_phone_no" => $this->notification_phone_no,
                "notification_purpose" => $this->notification_purpose,
                "notification_updated" => $this->notification_updated,
                "notification_aid" => $this->notification_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblNotification} ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_aid" => $this->notification_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblNotification} set ";
            $sql .= "notification_is_active = :notification_is_active, ";
            $sql .= "notification_updated = :notification_updated ";
            $sql .= "where notification_aid = :notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_is_active" => $this->notification_is_active,
                "notification_updated" => $this->notification_updated,
                "notification_aid" => $this->notification_aid,
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
            $sql .= "{$this->tblNotification} ";
            $sql .= "where notification_name = :notification_name ";
            $sql .= "and notification_purpose = :notification_purpose ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_name" => $this->notification_name,
                "notification_purpose" => $this->notification_purpose,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
