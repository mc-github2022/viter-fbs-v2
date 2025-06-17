<?php

class MarketingServicesList
{
    public $marketing_services_list_aid;
    public $marketing_services_list_title;
    public $marketing_services_list_icon;
    public $marketing_services_list_created;
    public $marketing_services_list_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblMarketingServicesList;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMarketingServicesList = "fbsv2_services_marketing_services_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblMarketingServicesList} ";
            $sql .= "order by marketing_services_list_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblMarketingServicesList}";
            $sql .= "(marketing_services_list_title, ";
            $sql .= "marketing_services_list_icon, ";
            $sql .= "marketing_services_list_created, ";
            $sql .= "marketing_services_list_datetime ) values ( ";
            $sql .= ":marketing_services_list_title, ";
            $sql .= ":marketing_services_list_icon, ";
            $sql .= ":marketing_services_list_created, ";
            $sql .= ":marketing_services_list_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_services_list_title" => $this->marketing_services_list_title,
                "marketing_services_list_icon" => $this->marketing_services_list_icon,
                "marketing_services_list_created" => $this->marketing_services_list_created,
                "marketing_services_list_datetime" => $this->marketing_services_list_datetime,
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
            $sql = "update {$this->tblMarketingServicesList} set ";
            $sql .= "marketing_services_list_title = :marketing_services_list_title, ";
            $sql .= "marketing_services_list_icon = :marketing_services_list_icon, ";
            $sql .= "marketing_services_list_datetime = :marketing_services_list_datetime ";
            $sql .= "where marketing_services_list_aid = :marketing_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_services_list_title" => $this->marketing_services_list_title,
                "marketing_services_list_icon" => $this->marketing_services_list_icon,
                "marketing_services_list_datetime" => $this->marketing_services_list_datetime,
                "marketing_services_list_aid" => $this->marketing_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblMarketingServicesList} ";
            $sql .= "where marketing_services_list_aid = :marketing_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_services_list_aid" => $this->marketing_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
