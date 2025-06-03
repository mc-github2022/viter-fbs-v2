<?php

class OjtServices
{
    public $ojt_services_aid;
    public $ojt_services_title;
    public $ojt_services_subtitle_a;
    public $ojt_services_subtitle_b;
    public $ojt_services_list;
    public $ojt_services_icon;
    public $ojt_services_created;
    public $ojt_services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblOjtServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOjtServices = "fbsv2_services_ojt_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblOjtServices} ";
            $sql .= "order by ojt_services_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblOjtServices}";
            $sql .= "(ojt_services_title, ";
            $sql .= "ojt_services_subtitle_a, ";
            $sql .= "ojt_services_subtitle_b, ";
            $sql .= "ojt_services_list, ";
            $sql .= "ojt_services_icon, ";
            $sql .= "ojt_services_created, ";
            $sql .= "ojt_services_datetime ) values ( ";
            $sql .= ":ojt_services_title, ";
            $sql .= ":ojt_services_subtitle_a, ";
            $sql .= ":ojt_services_subtitle_b, ";
            $sql .= ":ojt_services_list, ";
            $sql .= ":ojt_services_icon, ";
            $sql .= ":ojt_services_created, ";
            $sql .= ":ojt_services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_services_title" => $this->ojt_services_title,
                "ojt_services_subtitle_a" => $this->ojt_services_subtitle_a,
                "ojt_services_subtitle_b" => $this->ojt_services_subtitle_b,
                "ojt_services_list" => $this->ojt_services_list,
                "ojt_services_icon" => $this->ojt_services_icon,
                "ojt_services_created" => $this->ojt_services_created,
                "ojt_services_datetime" => $this->ojt_services_datetime,
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
            $sql = "update {$this->tblOjtServices} set ";
            $sql .= "ojt_services_title = :ojt_services_title, ";
            $sql .= "ojt_services_subtitle_a = :ojt_services_subtitle_a, ";
            $sql .= "ojt_services_subtitle_b = :ojt_services_subtitle_b, ";
            $sql .= "ojt_services_list = :ojt_services_list, ";
            $sql .= "ojt_services_icon = :ojt_services_icon, ";
            $sql .= "ojt_services_datetime = :ojt_services_datetime ";
            $sql .= "where ojt_services_aid = :ojt_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_services_title" => $this->ojt_services_title,
                "ojt_services_subtitle_a" => $this->ojt_services_subtitle_a,
                "ojt_services_subtitle_b" => $this->ojt_services_subtitle_b,
                "ojt_services_list" => $this->ojt_services_list,
                "ojt_services_icon" => $this->ojt_services_icon,
                "ojt_services_datetime" => $this->ojt_services_datetime,
                "ojt_services_aid" => $this->ojt_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblOjtServices} ";
            $sql .= "where ojt_services_aid = :ojt_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_services_aid" => $this->ojt_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
