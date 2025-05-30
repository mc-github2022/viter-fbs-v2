<?php

class RegistrationBanner
{
    public $registration_banner_aid;
    public $registration_banner_title;
    public $registration_banner_title_bold;
    public $registration_banner_description;
    public $registration_banner_button_text;
    public $registration_banner_img;
    public $registration_banner_created;
    public $registration_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblRegistrationBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRegistrationBanner = "fbsv2_services_registration_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblRegistrationBanner} ";
            $sql .= "order by registration_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRegistrationBanner}";
            $sql .= "(registration_banner_title, ";
            $sql .= "registration_banner_title_bold, ";
            $sql .= "registration_banner_description, ";
            $sql .= "registration_banner_button_text, ";
            $sql .= "registration_banner_img, ";
            $sql .= "registration_banner_created, ";
            $sql .= "registration_banner_datetime ) values ( ";
            $sql .= ":registration_banner_title, ";
            $sql .= ":registration_banner_title_bold, ";
            $sql .= ":registration_banner_description, ";
            $sql .= ":registration_banner_button_text, ";
            $sql .= ":registration_banner_img, ";
            $sql .= ":registration_banner_created, ";
            $sql .= ":registration_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_banner_title" => $this->registration_banner_title,
                "registration_banner_title_bold" => $this->registration_banner_title_bold,
                "registration_banner_description" => $this->registration_banner_description,
                "registration_banner_button_text" => $this->registration_banner_button_text,
                "registration_banner_img" => $this->registration_banner_img,
                "registration_banner_created" => $this->registration_banner_created,
                "registration_banner_datetime" => $this->registration_banner_datetime,
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
            $sql = "update {$this->tblRegistrationBanner} set ";
            $sql .= "registration_banner_title = :registration_banner_title, ";
            $sql .= "registration_banner_title_bold = :registration_banner_title_bold, ";
            $sql .= "registration_banner_description = :registration_banner_description, ";
            $sql .= "registration_banner_button_text = :registration_banner_button_text, ";
            $sql .= "registration_banner_img = :registration_banner_img, ";
            $sql .= "registration_banner_datetime = :registration_banner_datetime ";
            $sql .= "where registration_banner_aid = :registration_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_banner_title" => $this->registration_banner_title,
                "registration_banner_title_bold" => $this->registration_banner_title_bold,
                "registration_banner_description" => $this->registration_banner_description,
                "registration_banner_button_text" => $this->registration_banner_button_text,
                "registration_banner_img" => $this->registration_banner_img,
                "registration_banner_datetime" => $this->registration_banner_datetime,
                "registration_banner_aid" => $this->registration_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
