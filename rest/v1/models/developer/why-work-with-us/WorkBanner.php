<?php

class WorkBanner
{
    public $work_banner_aid;
    public $work_banner_title;
    public $work_banner_title_bold;
    public $work_banner_description;
    public $work_banner_button_text;
    public $work_banner_img;
    public $work_banner_created;
    public $work_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWorkBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorkBanner = "fbsv2_work_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWorkBanner} ";
            $sql .= "order by work_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWorkBanner}";
            $sql .= "(work_banner_title, ";
            $sql .= "work_banner_title_bold, ";
            $sql .= "work_banner_description, ";
            $sql .= "work_banner_button_text, ";
            $sql .= "work_banner_img, ";
            $sql .= "work_banner_created, ";
            $sql .= "work_banner_datetime ) values ( ";
            $sql .= ":work_banner_title, ";
            $sql .= ":work_banner_title_bold, ";
            $sql .= ":work_banner_description, ";
            $sql .= ":work_banner_button_text, ";
            $sql .= ":work_banner_img, ";
            $sql .= ":work_banner_created, ";
            $sql .= ":work_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_banner_title" => $this->work_banner_title,
                "work_banner_title_bold" => $this->work_banner_title_bold,
                "work_banner_description" => $this->work_banner_description,
                "work_banner_button_text" => $this->work_banner_button_text,
                "work_banner_img" => $this->work_banner_img,
                "work_banner_created" => $this->work_banner_created,
                "work_banner_datetime" => $this->work_banner_datetime,
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
            $sql = "update {$this->tblWorkBanner} set ";
            $sql .= "work_banner_title = :work_banner_title, ";
            $sql .= "work_banner_title_bold = :work_banner_title_bold, ";
            $sql .= "work_banner_description = :work_banner_description, ";
            $sql .= "work_banner_button_text = :work_banner_button_text, ";
            $sql .= "work_banner_img = :work_banner_img, ";
            $sql .= "work_banner_datetime = :work_banner_datetime ";
            $sql .= "where work_banner_aid = :work_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_banner_title" => $this->work_banner_title,
                "work_banner_title_bold" => $this->work_banner_title_bold,
                "work_banner_description" => $this->work_banner_description,
                "work_banner_button_text" => $this->work_banner_button_text,
                "work_banner_img" => $this->work_banner_img,
                "work_banner_datetime" => $this->work_banner_datetime,
                "work_banner_aid" => $this->work_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
