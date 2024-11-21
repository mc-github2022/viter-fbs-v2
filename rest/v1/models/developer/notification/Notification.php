<?php

class Notification
{
    public $fbsv2_notification_aid;
    public $fbsv2_notification_is_active;
    public $fbsv2_notification_name;
    public $fbsv2_notification_email;
    public $fbsv2_notification_phone_no;
    public $fbsv2_notification_purpose;
    public $fbsv2_notification_page;
    public $fbsv2_notification_created;
    public $fbsv2_notification_updated;

    public $connection;
    public $lastInsertedId;

    public $fbsv2_notification_start;
    public $fbsv2_notification_total;
    public $fbsv2_notification_search;

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
            $sql .= "order by fbsv2_notification_is_active desc, ";
            $sql .= "fbsv2_notification_name asc, ";
            $sql .= "fbsv2_notification_page asc, ";
            $sql .= "fbsv2_notification_purpose asc ";
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
            $sql .= "order by fbsv2_notification_is_active desc, ";
            $sql .= "fbsv2_notification_name asc, ";
            $sql .= "fbsv2_notification_page asc, ";
            $sql .= "fbsv2_notification_purpose asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->fbsv2_notification_start - 1,
                "total" => $this->fbsv2_notification_total,
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
            $sql .= "fbsv2_notification_name like :fbsv2_notification_name ";
            $sql .= "or fbsv2_notification_email like :fbsv2_notification_email ";
            $sql .= "or fbsv2_notification_purpose like :fbsv2_notification_purpose ";
            $sql .= "or fbsv2_notification_page like :fbsv2_notification_page ";
            $sql .= ") ";
            $sql .= "order by fbsv2_notification_is_active desc, ";
            $sql .= "fbsv2_notification_name asc, ";
            $sql .= "fbsv2_notification_page asc, ";
            $sql .= "fbsv2_notification_purpose asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_name" => "%{$this->fbsv2_notification_search}%",
                "fbsv2_notification_email" => "%{$this->fbsv2_notification_search}%",
                "fbsv2_notification_purpose" => "%{$this->fbsv2_notification_search}%",
                "fbsv2_notification_page" => "%{$this->fbsv2_notification_search}%"
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
            $sql .= "(fbsv2_notification_is_active, ";
            $sql .= "fbsv2_notification_name, ";
            $sql .= "fbsv2_notification_email, ";
            $sql .= "fbsv2_notification_phone_no, ";
            $sql .= "fbsv2_notification_purpose, ";
            $sql .= "fbsv2_notification_page, ";
            $sql .= "fbsv2_notification_created, ";
            $sql .= "fbsv2_notification_updated ) values ( ";
            $sql .= ":fbsv2_notification_is_active, ";
            $sql .= ":fbsv2_notification_name, ";
            $sql .= ":fbsv2_notification_email, ";
            $sql .= ":fbsv2_notification_phone_no, ";
            $sql .= ":fbsv2_notification_purpose, ";
            $sql .= ":fbsv2_notification_page, ";
            $sql .= ":fbsv2_notification_created, ";
            $sql .= ":fbsv2_notification_updated )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_is_active" => $this->fbsv2_notification_is_active,
                "fbsv2_notification_name" => $this->fbsv2_notification_name,
                "fbsv2_notification_email" => $this->fbsv2_notification_email,
                "fbsv2_notification_phone_no" => $this->fbsv2_notification_phone_no,
                "fbsv2_notification_purpose" => $this->fbsv2_notification_purpose,
                "fbsv2_notification_page" => $this->fbsv2_notification_page,
                "fbsv2_notification_created" => $this->fbsv2_notification_created,
                "fbsv2_notification_updated" => $this->fbsv2_notification_updated,
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
            $sql .= "fbsv2_notification_name = :fbsv2_notification_name, ";
            $sql .= "fbsv2_notification_email = :fbsv2_notification_email, ";
            $sql .= "fbsv2_notification_phone_no = :fbsv2_notification_phone_no, ";
            $sql .= "fbsv2_notification_purpose = :fbsv2_notification_purpose, ";
            $sql .= "fbsv2_notification_page = :fbsv2_notification_page, ";
            $sql .= "fbsv2_notification_updated = :fbsv2_notification_updated, ";
            $sql .= "where fbsv2_notification_aid = :fbsv2_notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_name" => $this->fbsv2_notification_name,
                "fbsv2_notification_email" => $this->fbsv2_notification_email,
                "fbsv2_notification_phone_no" => $this->fbsv2_notification_phone_no,
                "fbsv2_notification_purpose" => $this->fbsv2_notification_purpose,
                "fbsv2_notification_page" => $this->fbsv2_notification_page,
                "fbsv2_notification_updated" => $this->fbsv2_notification_updated,
                "fbsv2_notification_aid" => $this->fbsv2_notification_aid,
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
            $sql .= "where fbsv2_notification_aid = :fbsv2_notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_aid" => $this->fbsv2_notification_aid,
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
            $sql .= "fbsv2_notification_is_active = :fbsv2_notification_is_active, ";
            $sql .= "fbsv2_notification_updated = :fbsv2_notification_updated ";
            $sql .= "where fbsv2_notification_aid = :fbsv2_notification_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_is_active" => $this->fbsv2_notification_is_active,
                "fbsv2_notification_updated" => $this->fbsv2_notification_updated,
                "fbsv2_notification_aid" => $this->fbsv2_notification_aid,
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
            $sql .= "where fbsv2_notification_name = :fbsv2_notification_name ";
            $sql .= "and fbsv2_notification_purpose = :fbsv2_notification_purpose ";
            $sql .= "and fbsv2_notification_page = :fbsv2_notification_page ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "fbsv2_notification_name" => $this->fbsv2_notification_name,
                "fbsv2_notification_purpose" => $this->fbsv2_notification_purpose,
                "fbsv2_notification_page" => $this->fbsv2_notification_page,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
