<?php

class BookkeepingBanner
{
    public $bookkeeping_banner_aid;
    public $bookkeeping_banner_title;
    public $bookkeeping_banner_title_bold;
    public $bookkeeping_banner_description;
    public $bookkeeping_banner_button_text;
    public $bookkeeping_banner_img;
    public $bookkeeping_banner_created;
    public $bookkeeping_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookkeepingBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookkeepingBanner = "fbsv2_services_bookkeeping_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookkeepingBanner} ";
            $sql .= "order by bookkeeping_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookkeepingBanner}";
            $sql .= "(bookkeeping_banner_title, ";
            $sql .= "bookkeeping_banner_title_bold, ";
            $sql .= "bookkeeping_banner_description, ";
            $sql .= "bookkeeping_banner_button_text, ";
            $sql .= "bookkeeping_banner_img, ";
            $sql .= "bookkeeping_banner_created, ";
            $sql .= "bookkeeping_banner_datetime ) values ( ";
            $sql .= ":bookkeeping_banner_title, ";
            $sql .= ":bookkeeping_banner_title_bold, ";
            $sql .= ":bookkeeping_banner_description, ";
            $sql .= ":bookkeeping_banner_button_text, ";
            $sql .= ":bookkeeping_banner_img, ";
            $sql .= ":bookkeeping_banner_created, ";
            $sql .= ":bookkeeping_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_banner_title" => $this->bookkeeping_banner_title,
                "bookkeeping_banner_title_bold" => $this->bookkeeping_banner_title_bold,
                "bookkeeping_banner_description" => $this->bookkeeping_banner_description,
                "bookkeeping_banner_button_text" => $this->bookkeeping_banner_button_text,
                "bookkeeping_banner_img" => $this->bookkeeping_banner_img,
                "bookkeeping_banner_created" => $this->bookkeeping_banner_created,
                "bookkeeping_banner_datetime" => $this->bookkeeping_banner_datetime,
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
            $sql = "update {$this->tblBookkeepingBanner} set ";
            $sql .= "bookkeeping_banner_title = :bookkeeping_banner_title, ";
            $sql .= "bookkeeping_banner_title_bold = :bookkeeping_banner_title_bold, ";
            $sql .= "bookkeeping_banner_description = :bookkeeping_banner_description, ";
            $sql .= "bookkeeping_banner_button_text = :bookkeeping_banner_button_text, ";
            $sql .= "bookkeeping_banner_img = :bookkeeping_banner_img, ";
            $sql .= "bookkeeping_banner_datetime = :bookkeeping_banner_datetime ";
            $sql .= "where bookkeeping_banner_aid = :bookkeeping_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_banner_title" => $this->bookkeeping_banner_title,
                "bookkeeping_banner_title_bold" => $this->bookkeeping_banner_title_bold,
                "bookkeeping_banner_description" => $this->bookkeeping_banner_description,
                "bookkeeping_banner_button_text" => $this->bookkeeping_banner_button_text,
                "bookkeeping_banner_img" => $this->bookkeeping_banner_img,
                "bookkeeping_banner_datetime" => $this->bookkeeping_banner_datetime,
                "bookkeeping_banner_aid" => $this->bookkeeping_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
