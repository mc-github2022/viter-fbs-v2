<?php

class Role
{
    public $user_role_aid;
    public $user_role_is_active;
    public $user_role_name;
    public $user_role_description;
    public $user_role_code;
    public $user_role_created;
    public $user_role_datetime;

    public $connection;
    public $lastInsertedId;

    public $user_role_start;
    public $user_role_total;
    public $user_role_search;

    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRole = "fbsv2_role";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblRole} ";
            $sql .= "order by user_role_is_active desc, ";
            $sql .= "user_role_name asc, ";
            $sql .= "user_role_code asc ";
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
            $sql .= "{$this->tblRole} ";
            $sql .= "order by user_role_is_active desc, ";
            $sql .= "user_role_name asc, ";
            $sql .= "user_role_code asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->user_role_start - 1,
                "total" => $this->user_role_total,
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
            $sql .= "from {$this->tblRole} ";
            $sql .= "where ( ";
            $sql .= "user_role_name like :user_role_name ";
            $sql .= "or user_role_code like :user_role_code ";
            $sql .= ") ";
            $sql .= "order by user_role_is_active desc, ";
            $sql .= "user_role_name asc, ";
            $sql .= "user_role_code asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_name" => "%{$this->user_role_search}%",
                "notification_email" => "%{$this->user_role_search}%",
                "user_role_code" => "%{$this->user_role_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRole}";
            $sql .= "(user_role_is_active, ";
            $sql .= "user_role_name, ";
            $sql .= "user_role_description, ";
            $sql .= "user_role_code, ";
            $sql .= "user_role_created, ";
            $sql .= "user_role_datetime ) values ( ";
            $sql .= ":user_role_is_active, ";
            $sql .= ":user_role_name, ";
            $sql .= ":user_role_description, ";
            $sql .= ":user_role_code, ";
            $sql .= ":user_role_created, ";
            $sql .= ":user_role_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_is_active" => $this->user_role_is_active,
                "user_role_name" => $this->user_role_name,
                "user_role_description" => $this->user_role_description,
                "user_role_code" => $this->user_role_code,
                "user_role_created" => $this->user_role_created,
                "user_role_datetime" => $this->user_role_datetime,
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
            $sql = "update {$this->tblRole} set ";
            $sql .= "user_role_name = :user_role_name, ";
            $sql .= "user_role_description = :user_role_description, ";
            $sql .= "user_role_code = :user_role_code, ";
            $sql .= "user_role_datetime = :user_role_datetime ";
            $sql .= "where user_role_aid = :user_role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_name" => $this->user_role_name,
                "user_role_description" => $this->user_role_description,
                "user_role_code" => $this->user_role_code,
                "user_role_datetime" => $this->user_role_datetime,
                "user_role_aid" => $this->user_role_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblRole} ";
            $sql .= "where user_role_aid = :user_role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_aid" => $this->user_role_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblRole} set ";
            $sql .= "user_role_is_active = :user_role_is_active, ";
            $sql .= "user_role_datetime = :user_role_datetime ";
            $sql .= "where user_role_aid = :user_role_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_is_active" => $this->user_role_is_active,
                "user_role_datetime" => $this->user_role_datetime,
                "user_role_aid" => $this->user_role_aid,
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
            $sql .= "{$this->tblRole} ";
            $sql .= "where user_role_name = :user_role_name ";
            $sql .= "and user_role_code = :user_role_code ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_role_name" => $this->user_role_name,
                "user_role_code" => $this->user_role_code,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
