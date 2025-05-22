<?php

class PayrollOverview
{
    public $payroll_overview_aid;
    public $payroll_overview_subtitle;
    public $payroll_overview_title;
    public $payroll_overview_img;
    public $payroll_overview_list_title_a;
    public $payroll_overview_list_description_a;
    public $payroll_overview_list_title_b;
    public $payroll_overview_list_description_b;
    public $payroll_overview_list_title_c;
    public $payroll_overview_list_description_c;
    public $payroll_overview_created;
    public $payroll_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPayrollOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPayrollOverview = "fbsv2_services_payroll_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPayrollOverview} ";
            $sql .= "order by payroll_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPayrollOverview}";
            $sql .= "(payroll_overview_title, ";
            $sql .= "payroll_overview_subtitle, ";
            $sql .= "payroll_overview_img, ";
            $sql .= "payroll_overview_created, ";
            $sql .= "payroll_overview_datetime ) values ( ";
            $sql .= ":payroll_overview_title, ";
            $sql .= ":payroll_overview_subtitle, ";
            $sql .= ":payroll_overview_img, ";
            $sql .= ":payroll_overview_created, ";
            $sql .= ":payroll_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_overview_title" => $this->payroll_overview_title,
                "payroll_overview_subtitle" => $this->payroll_overview_subtitle,
                "payroll_overview_img" => $this->payroll_overview_img,
                "payroll_overview_created" => $this->payroll_overview_created,
                "payroll_overview_datetime" => $this->payroll_overview_datetime,
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
            $sql = "update {$this->tblPayrollOverview} set ";
            $sql .= "payroll_overview_title = :payroll_overview_title, ";
            $sql .= "payroll_overview_subtitle = :payroll_overview_subtitle, ";
            $sql .= "payroll_overview_img = :payroll_overview_img, ";
            $sql .= "payroll_overview_datetime = :payroll_overview_datetime ";
            $sql .= "where payroll_overview_aid = :payroll_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_overview_title" => $this->payroll_overview_title,
                "payroll_overview_subtitle" => $this->payroll_overview_subtitle,
                "payroll_overview_img" => $this->payroll_overview_img,
                "payroll_overview_datetime" => $this->payroll_overview_datetime,
                "payroll_overview_aid" => $this->payroll_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblPayrollOverview}";
            $sql .= "(payroll_overview_list_title_a, ";
            $sql .= "payroll_overview_list_description_a, ";
            $sql .= "payroll_overview_list_title_b, ";
            $sql .= "payroll_overview_list_description_b, ";
            $sql .= "payroll_overview_list_title_c, ";
            $sql .= "payroll_overview_list_description_c, ";
            $sql .= "payroll_overview_created, ";
            $sql .= "payroll_overview_datetime ) values ( ";
            $sql .= ":payroll_overview_list_title_a, ";
            $sql .= ":payroll_overview_list_description_a, ";
            $sql .= ":payroll_overview_list_title_b, ";
            $sql .= ":payroll_overview_list_description_b, ";
            $sql .= ":payroll_overview_list_title_c, ";
            $sql .= ":payroll_overview_list_description_c, ";
            $sql .= ":payroll_overview_created, ";
            $sql .= ":payroll_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_overview_list_title_a" => $this->payroll_overview_list_title_a,
                "payroll_overview_list_description_a" => $this->payroll_overview_list_description_a,
                "payroll_overview_list_title_b" => $this->payroll_overview_list_title_b,
                "payroll_overview_list_description_b" => $this->payroll_overview_list_description_b,
                "payroll_overview_list_title_c" => $this->payroll_overview_list_title_c,
                "payroll_overview_list_description_c" => $this->payroll_overview_list_description_c,
                "payroll_overview_created" => $this->payroll_overview_created,
                "payroll_overview_datetime" => $this->payroll_overview_datetime,
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
            $sql = "update {$this->tblPayrollOverview} set ";
            $sql .= "payroll_overview_list_title_a = :payroll_overview_list_title_a, ";
            $sql .= "payroll_overview_list_description_a = :payroll_overview_list_description_a, ";
            $sql .= "payroll_overview_list_title_b = :payroll_overview_list_title_b, ";
            $sql .= "payroll_overview_list_description_b = :payroll_overview_list_description_b, ";
            $sql .= "payroll_overview_list_title_c = :payroll_overview_list_title_c, ";
            $sql .= "payroll_overview_list_description_c = :payroll_overview_list_description_c, ";
            $sql .= "payroll_overview_datetime = :payroll_overview_datetime ";
            $sql .= "where payroll_overview_aid = :payroll_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_overview_list_title_a" => $this->payroll_overview_list_title_a,
                "payroll_overview_list_description_a" => $this->payroll_overview_list_description_a,
                "payroll_overview_list_title_b" => $this->payroll_overview_list_title_b,
                "payroll_overview_list_description_b" => $this->payroll_overview_list_description_b,
                "payroll_overview_list_title_c" => $this->payroll_overview_list_title_c,
                "payroll_overview_list_description_c" => $this->payroll_overview_list_description_c,
                "payroll_overview_datetime" => $this->payroll_overview_datetime,
                "payroll_overview_aid" => $this->payroll_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
