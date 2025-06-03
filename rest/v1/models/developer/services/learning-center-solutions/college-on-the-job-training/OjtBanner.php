<?php

class OjtBanner
{
    public $ojt_banner_aid;
    public $ojt_banner_title;
    public $ojt_banner_title_bold;
    public $ojt_banner_description;
    public $ojt_banner_button_text;
    public $ojt_banner_button_link;
    public $ojt_banner_img;
    public $ojt_banner_created;
    public $ojt_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblOjtBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOjtBanner = "fbsv2_services_ojt_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblOjtBanner} ";
            $sql .= "order by ojt_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblOjtBanner}";
            $sql .= "(ojt_banner_title, ";
            $sql .= "ojt_banner_title_bold, ";
            $sql .= "ojt_banner_description, ";
            $sql .= "ojt_banner_button_text, ";
            $sql .= "ojt_banner_button_link, ";
            $sql .= "ojt_banner_img, ";
            $sql .= "ojt_banner_created, ";
            $sql .= "ojt_banner_datetime ) values ( ";
            $sql .= ":ojt_banner_title, ";
            $sql .= ":ojt_banner_title_bold, ";
            $sql .= ":ojt_banner_description, ";
            $sql .= ":ojt_banner_button_text, ";
            $sql .= ":ojt_banner_button_link, ";
            $sql .= ":ojt_banner_img, ";
            $sql .= ":ojt_banner_created, ";
            $sql .= ":ojt_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_banner_title" => $this->ojt_banner_title,
                "ojt_banner_title_bold" => $this->ojt_banner_title_bold,
                "ojt_banner_description" => $this->ojt_banner_description,
                "ojt_banner_button_text" => $this->ojt_banner_button_text,
                "ojt_banner_button_link" => $this->ojt_banner_button_link,
                "ojt_banner_img" => $this->ojt_banner_img,
                "ojt_banner_created" => $this->ojt_banner_created,
                "ojt_banner_datetime" => $this->ojt_banner_datetime,
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
            $sql = "update {$this->tblOjtBanner} set ";
            $sql .= "ojt_banner_title = :ojt_banner_title, ";
            $sql .= "ojt_banner_title_bold = :ojt_banner_title_bold, ";
            $sql .= "ojt_banner_description = :ojt_banner_description, ";
            $sql .= "ojt_banner_button_text = :ojt_banner_button_text, ";
            $sql .= "ojt_banner_button_link = :ojt_banner_button_link, ";
            $sql .= "ojt_banner_img = :ojt_banner_img, ";
            $sql .= "ojt_banner_datetime = :ojt_banner_datetime ";
            $sql .= "where ojt_banner_aid = :ojt_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_banner_title" => $this->ojt_banner_title,
                "ojt_banner_title_bold" => $this->ojt_banner_title_bold,
                "ojt_banner_description" => $this->ojt_banner_description,
                "ojt_banner_button_text" => $this->ojt_banner_button_text,
                "ojt_banner_button_link" => $this->ojt_banner_button_link,
                "ojt_banner_img" => $this->ojt_banner_img,
                "ojt_banner_datetime" => $this->ojt_banner_datetime,
                "ojt_banner_aid" => $this->ojt_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
