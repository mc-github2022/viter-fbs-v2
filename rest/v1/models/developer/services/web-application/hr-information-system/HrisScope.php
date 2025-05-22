<?php

class HrisScope
{
    public $hris_scope_aid;
    public $hris_scope_title;
    public $hris_scope_desc;
    public $hris_scope_img;
    public $hris_scope_created;
    public $hris_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHrisScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHrisScope = "fbsv2_services_hris_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHrisScope} ";
            $sql .= "order by hris_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHrisScope}";
            $sql .= "(hris_scope_title, ";
            $sql .= "hris_scope_desc, ";
            $sql .= "hris_scope_img, ";
            $sql .= "hris_scope_created, ";
            $sql .= "hris_scope_datetime ) values ( ";
            $sql .= ":hris_scope_title, ";
            $sql .= ":hris_scope_desc, ";
            $sql .= ":hris_scope_img, ";
            $sql .= ":hris_scope_created, ";
            $sql .= ":hris_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_scope_title" => $this->hris_scope_title,
                "hris_scope_desc" => $this->hris_scope_desc,
                "hris_scope_img" => $this->hris_scope_img,
                "hris_scope_created" => $this->hris_scope_created,
                "hris_scope_datetime" => $this->hris_scope_datetime,
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
            $sql = "update {$this->tblHrisScope} set ";
            $sql .= "hris_scope_title = :hris_scope_title, ";
            $sql .= "hris_scope_desc = :hris_scope_desc, ";
            $sql .= "hris_scope_img = :hris_scope_img, ";
            $sql .= "hris_scope_datetime = :hris_scope_datetime ";
            $sql .= "where hris_scope_aid = :hris_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_scope_title" => $this->hris_scope_title,
                "hris_scope_desc" => $this->hris_scope_desc,
                "hris_scope_img" => $this->hris_scope_img,
                "hris_scope_datetime" => $this->hris_scope_datetime,
                "hris_scope_aid" => $this->hris_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblHrisScope} ";
            $sql .= "where hris_scope_aid = :hris_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_scope_aid" => $this->hris_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
