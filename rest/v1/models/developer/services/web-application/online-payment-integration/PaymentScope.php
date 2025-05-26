<?php

class PaymentScope
{
    public $payment_scope_aid;
    public $payment_scope_title;
    public $payment_scope_desc;
    public $payment_scope_img;
    public $payment_scope_button_text;
    public $payment_scope_created;
    public $payment_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPaymentScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPaymentScope = "fbsv2_services_payment_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPaymentScope} ";
            $sql .= "order by payment_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPaymentScope}";
            $sql .= "(payment_scope_title, ";
            $sql .= "payment_scope_desc, ";
            $sql .= "payment_scope_img, ";
            $sql .= "payment_scope_button_text, ";
            $sql .= "payment_scope_created, ";
            $sql .= "payment_scope_datetime ) values ( ";
            $sql .= ":payment_scope_title, ";
            $sql .= ":payment_scope_desc, ";
            $sql .= ":payment_scope_img, ";
            $sql .= ":payment_scope_button_text, ";
            $sql .= ":payment_scope_created, ";
            $sql .= ":payment_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_scope_title" => $this->payment_scope_title,
                "payment_scope_desc" => $this->payment_scope_desc,
                "payment_scope_img" => $this->payment_scope_img,
                "payment_scope_button_text" => $this->payment_scope_button_text,
                "payment_scope_created" => $this->payment_scope_created,
                "payment_scope_datetime" => $this->payment_scope_datetime,
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
            $sql = "update {$this->tblPaymentScope} set ";
            $sql .= "payment_scope_title = :payment_scope_title, ";
            $sql .= "payment_scope_desc = :payment_scope_desc, ";
            $sql .= "payment_scope_img = :payment_scope_img, ";
            $sql .= "payment_scope_button_text = :payment_scope_button_text, ";
            $sql .= "payment_scope_datetime = :payment_scope_datetime ";
            $sql .= "where payment_scope_aid = :payment_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_scope_title" => $this->payment_scope_title,
                "payment_scope_desc" => $this->payment_scope_desc,
                "payment_scope_img" => $this->payment_scope_img,
                "payment_scope_button_text" => $this->payment_scope_button_text,
                "payment_scope_datetime" => $this->payment_scope_datetime,
                "payment_scope_aid" => $this->payment_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPaymentScope} ";
            $sql .= "where payment_scope_aid = :payment_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_scope_aid" => $this->payment_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
