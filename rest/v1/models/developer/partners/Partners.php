<?php

class Partners
{
    public $partners_aid;
    public $partners_name;
    public $partners_page;
    public $partners_img;
    public $partners_created;
    public $partners_datetime;

    public $connection;
    public $lastInsertedId;
    public $partners_start;
    public $partners_total;
    public $partners_search;

    public $tblPartners;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPartners = "fbsv2_partners";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPartners} ";
            $sql .= "order by partners_aid desc ";
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
            $sql .= "{$this->tblPartners} ";
            $sql .= "order by partners_aid desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->partners_start - 1,
                "total" => $this->partners_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPartners} ";
            $sql .= "where partners_name = partners_name ";
            $sql .= "and (partners_name like :partners_name ";
            $sql .= "or partners_page like :partners_page ";
            $sql .= "or partners_img like :partners_img) ";
            $sql .= "order by partners_aid desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partners_name" => "%{$this->partners_search}%",
                "partners_page" => "%{$this->partners_search}%",
                "partners_img" => "%{$this->partners_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblPartners}";
            $sql .= "(partners_name, ";
            $sql .= "partners_page, ";
            $sql .= "partners_img, ";
            $sql .= "partners_created, ";
            $sql .= "partners_datetime ) values ( ";
            $sql .= ":partners_name, ";
            $sql .= ":partners_page, ";
            $sql .= ":partners_img, ";
            $sql .= ":partners_created, ";
            $sql .= ":partners_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partners_name" => $this->partners_name,
                "partners_page" => $this->partners_page,
                "partners_img" => $this->partners_img,
                "partners_created" => $this->partners_created,
                "partners_datetime" => $this->partners_datetime,
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
            $sql = "update {$this->tblPartners} set ";
            $sql .= "partners_name = :partners_name, ";
            $sql .= "partners_page = :partners_page, ";
            $sql .= "partners_img = :partners_img, ";
            $sql .= "partners_datetime = :partners_datetime ";
            $sql .= "where partners_aid = :partners_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partners_name" => $this->partners_name,
                "partners_page" => $this->partners_page,
                "partners_img" => $this->partners_img,
                "partners_datetime" => $this->partners_datetime,
                "partners_aid" => $this->partners_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPartners} ";
            $sql .= "where partners_aid = :partners_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partners_aid" => $this->partners_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
