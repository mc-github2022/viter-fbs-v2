<?php

class BookingBanner
{
    public $booking_banner_aid;
    public $booking_banner_title;
    public $booking_banner_title_bold;
    public $booking_banner_description;
    public $booking_banner_button_text;
    public $booking_banner_button_link;
    public $booking_banner_img;
    public $booking_banner_created;
    public $booking_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookingBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookingBanner = "fbsv2_services_booking_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookingBanner} ";
            $sql .= "order by booking_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookingBanner}";
            $sql .= "(booking_banner_title, ";
            $sql .= "booking_banner_title_bold, ";
            $sql .= "booking_banner_description, ";
            $sql .= "booking_banner_button_text, ";
            $sql .= "booking_banner_button_link, ";
            $sql .= "booking_banner_img, ";
            $sql .= "booking_banner_created, ";
            $sql .= "booking_banner_datetime ) values ( ";
            $sql .= ":booking_banner_title, ";
            $sql .= ":booking_banner_title_bold, ";
            $sql .= ":booking_banner_description, ";
            $sql .= ":booking_banner_button_text, ";
            $sql .= ":booking_banner_button_link, ";
            $sql .= ":booking_banner_img, ";
            $sql .= ":booking_banner_created, ";
            $sql .= ":booking_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_banner_title" => $this->booking_banner_title,
                "booking_banner_title_bold" => $this->booking_banner_title_bold,
                "booking_banner_description" => $this->booking_banner_description,
                "booking_banner_button_text" => $this->booking_banner_button_text,
                "booking_banner_button_link" => $this->booking_banner_button_link,
                "booking_banner_img" => $this->booking_banner_img,
                "booking_banner_created" => $this->booking_banner_created,
                "booking_banner_datetime" => $this->booking_banner_datetime,
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
            $sql = "update {$this->tblBookingBanner} set ";
            $sql .= "booking_banner_title = :booking_banner_title, ";
            $sql .= "booking_banner_title_bold = :booking_banner_title_bold, ";
            $sql .= "booking_banner_description = :booking_banner_description, ";
            $sql .= "booking_banner_button_text = :booking_banner_button_text, ";
            $sql .= "booking_banner_button_link = :booking_banner_button_link, ";
            $sql .= "booking_banner_img = :booking_banner_img, ";
            $sql .= "booking_banner_datetime = :booking_banner_datetime ";
            $sql .= "where booking_banner_aid = :booking_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_banner_title" => $this->booking_banner_title,
                "booking_banner_title_bold" => $this->booking_banner_title_bold,
                "booking_banner_description" => $this->booking_banner_description,
                "booking_banner_button_text" => $this->booking_banner_button_text,
                "booking_banner_button_link" => $this->booking_banner_button_link,
                "booking_banner_img" => $this->booking_banner_img,
                "booking_banner_datetime" => $this->booking_banner_datetime,
                "booking_banner_aid" => $this->booking_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
