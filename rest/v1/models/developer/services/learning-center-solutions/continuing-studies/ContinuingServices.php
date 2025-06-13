<?php

class ContinuingServices
{
    public $continuing_services_aid;
    public $continuing_services_title;
    public $continuing_services_subtitle_a;
    public $continuing_services_subtitle_b;
    public $continuing_services_list;
    public $continuing_services_icon;
    public $continuing_services_prerequisite;
    public $continuing_services_created;
    public $continuing_services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContinuingServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContinuingServices = "fbsv2_services_continuing_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContinuingServices} ";
            $sql .= "order by continuing_services_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContinuingServices}";
            $sql .= "(continuing_services_title, ";
            $sql .= "continuing_services_subtitle_a, ";
            $sql .= "continuing_services_subtitle_b, ";
            $sql .= "continuing_services_list, ";
            $sql .= "continuing_services_icon, ";
            $sql .= "continuing_services_prerequisite, ";
            $sql .= "continuing_services_created, ";
            $sql .= "continuing_services_datetime ) values ( ";
            $sql .= ":continuing_services_title, ";
            $sql .= ":continuing_services_subtitle_a, ";
            $sql .= ":continuing_services_subtitle_b, ";
            $sql .= ":continuing_services_list, ";
            $sql .= ":continuing_services_icon, ";
            $sql .= ":continuing_services_prerequisite, ";
            $sql .= ":continuing_services_created, ";
            $sql .= ":continuing_services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_services_title" => $this->continuing_services_title,
                "continuing_services_subtitle_a" => $this->continuing_services_subtitle_a,
                "continuing_services_subtitle_b" => $this->continuing_services_subtitle_b,
                "continuing_services_list" => $this->continuing_services_list,
                "continuing_services_icon" => $this->continuing_services_icon,
                "continuing_services_prerequisite" => $this->continuing_services_prerequisite,
                "continuing_services_created" => $this->continuing_services_created,
                "continuing_services_datetime" => $this->continuing_services_datetime,
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
            $sql = "update {$this->tblContinuingServices} set ";
            $sql .= "continuing_services_title = :continuing_services_title, ";
            $sql .= "continuing_services_subtitle_a = :continuing_services_subtitle_a, ";
            $sql .= "continuing_services_subtitle_b = :continuing_services_subtitle_b, ";
            $sql .= "continuing_services_list = :continuing_services_list, ";
            $sql .= "continuing_services_icon = :continuing_services_icon, ";
            $sql .= "continuing_services_prerequisite = :continuing_services_prerequisite, ";
            $sql .= "continuing_services_datetime = :continuing_services_datetime ";
            $sql .= "where continuing_services_aid = :continuing_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_services_title" => $this->continuing_services_title,
                "continuing_services_subtitle_a" => $this->continuing_services_subtitle_a,
                "continuing_services_subtitle_b" => $this->continuing_services_subtitle_b,
                "continuing_services_list" => $this->continuing_services_list,
                "continuing_services_icon" => $this->continuing_services_icon,
                "continuing_services_prerequisite" => $this->continuing_services_prerequisite,
                "continuing_services_datetime" => $this->continuing_services_datetime,
                "continuing_services_aid" => $this->continuing_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblContinuingServices} ";
            $sql .= "where continuing_services_aid = :continuing_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_services_aid" => $this->continuing_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
