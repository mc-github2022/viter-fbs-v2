<?php

class AdministrativeServicesList
{
    public $administrative_services_list_aid;
    public $administrative_services_list_title;
    public $administrative_services_list_icon;
    public $administrative_services_list_created;
    public $administrative_services_list_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAdministrativeServicesList;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdministrativeServicesList = "fbsv2_services_administrative_services_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAdministrativeServicesList} ";
            $sql .= "order by administrative_services_list_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeServicesList}";
            $sql .= "(administrative_services_list_title, ";
            $sql .= "administrative_services_list_icon, ";
            $sql .= "administrative_services_list_created, ";
            $sql .= "administrative_services_list_datetime ) values ( ";
            $sql .= ":administrative_services_list_title, ";
            $sql .= ":administrative_services_list_icon, ";
            $sql .= ":administrative_services_list_created, ";
            $sql .= ":administrative_services_list_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_services_list_title" => $this->administrative_services_list_title,
                "administrative_services_list_icon" => $this->administrative_services_list_icon,
                "administrative_services_list_created" => $this->administrative_services_list_created,
                "administrative_services_list_datetime" => $this->administrative_services_list_datetime,
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
            $sql = "update {$this->tblAdministrativeServicesList} set ";
            $sql .= "administrative_services_list_title = :administrative_services_list_title, ";
            $sql .= "administrative_services_list_icon = :administrative_services_list_icon, ";
            $sql .= "administrative_services_list_datetime = :administrative_services_list_datetime ";
            $sql .= "where administrative_services_list_aid = :administrative_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_services_list_title" => $this->administrative_services_list_title,
                "administrative_services_list_icon" => $this->administrative_services_list_icon,
                "administrative_services_list_datetime" => $this->administrative_services_list_datetime,
                "administrative_services_list_aid" => $this->administrative_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblAdministrativeServicesList} ";
            $sql .= "where administrative_services_list_aid = :administrative_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_services_list_aid" => $this->administrative_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
