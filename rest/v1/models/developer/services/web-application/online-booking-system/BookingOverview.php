<?php

class BookingOverview
{
    public $booking_overview_aid;
    public $booking_overview_subtitle;
    public $booking_overview_title;
    public $booking_overview_img;
    public $booking_overview_button_text;
    public $booking_overview_list_title_a;
    public $booking_overview_list_description_a;
    public $booking_overview_list_title_b;
    public $booking_overview_list_description_b;
    public $booking_overview_list_title_c;
    public $booking_overview_list_description_c;
    public $booking_overview_created;
    public $booking_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookingOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookingOverview = "fbsv2_services_booking_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookingOverview} ";
            $sql .= "order by booking_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookingOverview}";
            $sql .= "(booking_overview_title, ";
            $sql .= "booking_overview_subtitle, ";
            $sql .= "booking_overview_img, ";
            $sql .= "booking_overview_button_text, ";
            $sql .= "booking_overview_created, ";
            $sql .= "booking_overview_datetime ) values ( ";
            $sql .= ":booking_overview_title, ";
            $sql .= ":booking_overview_subtitle, ";
            $sql .= ":booking_overview_img, ";
            $sql .= ":booking_overview_button_text, ";
            $sql .= ":booking_overview_created, ";
            $sql .= ":booking_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_overview_title" => $this->booking_overview_title,
                "booking_overview_subtitle" => $this->booking_overview_subtitle,
                "booking_overview_img" => $this->booking_overview_img,
                "booking_overview_button_text" => $this->booking_overview_button_text,
                "booking_overview_created" => $this->booking_overview_created,
                "booking_overview_datetime" => $this->booking_overview_datetime,
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
            $sql = "update {$this->tblBookingOverview} set ";
            $sql .= "booking_overview_title = :booking_overview_title, ";
            $sql .= "booking_overview_subtitle = :booking_overview_subtitle, ";
            $sql .= "booking_overview_img = :booking_overview_img, ";
            $sql .= "booking_overview_button_text = :booking_overview_button_text, ";
            $sql .= "booking_overview_datetime = :booking_overview_datetime ";
            $sql .= "where booking_overview_aid = :booking_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_overview_title" => $this->booking_overview_title,
                "booking_overview_subtitle" => $this->booking_overview_subtitle,
                "booking_overview_img" => $this->booking_overview_img,
                "booking_overview_button_text" => $this->booking_overview_button_text,
                "booking_overview_datetime" => $this->booking_overview_datetime,
                "booking_overview_aid" => $this->booking_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblBookingOverview}";
            $sql .= "(booking_overview_list_title_a, ";
            $sql .= "booking_overview_list_description_a, ";
            $sql .= "booking_overview_list_title_b, ";
            $sql .= "booking_overview_list_description_b, ";
            $sql .= "booking_overview_list_title_c, ";
            $sql .= "booking_overview_list_description_c, ";
            $sql .= "booking_overview_created, ";
            $sql .= "booking_overview_datetime ) values ( ";
            $sql .= ":booking_overview_list_title_a, ";
            $sql .= ":booking_overview_list_description_a, ";
            $sql .= ":booking_overview_list_title_b, ";
            $sql .= ":booking_overview_list_description_b, ";
            $sql .= ":booking_overview_list_title_c, ";
            $sql .= ":booking_overview_list_description_c, ";
            $sql .= ":booking_overview_created, ";
            $sql .= ":booking_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_overview_list_title_a" => $this->booking_overview_list_title_a,
                "booking_overview_list_description_a" => $this->booking_overview_list_description_a,
                "booking_overview_list_title_b" => $this->booking_overview_list_title_b,
                "booking_overview_list_description_b" => $this->booking_overview_list_description_b,
                "booking_overview_list_title_c" => $this->booking_overview_list_title_c,
                "booking_overview_list_description_c" => $this->booking_overview_list_description_c,
                "booking_overview_created" => $this->booking_overview_created,
                "booking_overview_datetime" => $this->booking_overview_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateOverviewList()
    {
        try {
            $sql = "update {$this->tblBookingOverview} set ";
            $sql .= "booking_overview_list_title_a = :booking_overview_list_title_a, ";
            $sql .= "booking_overview_list_description_a = :booking_overview_list_description_a, ";
            $sql .= "booking_overview_list_title_b = :booking_overview_list_title_b, ";
            $sql .= "booking_overview_list_description_b = :booking_overview_list_description_b, ";
            $sql .= "booking_overview_list_title_c = :booking_overview_list_title_c, ";
            $sql .= "booking_overview_list_description_c = :booking_overview_list_description_c, ";
            $sql .= "booking_overview_datetime = :booking_overview_datetime ";
            $sql .= "where booking_overview_aid = :booking_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_overview_list_title_a" => $this->booking_overview_list_title_a,
                "booking_overview_list_description_a" => $this->booking_overview_list_description_a,
                "booking_overview_list_title_b" => $this->booking_overview_list_title_b,
                "booking_overview_list_description_b" => $this->booking_overview_list_description_b,
                "booking_overview_list_title_c" => $this->booking_overview_list_title_c,
                "booking_overview_list_description_c" => $this->booking_overview_list_description_c,
                "booking_overview_datetime" => $this->booking_overview_datetime,
                "booking_overview_aid" => $this->booking_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
