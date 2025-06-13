<?php

class ContinuingBanner
{
    public $continuing_banner_aid;
    public $continuing_banner_title;
    public $continuing_banner_title_bold;
    public $continuing_banner_description;
    public $continuing_banner_button_text;
    public $continuing_banner_button_link;
    public $continuing_banner_img;
    public $continuing_banner_created;
    public $continuing_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContinuingBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContinuingBanner = "fbsv2_services_continuing_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContinuingBanner} ";
            $sql .= "order by continuing_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContinuingBanner}";
            $sql .= "(continuing_banner_title, ";
            $sql .= "continuing_banner_title_bold, ";
            $sql .= "continuing_banner_description, ";
            $sql .= "continuing_banner_button_text, ";
            $sql .= "continuing_banner_button_link, ";
            $sql .= "continuing_banner_img, ";
            $sql .= "continuing_banner_created, ";
            $sql .= "continuing_banner_datetime ) values ( ";
            $sql .= ":continuing_banner_title, ";
            $sql .= ":continuing_banner_title_bold, ";
            $sql .= ":continuing_banner_description, ";
            $sql .= ":continuing_banner_button_text, ";
            $sql .= ":continuing_banner_button_link, ";
            $sql .= ":continuing_banner_img, ";
            $sql .= ":continuing_banner_created, ";
            $sql .= ":continuing_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_banner_title" => $this->continuing_banner_title,
                "continuing_banner_title_bold" => $this->continuing_banner_title_bold,
                "continuing_banner_description" => $this->continuing_banner_description,
                "continuing_banner_button_text" => $this->continuing_banner_button_text,
                "continuing_banner_button_link" => $this->continuing_banner_button_link,
                "continuing_banner_img" => $this->continuing_banner_img,
                "continuing_banner_created" => $this->continuing_banner_created,
                "continuing_banner_datetime" => $this->continuing_banner_datetime,
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
            $sql = "update {$this->tblContinuingBanner} set ";
            $sql .= "continuing_banner_title = :continuing_banner_title, ";
            $sql .= "continuing_banner_title_bold = :continuing_banner_title_bold, ";
            $sql .= "continuing_banner_description = :continuing_banner_description, ";
            $sql .= "continuing_banner_button_text = :continuing_banner_button_text, ";
            $sql .= "continuing_banner_button_link = :continuing_banner_button_link, ";
            $sql .= "continuing_banner_img = :continuing_banner_img, ";
            $sql .= "continuing_banner_datetime = :continuing_banner_datetime ";
            $sql .= "where continuing_banner_aid = :continuing_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_banner_title" => $this->continuing_banner_title,
                "continuing_banner_title_bold" => $this->continuing_banner_title_bold,
                "continuing_banner_description" => $this->continuing_banner_description,
                "continuing_banner_button_text" => $this->continuing_banner_button_text,
                "continuing_banner_button_link" => $this->continuing_banner_button_link,
                "continuing_banner_img" => $this->continuing_banner_img,
                "continuing_banner_datetime" => $this->continuing_banner_datetime,
                "continuing_banner_aid" => $this->continuing_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
