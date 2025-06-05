<?php

class ImmersionServices
{
    public $immersion_services_aid;
    public $immersion_services_title;
    public $immersion_services_subtitle_a;
    public $immersion_services_subtitle_b;
    public $immersion_services_list;
    public $immersion_services_icon;
    public $immersion_services_created;
    public $immersion_services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblImmersionServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblImmersionServices = "fbsv2_services_immersion_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblImmersionServices} ";
            $sql .= "order by immersion_services_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblImmersionServices}";
            $sql .= "(immersion_services_title, ";
            $sql .= "immersion_services_subtitle_a, ";
            $sql .= "immersion_services_subtitle_b, ";
            $sql .= "immersion_services_list, ";
            $sql .= "immersion_services_icon, ";
            $sql .= "immersion_services_created, ";
            $sql .= "immersion_services_datetime ) values ( ";
            $sql .= ":immersion_services_title, ";
            $sql .= ":immersion_services_subtitle_a, ";
            $sql .= ":immersion_services_subtitle_b, ";
            $sql .= ":immersion_services_list, ";
            $sql .= ":immersion_services_icon, ";
            $sql .= ":immersion_services_created, ";
            $sql .= ":immersion_services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_services_title" => $this->immersion_services_title,
                "immersion_services_subtitle_a" => $this->immersion_services_subtitle_a,
                "immersion_services_subtitle_b" => $this->immersion_services_subtitle_b,
                "immersion_services_list" => $this->immersion_services_list,
                "immersion_services_icon" => $this->immersion_services_icon,
                "immersion_services_created" => $this->immersion_services_created,
                "immersion_services_datetime" => $this->immersion_services_datetime,
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
            $sql = "update {$this->tblImmersionServices} set ";
            $sql .= "immersion_services_title = :immersion_services_title, ";
            $sql .= "immersion_services_subtitle_a = :immersion_services_subtitle_a, ";
            $sql .= "immersion_services_subtitle_b = :immersion_services_subtitle_b, ";
            $sql .= "immersion_services_list = :immersion_services_list, ";
            $sql .= "immersion_services_icon = :immersion_services_icon, ";
            $sql .= "immersion_services_datetime = :immersion_services_datetime ";
            $sql .= "where immersion_services_aid = :immersion_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_services_title" => $this->immersion_services_title,
                "immersion_services_subtitle_a" => $this->immersion_services_subtitle_a,
                "immersion_services_subtitle_b" => $this->immersion_services_subtitle_b,
                "immersion_services_list" => $this->immersion_services_list,
                "immersion_services_icon" => $this->immersion_services_icon,
                "immersion_services_datetime" => $this->immersion_services_datetime,
                "immersion_services_aid" => $this->immersion_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblImmersionServices} ";
            $sql .= "where immersion_services_aid = :immersion_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_services_aid" => $this->immersion_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
