<?php

class HomePartnerWithUs
{
    public $partner_with_us_aid;
    public $partner_with_us_subtitle;
    public $partner_with_us_title;
    public $partner_with_us_description;
    public $partner_with_us_button_text;
    public $partner_with_us_img;
    public $partner_with_us_created;
    public $partner_with_us_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHomePartnerWithUs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHomePartnerWithUs = "fbsv2_home_partner_with_us";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHomePartnerWithUs} ";
            $sql .= "order by partner_with_us_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHomePartnerWithUs}";
            $sql .= "(partner_with_us_subtitle, ";
            $sql .= "partner_with_us_title, ";
            $sql .= "partner_with_us_description, ";
            $sql .= "partner_with_us_button_text, ";
            $sql .= "partner_with_us_img, ";
            $sql .= "partner_with_us_created, ";
            $sql .= "partner_with_us_datetime ) values ( ";
            $sql .= ":partner_with_us_subtitle, ";
            $sql .= ":partner_with_us_title, ";
            $sql .= ":partner_with_us_description, ";
            $sql .= ":partner_with_us_button_text, ";
            $sql .= ":partner_with_us_img, ";
            $sql .= ":partner_with_us_created, ";
            $sql .= ":partner_with_us_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partner_with_us_subtitle" => $this->partner_with_us_subtitle,
                "partner_with_us_title" => $this->partner_with_us_title,
                "partner_with_us_description" => $this->partner_with_us_description,
                "partner_with_us_button_text" => $this->partner_with_us_button_text,
                "partner_with_us_img" => $this->partner_with_us_img,
                "partner_with_us_created" => $this->partner_with_us_created,
                "partner_with_us_datetime" => $this->partner_with_us_datetime,
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
            $sql = "update {$this->tblHomePartnerWithUs} set ";
            $sql .= "partner_with_us_subtitle = :partner_with_us_subtitle, ";
            $sql .= "partner_with_us_title = :partner_with_us_title, ";
            $sql .= "partner_with_us_description = :partner_with_us_description, ";
            $sql .= "partner_with_us_button_text = :partner_with_us_button_text, ";
            $sql .= "partner_with_us_img = :partner_with_us_img, ";
            $sql .= "partner_with_us_datetime = :partner_with_us_datetime ";
            $sql .= "where partner_with_us_aid = :partner_with_us_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "partner_with_us_subtitle" => $this->partner_with_us_subtitle,
                "partner_with_us_title" => $this->partner_with_us_title,
                "partner_with_us_description" => $this->partner_with_us_description,
                "partner_with_us_button_text" => $this->partner_with_us_button_text,
                "partner_with_us_img" => $this->partner_with_us_img,
                "partner_with_us_datetime" => $this->partner_with_us_datetime,
                "partner_with_us_aid" => $this->partner_with_us_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
