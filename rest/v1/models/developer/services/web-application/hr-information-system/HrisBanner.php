<?php

class HrisBanner
{
    public $hris_banner_aid;
    public $hris_banner_title;
    public $hris_banner_title_bold;
    public $hris_banner_description;
    public $hris_banner_button_text;
    public $hris_banner_button_link;
    public $hris_banner_img;
    public $hris_banner_created;
    public $hris_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHrisBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHrisBanner = "fbsv2_services_hris_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHrisBanner} ";
            $sql .= "order by hris_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHrisBanner}";
            $sql .= "(hris_banner_title, ";
            $sql .= "hris_banner_title_bold, ";
            $sql .= "hris_banner_description, ";
            $sql .= "hris_banner_button_text, ";
            $sql .= "hris_banner_button_link, ";
            $sql .= "hris_banner_img, ";
            $sql .= "hris_banner_created, ";
            $sql .= "hris_banner_datetime ) values ( ";
            $sql .= ":hris_banner_title, ";
            $sql .= ":hris_banner_title_bold, ";
            $sql .= ":hris_banner_description, ";
            $sql .= ":hris_banner_button_text, ";
            $sql .= ":hris_banner_button_link, ";
            $sql .= ":hris_banner_img, ";
            $sql .= ":hris_banner_created, ";
            $sql .= ":hris_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_banner_title" => $this->hris_banner_title,
                "hris_banner_title_bold" => $this->hris_banner_title_bold,
                "hris_banner_description" => $this->hris_banner_description,
                "hris_banner_button_text" => $this->hris_banner_button_text,
                "hris_banner_button_link" => $this->hris_banner_button_link,
                "hris_banner_img" => $this->hris_banner_img,
                "hris_banner_created" => $this->hris_banner_created,
                "hris_banner_datetime" => $this->hris_banner_datetime,
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
            $sql = "update {$this->tblHrisBanner} set ";
            $sql .= "hris_banner_title = :hris_banner_title, ";
            $sql .= "hris_banner_title_bold = :hris_banner_title_bold, ";
            $sql .= "hris_banner_description = :hris_banner_description, ";
            $sql .= "hris_banner_button_text = :hris_banner_button_text, ";
            $sql .= "hris_banner_button_link = :hris_banner_button_link, ";
            $sql .= "hris_banner_img = :hris_banner_img, ";
            $sql .= "hris_banner_datetime = :hris_banner_datetime ";
            $sql .= "where hris_banner_aid = :hris_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_banner_title" => $this->hris_banner_title,
                "hris_banner_title_bold" => $this->hris_banner_title_bold,
                "hris_banner_description" => $this->hris_banner_description,
                "hris_banner_button_text" => $this->hris_banner_button_text,
                "hris_banner_button_link" => $this->hris_banner_button_link,
                "hris_banner_img" => $this->hris_banner_img,
                "hris_banner_datetime" => $this->hris_banner_datetime,
                "hris_banner_aid" => $this->hris_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
