<?php

class BookingScope
{
    public $booking_scope_aid;
    public $booking_scope_title;
    public $booking_scope_desc;
    public $booking_scope_img;
    public $booking_scope_button_text;
    public $booking_scope_created;
    public $booking_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookingScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookingScope = "fbsv2_services_booking_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookingScope} ";
            $sql .= "order by booking_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookingScope}";
            $sql .= "(booking_scope_title, ";
            $sql .= "booking_scope_desc, ";
            $sql .= "booking_scope_img, ";
            $sql .= "booking_scope_button_text, ";
            $sql .= "booking_scope_created, ";
            $sql .= "booking_scope_datetime ) values ( ";
            $sql .= ":booking_scope_title, ";
            $sql .= ":booking_scope_desc, ";
            $sql .= ":booking_scope_img, ";
            $sql .= ":booking_scope_button_text, ";
            $sql .= ":booking_scope_created, ";
            $sql .= ":booking_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_scope_title" => $this->booking_scope_title,
                "booking_scope_desc" => $this->booking_scope_desc,
                "booking_scope_img" => $this->booking_scope_img,
                "booking_scope_button_text" => $this->booking_scope_button_text,
                "booking_scope_created" => $this->booking_scope_created,
                "booking_scope_datetime" => $this->booking_scope_datetime,
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
            $sql = "update {$this->tblBookingScope} set ";
            $sql .= "booking_scope_title = :booking_scope_title, ";
            $sql .= "booking_scope_desc = :booking_scope_desc, ";
            $sql .= "booking_scope_img = :booking_scope_img, ";
            $sql .= "booking_scope_button_text = :booking_scope_button_text, ";
            $sql .= "booking_scope_datetime = :booking_scope_datetime ";
            $sql .= "where booking_scope_aid = :booking_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_scope_title" => $this->booking_scope_title,
                "booking_scope_desc" => $this->booking_scope_desc,
                "booking_scope_img" => $this->booking_scope_img,
                "booking_scope_button_text" => $this->booking_scope_button_text,
                "booking_scope_datetime" => $this->booking_scope_datetime,
                "booking_scope_aid" => $this->booking_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblBookingScope} ";
            $sql .= "where booking_scope_aid = :booking_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "booking_scope_aid" => $this->booking_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
