<?php

class SinglepageBanner
{
    public $singlepage_banner_aid;
    public $singlepage_banner_title;
    public $singlepage_banner_title_bold;
    public $singlepage_banner_description;
    public $singlepage_banner_button_text;
    public $singlepage_banner_img;
    public $singlepage_banner_created;
    public $singlepage_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSinglepageBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSinglepageBanner = "fbsv2_services_singlepage_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSinglepageBanner} ";
            $sql .= "order by singlepage_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSinglepageBanner}";
            $sql .= "(singlepage_banner_title, ";
            $sql .= "singlepage_banner_title_bold, ";
            $sql .= "singlepage_banner_description, ";
            $sql .= "singlepage_banner_button_text, ";
            $sql .= "singlepage_banner_img, ";
            $sql .= "singlepage_banner_created, ";
            $sql .= "singlepage_banner_datetime ) values ( ";
            $sql .= ":singlepage_banner_title, ";
            $sql .= ":singlepage_banner_title_bold, ";
            $sql .= ":singlepage_banner_description, ";
            $sql .= ":singlepage_banner_button_text, ";
            $sql .= ":singlepage_banner_img, ";
            $sql .= ":singlepage_banner_created, ";
            $sql .= ":singlepage_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_banner_title" => $this->singlepage_banner_title,
                "singlepage_banner_title_bold" => $this->singlepage_banner_title_bold,
                "singlepage_banner_description" => $this->singlepage_banner_description,
                "singlepage_banner_button_text" => $this->singlepage_banner_button_text,
                "singlepage_banner_img" => $this->singlepage_banner_img,
                "singlepage_banner_created" => $this->singlepage_banner_created,
                "singlepage_banner_datetime" => $this->singlepage_banner_datetime,
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
            $sql = "update {$this->tblSinglepageBanner} set ";
            $sql .= "singlepage_banner_title = :singlepage_banner_title, ";
            $sql .= "singlepage_banner_title_bold = :singlepage_banner_title_bold, ";
            $sql .= "singlepage_banner_description = :singlepage_banner_description, ";
            $sql .= "singlepage_banner_button_text = :singlepage_banner_button_text, ";
            $sql .= "singlepage_banner_img = :singlepage_banner_img, ";
            $sql .= "singlepage_banner_datetime = :singlepage_banner_datetime ";
            $sql .= "where singlepage_banner_aid = :singlepage_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_banner_title" => $this->singlepage_banner_title,
                "singlepage_banner_title_bold" => $this->singlepage_banner_title_bold,
                "singlepage_banner_description" => $this->singlepage_banner_description,
                "singlepage_banner_button_text" => $this->singlepage_banner_button_text,
                "singlepage_banner_img" => $this->singlepage_banner_img,
                "singlepage_banner_datetime" => $this->singlepage_banner_datetime,
                "singlepage_banner_aid" => $this->singlepage_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
