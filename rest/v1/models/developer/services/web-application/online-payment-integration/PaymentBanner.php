<?php

class PaymentBanner
{
    public $payment_banner_aid;
    public $payment_banner_title;
    public $payment_banner_title_bold;
    public $payment_banner_description;
    public $payment_banner_button_text;
    public $payment_banner_img;
    public $payment_banner_created;
    public $payment_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPaymentBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPaymentBanner = "fbsv2_services_payment_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPaymentBanner} ";
            $sql .= "order by payment_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPaymentBanner}";
            $sql .= "(payment_banner_title, ";
            $sql .= "payment_banner_title_bold, ";
            $sql .= "payment_banner_description, ";
            $sql .= "payment_banner_button_text, ";
            $sql .= "payment_banner_img, ";
            $sql .= "payment_banner_created, ";
            $sql .= "payment_banner_datetime ) values ( ";
            $sql .= ":payment_banner_title, ";
            $sql .= ":payment_banner_title_bold, ";
            $sql .= ":payment_banner_description, ";
            $sql .= ":payment_banner_button_text, ";
            $sql .= ":payment_banner_img, ";
            $sql .= ":payment_banner_created, ";
            $sql .= ":payment_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_banner_title" => $this->payment_banner_title,
                "payment_banner_title_bold" => $this->payment_banner_title_bold,
                "payment_banner_description" => $this->payment_banner_description,
                "payment_banner_button_text" => $this->payment_banner_button_text,
                "payment_banner_img" => $this->payment_banner_img,
                "payment_banner_created" => $this->payment_banner_created,
                "payment_banner_datetime" => $this->payment_banner_datetime,
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
            $sql = "update {$this->tblPaymentBanner} set ";
            $sql .= "payment_banner_title = :payment_banner_title, ";
            $sql .= "payment_banner_title_bold = :payment_banner_title_bold, ";
            $sql .= "payment_banner_description = :payment_banner_description, ";
            $sql .= "payment_banner_button_text = :payment_banner_button_text, ";
            $sql .= "payment_banner_img = :payment_banner_img, ";
            $sql .= "payment_banner_datetime = :payment_banner_datetime ";
            $sql .= "where payment_banner_aid = :payment_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_banner_title" => $this->payment_banner_title,
                "payment_banner_title_bold" => $this->payment_banner_title_bold,
                "payment_banner_description" => $this->payment_banner_description,
                "payment_banner_button_text" => $this->payment_banner_button_text,
                "payment_banner_img" => $this->payment_banner_img,
                "payment_banner_datetime" => $this->payment_banner_datetime,
                "payment_banner_aid" => $this->payment_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
