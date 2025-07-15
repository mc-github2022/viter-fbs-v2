<?php

class GraphicBanner
{
    public $graphic_banner_aid;
    public $graphic_banner_title;
    public $graphic_banner_title_bold;
    public $graphic_banner_description;
    public $graphic_banner_button_text;
    public $graphic_banner_img;
    public $graphic_banner_created;
    public $graphic_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblGraphicBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGraphicBanner = "fbsv2_services_graphic_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblGraphicBanner} ";
            $sql .= "order by graphic_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGraphicBanner}";
            $sql .= "(graphic_banner_title, ";
            $sql .= "graphic_banner_title_bold, ";
            $sql .= "graphic_banner_description, ";
            $sql .= "graphic_banner_button_text, ";
            $sql .= "graphic_banner_img, ";
            $sql .= "graphic_banner_created, ";
            $sql .= "graphic_banner_datetime ) values ( ";
            $sql .= ":graphic_banner_title, ";
            $sql .= ":graphic_banner_title_bold, ";
            $sql .= ":graphic_banner_description, ";
            $sql .= ":graphic_banner_button_text, ";
            $sql .= ":graphic_banner_img, ";
            $sql .= ":graphic_banner_created, ";
            $sql .= ":graphic_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_banner_title" => $this->graphic_banner_title,
                "graphic_banner_title_bold" => $this->graphic_banner_title_bold,
                "graphic_banner_description" => $this->graphic_banner_description,
                "graphic_banner_button_text" => $this->graphic_banner_button_text,
                "graphic_banner_img" => $this->graphic_banner_img,
                "graphic_banner_created" => $this->graphic_banner_created,
                "graphic_banner_datetime" => $this->graphic_banner_datetime,
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
            $sql = "update {$this->tblGraphicBanner} set ";
            $sql .= "graphic_banner_title = :graphic_banner_title, ";
            $sql .= "graphic_banner_title_bold = :graphic_banner_title_bold, ";
            $sql .= "graphic_banner_description = :graphic_banner_description, ";
            $sql .= "graphic_banner_button_text = :graphic_banner_button_text, ";
            $sql .= "graphic_banner_img = :graphic_banner_img, ";
            $sql .= "graphic_banner_datetime = :graphic_banner_datetime ";
            $sql .= "where graphic_banner_aid = :graphic_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_banner_title" => $this->graphic_banner_title,
                "graphic_banner_title_bold" => $this->graphic_banner_title_bold,
                "graphic_banner_description" => $this->graphic_banner_description,
                "graphic_banner_button_text" => $this->graphic_banner_button_text,
                "graphic_banner_img" => $this->graphic_banner_img,
                "graphic_banner_datetime" => $this->graphic_banner_datetime,
                "graphic_banner_aid" => $this->graphic_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
