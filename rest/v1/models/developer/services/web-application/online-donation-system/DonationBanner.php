<?php

class DonationBanner
{
    public $donation_banner_aid;
    public $donation_banner_title;
    public $donation_banner_title_bold;
    public $donation_banner_description;
    public $donation_banner_button_text;
    public $donation_banner_img;
    public $donation_banner_created;
    public $donation_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblDonationBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDonationBanner = "fbsv2_services_donation_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblDonationBanner} ";
            $sql .= "order by donation_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblDonationBanner}";
            $sql .= "(donation_banner_title, ";
            $sql .= "donation_banner_title_bold, ";
            $sql .= "donation_banner_description, ";
            $sql .= "donation_banner_button_text, ";
            $sql .= "donation_banner_img, ";
            $sql .= "donation_banner_created, ";
            $sql .= "donation_banner_datetime ) values ( ";
            $sql .= ":donation_banner_title, ";
            $sql .= ":donation_banner_title_bold, ";
            $sql .= ":donation_banner_description, ";
            $sql .= ":donation_banner_button_text, ";
            $sql .= ":donation_banner_img, ";
            $sql .= ":donation_banner_created, ";
            $sql .= ":donation_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_banner_title" => $this->donation_banner_title,
                "donation_banner_title_bold" => $this->donation_banner_title_bold,
                "donation_banner_description" => $this->donation_banner_description,
                "donation_banner_button_text" => $this->donation_banner_button_text,
                "donation_banner_img" => $this->donation_banner_img,
                "donation_banner_created" => $this->donation_banner_created,
                "donation_banner_datetime" => $this->donation_banner_datetime,
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
            $sql = "update {$this->tblDonationBanner} set ";
            $sql .= "donation_banner_title = :donation_banner_title, ";
            $sql .= "donation_banner_title_bold = :donation_banner_title_bold, ";
            $sql .= "donation_banner_description = :donation_banner_description, ";
            $sql .= "donation_banner_button_text = :donation_banner_button_text, ";
            $sql .= "donation_banner_img = :donation_banner_img, ";
            $sql .= "donation_banner_datetime = :donation_banner_datetime ";
            $sql .= "where donation_banner_aid = :donation_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_banner_title" => $this->donation_banner_title,
                "donation_banner_title_bold" => $this->donation_banner_title_bold,
                "donation_banner_description" => $this->donation_banner_description,
                "donation_banner_button_text" => $this->donation_banner_button_text,
                "donation_banner_img" => $this->donation_banner_img,
                "donation_banner_datetime" => $this->donation_banner_datetime,
                "donation_banner_aid" => $this->donation_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
