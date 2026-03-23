<?php

class BookingTitles
{
    public $booking_titles_aid;
    public $booking_titles_overview_subtitle;
    public $booking_titles_overview_title;
    public $booking_titles_packages_subtitle;
    public $booking_titles_packages_title;
    public $booking_titles_created;
    public $booking_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookingTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookingTitles = "fbsv2_services_booking_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookingTitles} ";
            $sql .= "order by booking_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookingTitles}";
            $sql .= "(booking_titles_overview_subtitle, ";
            $sql .= "booking_titles_overview_title, ";
            $sql .= "booking_titles_created, ";
            $sql .= "booking_titles_datetime ) values ( ";
            $sql .= ":booking_titles_overview_subtitle, ";
            $sql .= ":booking_titles_overview_title, ";
            $sql .= ":booking_titles_created, ";
            $sql .= ":booking_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_titles_overview_subtitle" => $this->booking_titles_overview_subtitle,
                "booking_titles_overview_title" => $this->booking_titles_overview_title,
                "booking_titles_created" => $this->booking_titles_created,
                "booking_titles_datetime" => $this->booking_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPackagesTitle()
    {
        try {
            $sql = "insert into {$this->tblBookingTitles}";
            $sql .= "(booking_titles_packages_subtitle, ";
            $sql .= "booking_titles_packages_title, ";
            $sql .= "booking_titles_created, ";
            $sql .= "booking_titles_datetime ) values ( ";
            $sql .= ":booking_titles_packages_subtitle, ";
            $sql .= ":booking_titles_packages_title, ";
            $sql .= ":booking_titles_created, ";
            $sql .= ":booking_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_titles_packages_subtitle" => $this->booking_titles_packages_subtitle,
                "booking_titles_packages_title" => $this->booking_titles_packages_title,
                "booking_titles_created" => $this->booking_titles_created,
                "booking_titles_datetime" => $this->booking_titles_datetime,
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
            $sql = "update {$this->tblBookingTitles} set ";
            $sql .= "booking_titles_overview_subtitle = :booking_titles_overview_subtitle, ";
            $sql .= "booking_titles_overview_title = :booking_titles_overview_title, ";
            $sql .= "booking_titles_datetime = :booking_titles_datetime ";
            $sql .= "where booking_titles_aid = :booking_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_titles_overview_subtitle" => $this->booking_titles_overview_subtitle,
                "booking_titles_overview_title" => $this->booking_titles_overview_title,
                "booking_titles_datetime" => $this->booking_titles_datetime,
                "booking_titles_aid" => $this->booking_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblBookingTitles} set ";
            $sql .= "booking_titles_packages_subtitle = :booking_titles_packages_subtitle, ";
            $sql .= "booking_titles_packages_title = :booking_titles_packages_title, ";
            $sql .= "booking_titles_datetime = :booking_titles_datetime ";
            $sql .= "where booking_titles_aid = :booking_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_titles_packages_subtitle" => $this->booking_titles_packages_subtitle,
                "booking_titles_packages_title" => $this->booking_titles_packages_title,
                "booking_titles_datetime" => $this->booking_titles_datetime,
                "booking_titles_aid" => $this->booking_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
