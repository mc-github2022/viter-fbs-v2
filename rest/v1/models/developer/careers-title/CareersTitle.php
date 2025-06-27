<?php

class CareersTitle
{
    public $careers_title_aid;
    public $careers_title_title;
    public $careers_title_desc;
    public $careers_title_created;
    public $careers_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblCareersTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCareersTitle = "fbsv2_careers_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblCareersTitle} ";
            $sql .= "order by careers_title_aid desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblCareersTitle}";
            $sql .= "(careers_title_title, ";
            $sql .= "careers_title_desc, ";
            $sql .= "careers_title_created, ";
            $sql .= "careers_title_datetime ) values ( ";
            $sql .= ":careers_title_title, ";
            $sql .= ":careers_title_desc, ";
            $sql .= ":careers_title_created, ";
            $sql .= ":careers_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "careers_title_title" => $this->careers_title_title,
                "careers_title_desc" => $this->careers_title_desc,
                "careers_title_created" => $this->careers_title_created,
                "careers_title_datetime" => $this->careers_title_datetime,
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
            $sql = "update {$this->tblCareersTitle} set ";
            $sql .= "careers_title_title = :careers_title_title, ";
            $sql .= "careers_title_desc = :careers_title_desc, ";
            $sql .= "careers_title_datetime = :careers_title_datetime ";
            $sql .= "where careers_title_aid = :careers_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "careers_title_title" => $this->careers_title_title,
                "careers_title_desc" => $this->careers_title_desc,
                "careers_title_datetime" => $this->careers_title_datetime,
                "careers_title_aid" => $this->careers_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
