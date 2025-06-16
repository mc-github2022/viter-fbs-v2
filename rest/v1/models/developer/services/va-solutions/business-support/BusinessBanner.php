<?php

class BusinessBanner
{
    public $business_banner_aid;
    public $business_banner_title;
    public $business_banner_title_bold;
    public $business_banner_description;
    public $business_banner_button_text;
    public $business_banner_img;
    public $business_banner_created;
    public $business_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBusinessBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBusinessBanner = "fbsv2_services_business_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBusinessBanner} ";
            $sql .= "order by business_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBusinessBanner}";
            $sql .= "(business_banner_title, ";
            $sql .= "business_banner_title_bold, ";
            $sql .= "business_banner_description, ";
            $sql .= "business_banner_button_text, ";
            $sql .= "business_banner_img, ";
            $sql .= "business_banner_created, ";
            $sql .= "business_banner_datetime ) values ( ";
            $sql .= ":business_banner_title, ";
            $sql .= ":business_banner_title_bold, ";
            $sql .= ":business_banner_description, ";
            $sql .= ":business_banner_button_text, ";
            $sql .= ":business_banner_img, ";
            $sql .= ":business_banner_created, ";
            $sql .= ":business_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_banner_title" => $this->business_banner_title,
                "business_banner_title_bold" => $this->business_banner_title_bold,
                "business_banner_description" => $this->business_banner_description,
                "business_banner_button_text" => $this->business_banner_button_text,
                "business_banner_img" => $this->business_banner_img,
                "business_banner_created" => $this->business_banner_created,
                "business_banner_datetime" => $this->business_banner_datetime,
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
            $sql = "update {$this->tblBusinessBanner} set ";
            $sql .= "business_banner_title = :business_banner_title, ";
            $sql .= "business_banner_title_bold = :business_banner_title_bold, ";
            $sql .= "business_banner_description = :business_banner_description, ";
            $sql .= "business_banner_button_text = :business_banner_button_text, ";
            $sql .= "business_banner_img = :business_banner_img, ";
            $sql .= "business_banner_datetime = :business_banner_datetime ";
            $sql .= "where business_banner_aid = :business_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_banner_title" => $this->business_banner_title,
                "business_banner_title_bold" => $this->business_banner_title_bold,
                "business_banner_description" => $this->business_banner_description,
                "business_banner_button_text" => $this->business_banner_button_text,
                "business_banner_img" => $this->business_banner_img,
                "business_banner_datetime" => $this->business_banner_datetime,
                "business_banner_aid" => $this->business_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
