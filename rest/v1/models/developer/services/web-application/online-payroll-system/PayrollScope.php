<?php

class PayrollScope
{
    public $payroll_scope_aid;
    public $payroll_scope_title;
    public $payroll_scope_desc;
    public $payroll_scope_img;
    public $payroll_scope_created;
    public $payroll_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPayrollScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPayrollScope = "fbsv2_services_payroll_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPayrollScope} ";
            $sql .= "order by payroll_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPayrollScope}";
            $sql .= "(payroll_scope_title, ";
            $sql .= "payroll_scope_desc, ";
            $sql .= "payroll_scope_img, ";
            $sql .= "payroll_scope_created, ";
            $sql .= "payroll_scope_datetime ) values ( ";
            $sql .= ":payroll_scope_title, ";
            $sql .= ":payroll_scope_desc, ";
            $sql .= ":payroll_scope_img, ";
            $sql .= ":payroll_scope_created, ";
            $sql .= ":payroll_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_scope_title" => $this->payroll_scope_title,
                "payroll_scope_desc" => $this->payroll_scope_desc,
                "payroll_scope_img" => $this->payroll_scope_img,
                "payroll_scope_created" => $this->payroll_scope_created,
                "payroll_scope_datetime" => $this->payroll_scope_datetime,
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
            $sql = "update {$this->tblPayrollScope} set ";
            $sql .= "payroll_scope_title = :payroll_scope_title, ";
            $sql .= "payroll_scope_desc = :payroll_scope_desc, ";
            $sql .= "payroll_scope_img = :payroll_scope_img, ";
            $sql .= "payroll_scope_datetime = :payroll_scope_datetime ";
            $sql .= "where payroll_scope_aid = :payroll_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_scope_title" => $this->payroll_scope_title,
                "payroll_scope_desc" => $this->payroll_scope_desc,
                "payroll_scope_img" => $this->payroll_scope_img,
                "payroll_scope_datetime" => $this->payroll_scope_datetime,
                "payroll_scope_aid" => $this->payroll_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPayrollScope} ";
            $sql .= "where payroll_scope_aid = :payroll_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_scope_aid" => $this->payroll_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
