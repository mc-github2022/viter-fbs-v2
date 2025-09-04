<?php

class SocialMediaBanner
{
    public $social_banner_aid;
    public $social_banner_title;
    public $social_banner_title_bold;
    public $social_banner_description;
    public $social_banner_button_text;
    public $social_banner_img;
    public $social_banner_created;
    public $social_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaBanner = "fbsv2_services_social_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaBanner} ";
            $sql .= "order by social_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaBanner}";
            $sql .= "(social_banner_title, ";
            $sql .= "social_banner_title_bold, ";
            $sql .= "social_banner_description, ";
            $sql .= "social_banner_button_text, ";
            $sql .= "social_banner_img, ";
            $sql .= "social_banner_created, ";
            $sql .= "social_banner_datetime ) values ( ";
            $sql .= ":social_banner_title, ";
            $sql .= ":social_banner_title_bold, ";
            $sql .= ":social_banner_description, ";
            $sql .= ":social_banner_button_text, ";
            $sql .= ":social_banner_img, ";
            $sql .= ":social_banner_created, ";
            $sql .= ":social_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_banner_title" => $this->social_banner_title,
                "social_banner_title_bold" => $this->social_banner_title_bold,
                "social_banner_description" => $this->social_banner_description,
                "social_banner_button_text" => $this->social_banner_button_text,
                "social_banner_img" => $this->social_banner_img,
                "social_banner_created" => $this->social_banner_created,
                "social_banner_datetime" => $this->social_banner_datetime,
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
            $sql = "update {$this->tblSocialMediaBanner} set ";
            $sql .= "social_banner_title = :social_banner_title, ";
            $sql .= "social_banner_title_bold = :social_banner_title_bold, ";
            $sql .= "social_banner_description = :social_banner_description, ";
            $sql .= "social_banner_button_text = :social_banner_button_text, ";
            $sql .= "social_banner_img = :social_banner_img, ";
            $sql .= "social_banner_datetime = :social_banner_datetime ";
            $sql .= "where social_banner_aid = :social_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_banner_title" => $this->social_banner_title,
                "social_banner_title_bold" => $this->social_banner_title_bold,
                "social_banner_description" => $this->social_banner_description,
                "social_banner_button_text" => $this->social_banner_button_text,
                "social_banner_img" => $this->social_banner_img,
                "social_banner_datetime" => $this->social_banner_datetime,
                "social_banner_aid" => $this->social_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
