<?php

class ImmersionBanner
{
    public $immersion_banner_aid;
    public $immersion_banner_title;
    public $immersion_banner_title_bold;
    public $immersion_banner_description;
    public $immersion_banner_button_text;
    public $immersion_banner_button_link;
    public $immersion_banner_img;
    public $immersion_banner_created;
    public $immersion_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblImmersionBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblImmersionBanner = "fbsv2_services_immersion_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblImmersionBanner} ";
            $sql .= "order by immersion_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblImmersionBanner}";
            $sql .= "(immersion_banner_title, ";
            $sql .= "immersion_banner_title_bold, ";
            $sql .= "immersion_banner_description, ";
            $sql .= "immersion_banner_button_text, ";
            $sql .= "immersion_banner_button_link, ";
            $sql .= "immersion_banner_img, ";
            $sql .= "immersion_banner_created, ";
            $sql .= "immersion_banner_datetime ) values ( ";
            $sql .= ":immersion_banner_title, ";
            $sql .= ":immersion_banner_title_bold, ";
            $sql .= ":immersion_banner_description, ";
            $sql .= ":immersion_banner_button_text, ";
            $sql .= ":immersion_banner_button_link, ";
            $sql .= ":immersion_banner_img, ";
            $sql .= ":immersion_banner_created, ";
            $sql .= ":immersion_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_banner_title" => $this->immersion_banner_title,
                "immersion_banner_title_bold" => $this->immersion_banner_title_bold,
                "immersion_banner_description" => $this->immersion_banner_description,
                "immersion_banner_button_text" => $this->immersion_banner_button_text,
                "immersion_banner_button_link" => $this->immersion_banner_button_link,
                "immersion_banner_img" => $this->immersion_banner_img,
                "immersion_banner_created" => $this->immersion_banner_created,
                "immersion_banner_datetime" => $this->immersion_banner_datetime,
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
            $sql = "update {$this->tblImmersionBanner} set ";
            $sql .= "immersion_banner_title = :immersion_banner_title, ";
            $sql .= "immersion_banner_title_bold = :immersion_banner_title_bold, ";
            $sql .= "immersion_banner_description = :immersion_banner_description, ";
            $sql .= "immersion_banner_button_text = :immersion_banner_button_text, ";
            $sql .= "immersion_banner_button_link = :immersion_banner_button_link, ";
            $sql .= "immersion_banner_img = :immersion_banner_img, ";
            $sql .= "immersion_banner_datetime = :immersion_banner_datetime ";
            $sql .= "where immersion_banner_aid = :immersion_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_banner_title" => $this->immersion_banner_title,
                "immersion_banner_title_bold" => $this->immersion_banner_title_bold,
                "immersion_banner_description" => $this->immersion_banner_description,
                "immersion_banner_button_text" => $this->immersion_banner_button_text,
                "immersion_banner_button_link" => $this->immersion_banner_button_link,
                "immersion_banner_img" => $this->immersion_banner_img,
                "immersion_banner_datetime" => $this->immersion_banner_datetime,
                "immersion_banner_aid" => $this->immersion_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
