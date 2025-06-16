<?php

class AdministrativeBanner
{
    public $administrative_banner_aid;
    public $administrative_banner_title;
    public $administrative_banner_title_bold;
    public $administrative_banner_description;
    public $administrative_banner_button_text;
    public $administrative_banner_img;
    public $administrative_banner_created;
    public $administrative_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAdministrativeBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdministrativeBanner = "fbsv2_services_administrative_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAdministrativeBanner} ";
            $sql .= "order by administrative_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeBanner}";
            $sql .= "(administrative_banner_title, ";
            $sql .= "administrative_banner_title_bold, ";
            $sql .= "administrative_banner_description, ";
            $sql .= "administrative_banner_button_text, ";
            $sql .= "administrative_banner_img, ";
            $sql .= "administrative_banner_created, ";
            $sql .= "administrative_banner_datetime ) values ( ";
            $sql .= ":administrative_banner_title, ";
            $sql .= ":administrative_banner_title_bold, ";
            $sql .= ":administrative_banner_description, ";
            $sql .= ":administrative_banner_button_text, ";
            $sql .= ":administrative_banner_img, ";
            $sql .= ":administrative_banner_created, ";
            $sql .= ":administrative_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_banner_title" => $this->administrative_banner_title,
                "administrative_banner_title_bold" => $this->administrative_banner_title_bold,
                "administrative_banner_description" => $this->administrative_banner_description,
                "administrative_banner_button_text" => $this->administrative_banner_button_text,
                "administrative_banner_img" => $this->administrative_banner_img,
                "administrative_banner_created" => $this->administrative_banner_created,
                "administrative_banner_datetime" => $this->administrative_banner_datetime,
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
            $sql = "update {$this->tblAdministrativeBanner} set ";
            $sql .= "administrative_banner_title = :administrative_banner_title, ";
            $sql .= "administrative_banner_title_bold = :administrative_banner_title_bold, ";
            $sql .= "administrative_banner_description = :administrative_banner_description, ";
            $sql .= "administrative_banner_button_text = :administrative_banner_button_text, ";
            $sql .= "administrative_banner_img = :administrative_banner_img, ";
            $sql .= "administrative_banner_datetime = :administrative_banner_datetime ";
            $sql .= "where administrative_banner_aid = :administrative_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_banner_title" => $this->administrative_banner_title,
                "administrative_banner_title_bold" => $this->administrative_banner_title_bold,
                "administrative_banner_description" => $this->administrative_banner_description,
                "administrative_banner_button_text" => $this->administrative_banner_button_text,
                "administrative_banner_img" => $this->administrative_banner_img,
                "administrative_banner_datetime" => $this->administrative_banner_datetime,
                "administrative_banner_aid" => $this->administrative_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
