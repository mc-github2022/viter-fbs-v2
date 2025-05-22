<?php

class PayrollTitles
{
    public $payroll_titles_aid;
    public $payroll_titles_overview_subtitle;
    public $payroll_titles_overview_title;
    public $payroll_titles_packages_subtitle;
    public $payroll_titles_packages_title;
    public $payroll_titles_partners_subtitle;
    public $payroll_titles_partners_title;
    public $payroll_titles_testimonial_subtitle;
    public $payroll_titles_testimonial_title;
    public $payroll_titles_created;
    public $payroll_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPayrollTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPayrollTitles = "fbsv2_services_payroll_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPayrollTitles} ";
            $sql .= "order by payroll_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPayrollTitles}";
            $sql .= "(payroll_titles_overview_subtitle, ";
            $sql .= "payroll_titles_overview_title, ";
            $sql .= "payroll_titles_created, ";
            $sql .= "payroll_titles_datetime ) values ( ";
            $sql .= ":payroll_titles_overview_subtitle, ";
            $sql .= ":payroll_titles_overview_title, ";
            $sql .= ":payroll_titles_created, ";
            $sql .= ":payroll_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_overview_subtitle" => $this->payroll_titles_overview_subtitle,
                "payroll_titles_overview_title" => $this->payroll_titles_overview_title,
                "payroll_titles_created" => $this->payroll_titles_created,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
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
            $sql = "insert into {$this->tblPayrollTitles}";
            $sql .= "(payroll_titles_packages_subtitle, ";
            $sql .= "payroll_titles_packages_title, ";
            $sql .= "payroll_titles_created, ";
            $sql .= "payroll_titles_datetime ) values ( ";
            $sql .= ":payroll_titles_packages_subtitle, ";
            $sql .= ":payroll_titles_packages_title, ";
            $sql .= ":payroll_titles_created, ";
            $sql .= ":payroll_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_packages_subtitle" => $this->payroll_titles_packages_subtitle,
                "payroll_titles_packages_title" => $this->payroll_titles_packages_title,
                "payroll_titles_created" => $this->payroll_titles_created,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPartnersTitle()
    {
        try {
            $sql = "insert into {$this->tblPayrollTitles}";
            $sql .= "(payroll_titles_partners_subtitle, ";
            $sql .= "payroll_titles_partners_title, ";
            $sql .= "payroll_titles_created, ";
            $sql .= "payroll_titles_datetime ) values ( ";
            $sql .= ":payroll_titles_partners_subtitle, ";
            $sql .= ":payroll_titles_partners_title, ";
            $sql .= ":payroll_titles_created, ";
            $sql .= ":payroll_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_partners_subtitle" => $this->payroll_titles_partners_subtitle,
                "payroll_titles_partners_title" => $this->payroll_titles_partners_title,
                "payroll_titles_created" => $this->payroll_titles_created,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createTestimonialTitle()
    {
        try {
            $sql = "insert into {$this->tblPayrollTitles}";
            $sql .= "(payroll_titles_testimonial_subtitle, ";
            $sql .= "payroll_titles_testimonial_title, ";
            $sql .= "payroll_titles_created, ";
            $sql .= "payroll_titles_datetime ) values ( ";
            $sql .= ":payroll_titles_testimonial_subtitle, ";
            $sql .= ":payroll_titles_testimonial_title, ";
            $sql .= ":payroll_titles_created, ";
            $sql .= ":payroll_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_testimonial_subtitle" => $this->payroll_titles_testimonial_subtitle,
                "payroll_titles_testimonial_title" => $this->payroll_titles_testimonial_title,
                "payroll_titles_created" => $this->payroll_titles_created,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
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
            $sql = "update {$this->tblPayrollTitles} set ";
            $sql .= "payroll_titles_overview_subtitle = :payroll_titles_overview_subtitle, ";
            $sql .= "payroll_titles_overview_title = :payroll_titles_overview_title, ";
            $sql .= "payroll_titles_datetime = :payroll_titles_datetime ";
            $sql .= "where payroll_titles_aid = :payroll_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_overview_subtitle" => $this->payroll_titles_overview_subtitle,
                "payroll_titles_overview_title" => $this->payroll_titles_overview_title,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
                "payroll_titles_aid" => $this->payroll_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblPayrollTitles} set ";
            $sql .= "payroll_titles_packages_subtitle = :payroll_titles_packages_subtitle, ";
            $sql .= "payroll_titles_packages_title = :payroll_titles_packages_title, ";
            $sql .= "payroll_titles_datetime = :payroll_titles_datetime ";
            $sql .= "where payroll_titles_aid = :payroll_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_packages_subtitle" => $this->payroll_titles_packages_subtitle,
                "payroll_titles_packages_title" => $this->payroll_titles_packages_title,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
                "payroll_titles_aid" => $this->payroll_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblPayrollTitles} set ";
            $sql .= "payroll_titles_partners_subtitle = :payroll_titles_partners_subtitle, ";
            $sql .= "payroll_titles_partners_title = :payroll_titles_partners_title, ";
            $sql .= "payroll_titles_datetime = :payroll_titles_datetime ";
            $sql .= "where payroll_titles_aid = :payroll_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_partners_subtitle" => $this->payroll_titles_partners_subtitle,
                "payroll_titles_partners_title" => $this->payroll_titles_partners_title,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
                "payroll_titles_aid" => $this->payroll_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblPayrollTitles} set ";
            $sql .= "payroll_titles_testimonial_subtitle = :payroll_titles_testimonial_subtitle, ";
            $sql .= "payroll_titles_testimonial_title = :payroll_titles_testimonial_title, ";
            $sql .= "payroll_titles_datetime = :payroll_titles_datetime ";
            $sql .= "where payroll_titles_aid = :payroll_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payroll_titles_testimonial_subtitle" => $this->payroll_titles_testimonial_subtitle,
                "payroll_titles_testimonial_title" => $this->payroll_titles_testimonial_title,
                "payroll_titles_datetime" => $this->payroll_titles_datetime,
                "payroll_titles_aid" => $this->payroll_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
