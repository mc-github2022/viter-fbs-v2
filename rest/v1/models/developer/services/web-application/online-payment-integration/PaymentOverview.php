<?php

class PaymentOverview
{
    public $payment_overview_aid;
    public $payment_overview_subtitle;
    public $payment_overview_title;
    public $payment_overview_img;
    public $payment_overview_button_text;
    public $payment_overview_list_title_a;
    public $payment_overview_list_description_a;
    public $payment_overview_list_title_b;
    public $payment_overview_list_description_b;
    public $payment_overview_list_title_c;
    public $payment_overview_list_description_c;
    public $payment_overview_created;
    public $payment_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPaymentOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPaymentOverview = "fbsv2_services_payment_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPaymentOverview} ";
            $sql .= "order by payment_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPaymentOverview}";
            $sql .= "(payment_overview_title, ";
            $sql .= "payment_overview_subtitle, ";
            $sql .= "payment_overview_img, ";
            $sql .= "payment_overview_button_text, ";
            $sql .= "payment_overview_created, ";
            $sql .= "payment_overview_datetime ) values ( ";
            $sql .= ":payment_overview_title, ";
            $sql .= ":payment_overview_subtitle, ";
            $sql .= ":payment_overview_img, ";
            $sql .= ":payment_overview_button_text, ";
            $sql .= ":payment_overview_created, ";
            $sql .= ":payment_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_overview_title" => $this->payment_overview_title,
                "payment_overview_subtitle" => $this->payment_overview_subtitle,
                "payment_overview_img" => $this->payment_overview_img,
                "payment_overview_button_text" => $this->payment_overview_button_text,
                "payment_overview_created" => $this->payment_overview_created,
                "payment_overview_datetime" => $this->payment_overview_datetime,
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
            $sql = "update {$this->tblPaymentOverview} set ";
            $sql .= "payment_overview_title = :payment_overview_title, ";
            $sql .= "payment_overview_subtitle = :payment_overview_subtitle, ";
            $sql .= "payment_overview_img = :payment_overview_img, ";
            $sql .= "payment_overview_button_text = :payment_overview_button_text, ";
            $sql .= "payment_overview_datetime = :payment_overview_datetime ";
            $sql .= "where payment_overview_aid = :payment_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_overview_title" => $this->payment_overview_title,
                "payment_overview_subtitle" => $this->payment_overview_subtitle,
                "payment_overview_img" => $this->payment_overview_img,
                "payment_overview_button_text" => $this->payment_overview_button_text,
                "payment_overview_datetime" => $this->payment_overview_datetime,
                "payment_overview_aid" => $this->payment_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblPaymentOverview}";
            $sql .= "(payment_overview_list_title_a, ";
            $sql .= "payment_overview_list_description_a, ";
            $sql .= "payment_overview_list_title_b, ";
            $sql .= "payment_overview_list_description_b, ";
            $sql .= "payment_overview_list_title_c, ";
            $sql .= "payment_overview_list_description_c, ";
            $sql .= "payment_overview_created, ";
            $sql .= "payment_overview_datetime ) values ( ";
            $sql .= ":payment_overview_list_title_a, ";
            $sql .= ":payment_overview_list_description_a, ";
            $sql .= ":payment_overview_list_title_b, ";
            $sql .= ":payment_overview_list_description_b, ";
            $sql .= ":payment_overview_list_title_c, ";
            $sql .= ":payment_overview_list_description_c, ";
            $sql .= ":payment_overview_created, ";
            $sql .= ":payment_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_overview_list_title_a" => $this->payment_overview_list_title_a,
                "payment_overview_list_description_a" => $this->payment_overview_list_description_a,
                "payment_overview_list_title_b" => $this->payment_overview_list_title_b,
                "payment_overview_list_description_b" => $this->payment_overview_list_description_b,
                "payment_overview_list_title_c" => $this->payment_overview_list_title_c,
                "payment_overview_list_description_c" => $this->payment_overview_list_description_c,
                "payment_overview_created" => $this->payment_overview_created,
                "payment_overview_datetime" => $this->payment_overview_datetime,
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
            $sql = "update {$this->tblPaymentOverview} set ";
            $sql .= "payment_overview_list_title_a = :payment_overview_list_title_a, ";
            $sql .= "payment_overview_list_description_a = :payment_overview_list_description_a, ";
            $sql .= "payment_overview_list_title_b = :payment_overview_list_title_b, ";
            $sql .= "payment_overview_list_description_b = :payment_overview_list_description_b, ";
            $sql .= "payment_overview_list_title_c = :payment_overview_list_title_c, ";
            $sql .= "payment_overview_list_description_c = :payment_overview_list_description_c, ";
            $sql .= "payment_overview_datetime = :payment_overview_datetime ";
            $sql .= "where payment_overview_aid = :payment_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_overview_list_title_a" => $this->payment_overview_list_title_a,
                "payment_overview_list_description_a" => $this->payment_overview_list_description_a,
                "payment_overview_list_title_b" => $this->payment_overview_list_title_b,
                "payment_overview_list_description_b" => $this->payment_overview_list_description_b,
                "payment_overview_list_title_c" => $this->payment_overview_list_title_c,
                "payment_overview_list_description_c" => $this->payment_overview_list_description_c,
                "payment_overview_datetime" => $this->payment_overview_datetime,
                "payment_overview_aid" => $this->payment_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
