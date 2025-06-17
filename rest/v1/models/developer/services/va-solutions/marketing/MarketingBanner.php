<?php

class MarketingBanner
{
    public $marketing_banner_aid;
    public $marketing_banner_title;
    public $marketing_banner_title_bold;
    public $marketing_banner_description;
    public $marketing_banner_button_text;
    public $marketing_banner_img;
    public $marketing_banner_created;
    public $marketing_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblMarketingBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMarketingBanner = "fbsv2_services_marketing_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblMarketingBanner} ";
            $sql .= "order by marketing_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblMarketingBanner}";
            $sql .= "(marketing_banner_title, ";
            $sql .= "marketing_banner_title_bold, ";
            $sql .= "marketing_banner_description, ";
            $sql .= "marketing_banner_button_text, ";
            $sql .= "marketing_banner_img, ";
            $sql .= "marketing_banner_created, ";
            $sql .= "marketing_banner_datetime ) values ( ";
            $sql .= ":marketing_banner_title, ";
            $sql .= ":marketing_banner_title_bold, ";
            $sql .= ":marketing_banner_description, ";
            $sql .= ":marketing_banner_button_text, ";
            $sql .= ":marketing_banner_img, ";
            $sql .= ":marketing_banner_created, ";
            $sql .= ":marketing_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_banner_title" => $this->marketing_banner_title,
                "marketing_banner_title_bold" => $this->marketing_banner_title_bold,
                "marketing_banner_description" => $this->marketing_banner_description,
                "marketing_banner_button_text" => $this->marketing_banner_button_text,
                "marketing_banner_img" => $this->marketing_banner_img,
                "marketing_banner_created" => $this->marketing_banner_created,
                "marketing_banner_datetime" => $this->marketing_banner_datetime,
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
            $sql = "update {$this->tblMarketingBanner} set ";
            $sql .= "marketing_banner_title = :marketing_banner_title, ";
            $sql .= "marketing_banner_title_bold = :marketing_banner_title_bold, ";
            $sql .= "marketing_banner_description = :marketing_banner_description, ";
            $sql .= "marketing_banner_button_text = :marketing_banner_button_text, ";
            $sql .= "marketing_banner_img = :marketing_banner_img, ";
            $sql .= "marketing_banner_datetime = :marketing_banner_datetime ";
            $sql .= "where marketing_banner_aid = :marketing_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_banner_title" => $this->marketing_banner_title,
                "marketing_banner_title_bold" => $this->marketing_banner_title_bold,
                "marketing_banner_description" => $this->marketing_banner_description,
                "marketing_banner_button_text" => $this->marketing_banner_button_text,
                "marketing_banner_img" => $this->marketing_banner_img,
                "marketing_banner_datetime" => $this->marketing_banner_datetime,
                "marketing_banner_aid" => $this->marketing_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
