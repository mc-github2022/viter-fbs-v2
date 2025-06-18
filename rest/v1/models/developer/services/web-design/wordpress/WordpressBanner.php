<?php

class WordpressBanner
{
    public $wordpress_banner_aid;
    public $wordpress_banner_title;
    public $wordpress_banner_title_bold;
    public $wordpress_banner_description;
    public $wordpress_banner_button_text;
    public $wordpress_banner_img;
    public $wordpress_banner_created;
    public $wordpress_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWordpressBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWordpressBanner = "fbsv2_services_wordpress_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWordpressBanner} ";
            $sql .= "order by wordpress_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWordpressBanner}";
            $sql .= "(wordpress_banner_title, ";
            $sql .= "wordpress_banner_title_bold, ";
            $sql .= "wordpress_banner_description, ";
            $sql .= "wordpress_banner_button_text, ";
            $sql .= "wordpress_banner_img, ";
            $sql .= "wordpress_banner_created, ";
            $sql .= "wordpress_banner_datetime ) values ( ";
            $sql .= ":wordpress_banner_title, ";
            $sql .= ":wordpress_banner_title_bold, ";
            $sql .= ":wordpress_banner_description, ";
            $sql .= ":wordpress_banner_button_text, ";
            $sql .= ":wordpress_banner_img, ";
            $sql .= ":wordpress_banner_created, ";
            $sql .= ":wordpress_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_banner_title" => $this->wordpress_banner_title,
                "wordpress_banner_title_bold" => $this->wordpress_banner_title_bold,
                "wordpress_banner_description" => $this->wordpress_banner_description,
                "wordpress_banner_button_text" => $this->wordpress_banner_button_text,
                "wordpress_banner_img" => $this->wordpress_banner_img,
                "wordpress_banner_created" => $this->wordpress_banner_created,
                "wordpress_banner_datetime" => $this->wordpress_banner_datetime,
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
            $sql = "update {$this->tblWordpressBanner} set ";
            $sql .= "wordpress_banner_title = :wordpress_banner_title, ";
            $sql .= "wordpress_banner_title_bold = :wordpress_banner_title_bold, ";
            $sql .= "wordpress_banner_description = :wordpress_banner_description, ";
            $sql .= "wordpress_banner_button_text = :wordpress_banner_button_text, ";
            $sql .= "wordpress_banner_img = :wordpress_banner_img, ";
            $sql .= "wordpress_banner_datetime = :wordpress_banner_datetime ";
            $sql .= "where wordpress_banner_aid = :wordpress_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_banner_title" => $this->wordpress_banner_title,
                "wordpress_banner_title_bold" => $this->wordpress_banner_title_bold,
                "wordpress_banner_description" => $this->wordpress_banner_description,
                "wordpress_banner_button_text" => $this->wordpress_banner_button_text,
                "wordpress_banner_img" => $this->wordpress_banner_img,
                "wordpress_banner_datetime" => $this->wordpress_banner_datetime,
                "wordpress_banner_aid" => $this->wordpress_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
