<?php

class BusinessServicesList
{
    public $business_services_list_aid;
    public $business_services_list_title;
    public $business_services_list_icon;
    public $business_services_list_created;
    public $business_services_list_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBusinessServicesList;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBusinessServicesList = "fbsv2_services_business_services_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBusinessServicesList} ";
            $sql .= "order by business_services_list_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBusinessServicesList}";
            $sql .= "(business_services_list_title, ";
            $sql .= "business_services_list_icon, ";
            $sql .= "business_services_list_created, ";
            $sql .= "business_services_list_datetime ) values ( ";
            $sql .= ":business_services_list_title, ";
            $sql .= ":business_services_list_icon, ";
            $sql .= ":business_services_list_created, ";
            $sql .= ":business_services_list_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_services_list_title" => $this->business_services_list_title,
                "business_services_list_icon" => $this->business_services_list_icon,
                "business_services_list_created" => $this->business_services_list_created,
                "business_services_list_datetime" => $this->business_services_list_datetime,
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
            $sql = "update {$this->tblBusinessServicesList} set ";
            $sql .= "business_services_list_title = :business_services_list_title, ";
            $sql .= "business_services_list_icon = :business_services_list_icon, ";
            $sql .= "business_services_list_datetime = :business_services_list_datetime ";
            $sql .= "where business_services_list_aid = :business_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_services_list_title" => $this->business_services_list_title,
                "business_services_list_icon" => $this->business_services_list_icon,
                "business_services_list_datetime" => $this->business_services_list_datetime,
                "business_services_list_aid" => $this->business_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBusinessServicesList} ";
            $sql .= "where business_services_list_aid = :business_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_services_list_aid" => $this->business_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
