<?php

class SocialMediaServicesList
{
    public $social_services_list_aid;
    public $social_services_list_title;
    public $social_services_list_icon;
    public $social_services_list_created;
    public $social_services_list_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaServicesList;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaServicesList = "fbsv2_services_social_services_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaServicesList} ";
            $sql .= "order by social_services_list_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaServicesList}";
            $sql .= "(social_services_list_title, ";
            $sql .= "social_services_list_icon, ";
            $sql .= "social_services_list_created, ";
            $sql .= "social_services_list_datetime ) values ( ";
            $sql .= ":social_services_list_title, ";
            $sql .= ":social_services_list_icon, ";
            $sql .= ":social_services_list_created, ";
            $sql .= ":social_services_list_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_services_list_title" => $this->social_services_list_title,
                "social_services_list_icon" => $this->social_services_list_icon,
                "social_services_list_created" => $this->social_services_list_created,
                "social_services_list_datetime" => $this->social_services_list_datetime,
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
            $sql = "update {$this->tblSocialMediaServicesList} set ";
            $sql .= "social_services_list_title = :social_services_list_title, ";
            $sql .= "social_services_list_icon = :social_services_list_icon, ";
            $sql .= "social_services_list_datetime = :social_services_list_datetime ";
            $sql .= "where social_services_list_aid = :social_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_services_list_title" => $this->social_services_list_title,
                "social_services_list_icon" => $this->social_services_list_icon,
                "social_services_list_datetime" => $this->social_services_list_datetime,
                "social_services_list_aid" => $this->social_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSocialMediaServicesList} ";
            $sql .= "where social_services_list_aid = :social_services_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_services_list_aid" => $this->social_services_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
