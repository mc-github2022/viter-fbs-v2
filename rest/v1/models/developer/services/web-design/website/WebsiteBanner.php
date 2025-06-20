<?php

class WebsiteBanner
{
    public $website_banner_aid;
    public $website_banner_title;
    public $website_banner_title_bold;
    public $website_banner_description;
    public $website_banner_button_text;
    public $website_banner_img;
    public $website_banner_created;
    public $website_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWebsiteBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebsiteBanner = "fbsv2_services_website_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWebsiteBanner} ";
            $sql .= "order by website_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebsiteBanner}";
            $sql .= "(website_banner_title, ";
            $sql .= "website_banner_title_bold, ";
            $sql .= "website_banner_description, ";
            $sql .= "website_banner_button_text, ";
            $sql .= "website_banner_img, ";
            $sql .= "website_banner_created, ";
            $sql .= "website_banner_datetime ) values ( ";
            $sql .= ":website_banner_title, ";
            $sql .= ":website_banner_title_bold, ";
            $sql .= ":website_banner_description, ";
            $sql .= ":website_banner_button_text, ";
            $sql .= ":website_banner_img, ";
            $sql .= ":website_banner_created, ";
            $sql .= ":website_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_banner_title" => $this->website_banner_title,
                "website_banner_title_bold" => $this->website_banner_title_bold,
                "website_banner_description" => $this->website_banner_description,
                "website_banner_button_text" => $this->website_banner_button_text,
                "website_banner_img" => $this->website_banner_img,
                "website_banner_created" => $this->website_banner_created,
                "website_banner_datetime" => $this->website_banner_datetime,
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
            $sql = "update {$this->tblWebsiteBanner} set ";
            $sql .= "website_banner_title = :website_banner_title, ";
            $sql .= "website_banner_title_bold = :website_banner_title_bold, ";
            $sql .= "website_banner_description = :website_banner_description, ";
            $sql .= "website_banner_button_text = :website_banner_button_text, ";
            $sql .= "website_banner_img = :website_banner_img, ";
            $sql .= "website_banner_datetime = :website_banner_datetime ";
            $sql .= "where website_banner_aid = :website_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_banner_title" => $this->website_banner_title,
                "website_banner_title_bold" => $this->website_banner_title_bold,
                "website_banner_description" => $this->website_banner_description,
                "website_banner_button_text" => $this->website_banner_button_text,
                "website_banner_img" => $this->website_banner_img,
                "website_banner_datetime" => $this->website_banner_datetime,
                "website_banner_aid" => $this->website_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
