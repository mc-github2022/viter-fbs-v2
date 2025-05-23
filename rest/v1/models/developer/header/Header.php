<?php

class Header
{
    public $header_aid;
    public $header_logo_img;
    public $header_home;
    public $header_services;
    public $header_whyfbs;
    public $header_payment;
    public $header_payment_link;
    public $header_button_text;
    public $header_created;
    public $header_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHeader;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "fbsv2_header";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHeader} ";
            $sql .= "order by header_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHeader}";
            $sql .= "(header_logo_img, ";
            $sql .= "header_home, ";
            $sql .= "header_services, ";
            $sql .= "header_whyfbs, ";
            $sql .= "header_payment, ";
            $sql .= "header_payment_link, ";
            $sql .= "header_button_text, ";
            $sql .= "header_created, ";
            $sql .= "header_datetime ) values ( ";
            $sql .= ":header_logo_img, ";
            $sql .= ":header_home, ";
            $sql .= ":header_services, ";
            $sql .= ":header_whyfbs, ";
            $sql .= ":header_payment, ";
            $sql .= ":header_payment_link, ";
            $sql .= ":header_button_text, ";
            $sql .= ":header_created, ";
            $sql .= ":header_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_logo_img" => $this->header_logo_img,
                "header_home" => $this->header_home,
                "header_services" => $this->header_services,
                "header_whyfbs" => $this->header_whyfbs,
                "header_payment" => $this->header_payment,
                "header_payment_link" => $this->header_payment_link,
                "header_button_text" => $this->header_button_text,
                "header_created" => $this->header_created,
                "header_datetime" => $this->header_datetime,
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
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_logo_img = :header_logo_img, ";
            $sql .= "header_home = :header_home, ";
            $sql .= "header_services = :header_services, ";
            $sql .= "header_whyfbs = :header_whyfbs, ";
            $sql .= "header_payment = :header_payment, ";
            $sql .= "header_payment_link = :header_payment_link, ";
            $sql .= "header_button_text = :header_button_text, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_logo_img" => $this->header_logo_img,
                "header_home" => $this->header_home,
                "header_services" => $this->header_services,
                "header_whyfbs" => $this->header_whyfbs,
                "header_payment" => $this->header_payment,
                "header_payment_link" => $this->header_payment_link,
                "header_button_text" => $this->header_button_text,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
