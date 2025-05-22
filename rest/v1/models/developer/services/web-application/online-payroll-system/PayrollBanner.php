<?php

class PayrollBanner
{
    public $payroll_banner_aid;
    public $payroll_banner_title;
    public $payroll_banner_title_bold;
    public $payroll_banner_description;
    public $payroll_banner_button_text;
    public $payroll_banner_button_link;
    public $payroll_banner_img;
    public $payroll_banner_created;
    public $payroll_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPayrollBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPayrollBanner = "fbsv2_services_payroll_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPayrollBanner} ";
            $sql .= "order by payroll_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPayrollBanner}";
            $sql .= "(payroll_banner_title, ";
            $sql .= "payroll_banner_title_bold, ";
            $sql .= "payroll_banner_description, ";
            $sql .= "payroll_banner_button_text, ";
            $sql .= "payroll_banner_button_link, ";
            $sql .= "payroll_banner_img, ";
            $sql .= "payroll_banner_created, ";
            $sql .= "payroll_banner_datetime ) values ( ";
            $sql .= ":payroll_banner_title, ";
            $sql .= ":payroll_banner_title_bold, ";
            $sql .= ":payroll_banner_description, ";
            $sql .= ":payroll_banner_button_text, ";
            $sql .= ":payroll_banner_button_link, ";
            $sql .= ":payroll_banner_img, ";
            $sql .= ":payroll_banner_created, ";
            $sql .= ":payroll_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_banner_title" => $this->payroll_banner_title,
                "payroll_banner_title_bold" => $this->payroll_banner_title_bold,
                "payroll_banner_description" => $this->payroll_banner_description,
                "payroll_banner_button_text" => $this->payroll_banner_button_text,
                "payroll_banner_button_link" => $this->payroll_banner_button_link,
                "payroll_banner_img" => $this->payroll_banner_img,
                "payroll_banner_created" => $this->payroll_banner_created,
                "payroll_banner_datetime" => $this->payroll_banner_datetime,
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
            $sql = "update {$this->tblPayrollBanner} set ";
            $sql .= "payroll_banner_title = :payroll_banner_title, ";
            $sql .= "payroll_banner_title_bold = :payroll_banner_title_bold, ";
            $sql .= "payroll_banner_description = :payroll_banner_description, ";
            $sql .= "payroll_banner_button_text = :payroll_banner_button_text, ";
            $sql .= "payroll_banner_button_link = :payroll_banner_button_link, ";
            $sql .= "payroll_banner_img = :payroll_banner_img, ";
            $sql .= "payroll_banner_datetime = :payroll_banner_datetime ";
            $sql .= "where payroll_banner_aid = :payroll_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_banner_title" => $this->payroll_banner_title,
                "payroll_banner_title_bold" => $this->payroll_banner_title_bold,
                "payroll_banner_description" => $this->payroll_banner_description,
                "payroll_banner_button_text" => $this->payroll_banner_button_text,
                "payroll_banner_button_link" => $this->payroll_banner_button_link,
                "payroll_banner_img" => $this->payroll_banner_img,
                "payroll_banner_datetime" => $this->payroll_banner_datetime,
                "payroll_banner_aid" => $this->payroll_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
