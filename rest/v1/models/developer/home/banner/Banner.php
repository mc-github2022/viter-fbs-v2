<?php

class Banner
{
    public $home_banner_aid;
    public $home_banner_sub_title;
    public $home_banner_title;
    public $home_banner_description;
    public $home_banner_button_text;
    public $home_banner_img;
    public $home_banner_created;
    public $home_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBanner = "home_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBanner} ";
            $sql .= "order by home_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBanner}";
            $sql .= "(home_banner_sub_title, ";
            $sql .= "home_banner_title, ";
            $sql .= "home_banner_description, ";
            $sql .= "home_banner_button_text, ";
            $sql .= "home_banner_img, ";
            $sql .= "home_banner_created, ";
            $sql .= "home_banner_datetime ) values ( ";
            $sql .= ":home_banner_sub_title, ";
            $sql .= ":home_banner_title, ";
            $sql .= ":home_banner_description, ";
            $sql .= ":home_banner_button_text, ";
            $sql .= ":home_banner_img, ";
            $sql .= ":home_banner_created, ";
            $sql .= ":home_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_banner_sub_title" => $this->home_banner_sub_title,
                "home_banner_title" => $this->home_banner_title,
                "home_banner_description" => $this->home_banner_description,
                "home_banner_button_text" => $this->home_banner_button_text,
                "home_banner_img" => $this->home_banner_img,
                "home_banner_created" => $this->home_banner_created,
                "home_banner_datetime" => $this->home_banner_datetime,
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
            $sql = "update {$this->tblBanner} set ";
            $sql .= "home_banner_sub_title = :home_banner_sub_title, ";
            $sql .= "home_banner_title = :home_banner_title, ";
            $sql .= "home_banner_description = :home_banner_description, ";
            $sql .= "home_banner_button_text = :home_banner_button_text, ";
            $sql .= "home_banner_img = :home_banner_img, ";
            $sql .= "home_banner_datetime = :home_banner_datetime ";
            $sql .= "where home_banner_aid = :home_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_banner_sub_title" => $this->home_banner_sub_title,
                "home_banner_title" => $this->home_banner_title,
                "home_banner_description" => $this->home_banner_description,
                "home_banner_button_text" => $this->home_banner_button_text,
                "home_banner_img" => $this->home_banner_img,
                "home_banner_datetime" => $this->home_banner_datetime,
                "home_banner_aid" => $this->home_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBanner} ";
            $sql .= "where home_banner_aid = :home_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_banner_aid" => $this->home_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
