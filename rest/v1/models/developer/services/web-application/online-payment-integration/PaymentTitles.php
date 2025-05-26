<?php

class PaymentTitles
{
    public $payment_titles_aid;
    public $payment_titles_overview_subtitle;
    public $payment_titles_overview_title;
    public $payment_titles_packages_subtitle;
    public $payment_titles_packages_title;
    public $payment_titles_partners_subtitle;
    public $payment_titles_partners_title;
    public $payment_titles_testimonial_subtitle;
    public $payment_titles_testimonial_title;
    public $payment_titles_created;
    public $payment_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblPaymentTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPaymentTitles = "fbsv2_services_payment_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPaymentTitles} ";
            $sql .= "order by payment_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPaymentTitles}";
            $sql .= "(payment_titles_overview_subtitle, ";
            $sql .= "payment_titles_overview_title, ";
            $sql .= "payment_titles_created, ";
            $sql .= "payment_titles_datetime ) values ( ";
            $sql .= ":payment_titles_overview_subtitle, ";
            $sql .= ":payment_titles_overview_title, ";
            $sql .= ":payment_titles_created, ";
            $sql .= ":payment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_overview_subtitle" => $this->payment_titles_overview_subtitle,
                "payment_titles_overview_title" => $this->payment_titles_overview_title,
                "payment_titles_created" => $this->payment_titles_created,
                "payment_titles_datetime" => $this->payment_titles_datetime,
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
            $sql = "insert into {$this->tblPaymentTitles}";
            $sql .= "(payment_titles_packages_subtitle, ";
            $sql .= "payment_titles_packages_title, ";
            $sql .= "payment_titles_created, ";
            $sql .= "payment_titles_datetime ) values ( ";
            $sql .= ":payment_titles_packages_subtitle, ";
            $sql .= ":payment_titles_packages_title, ";
            $sql .= ":payment_titles_created, ";
            $sql .= ":payment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_packages_subtitle" => $this->payment_titles_packages_subtitle,
                "payment_titles_packages_title" => $this->payment_titles_packages_title,
                "payment_titles_created" => $this->payment_titles_created,
                "payment_titles_datetime" => $this->payment_titles_datetime,
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
            $sql = "insert into {$this->tblPaymentTitles}";
            $sql .= "(payment_titles_partners_subtitle, ";
            $sql .= "payment_titles_partners_title, ";
            $sql .= "payment_titles_created, ";
            $sql .= "payment_titles_datetime ) values ( ";
            $sql .= ":payment_titles_partners_subtitle, ";
            $sql .= ":payment_titles_partners_title, ";
            $sql .= ":payment_titles_created, ";
            $sql .= ":payment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_partners_subtitle" => $this->payment_titles_partners_subtitle,
                "payment_titles_partners_title" => $this->payment_titles_partners_title,
                "payment_titles_created" => $this->payment_titles_created,
                "payment_titles_datetime" => $this->payment_titles_datetime,
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
            $sql = "insert into {$this->tblPaymentTitles}";
            $sql .= "(payment_titles_testimonial_subtitle, ";
            $sql .= "payment_titles_testimonial_title, ";
            $sql .= "payment_titles_created, ";
            $sql .= "payment_titles_datetime ) values ( ";
            $sql .= ":payment_titles_testimonial_subtitle, ";
            $sql .= ":payment_titles_testimonial_title, ";
            $sql .= ":payment_titles_created, ";
            $sql .= ":payment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_testimonial_subtitle" => $this->payment_titles_testimonial_subtitle,
                "payment_titles_testimonial_title" => $this->payment_titles_testimonial_title,
                "payment_titles_created" => $this->payment_titles_created,
                "payment_titles_datetime" => $this->payment_titles_datetime,
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
            $sql = "update {$this->tblPaymentTitles} set ";
            $sql .= "payment_titles_overview_subtitle = :payment_titles_overview_subtitle, ";
            $sql .= "payment_titles_overview_title = :payment_titles_overview_title, ";
            $sql .= "payment_titles_datetime = :payment_titles_datetime ";
            $sql .= "where payment_titles_aid = :payment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_overview_subtitle" => $this->payment_titles_overview_subtitle,
                "payment_titles_overview_title" => $this->payment_titles_overview_title,
                "payment_titles_datetime" => $this->payment_titles_datetime,
                "payment_titles_aid" => $this->payment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblPaymentTitles} set ";
            $sql .= "payment_titles_packages_subtitle = :payment_titles_packages_subtitle, ";
            $sql .= "payment_titles_packages_title = :payment_titles_packages_title, ";
            $sql .= "payment_titles_datetime = :payment_titles_datetime ";
            $sql .= "where payment_titles_aid = :payment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_packages_subtitle" => $this->payment_titles_packages_subtitle,
                "payment_titles_packages_title" => $this->payment_titles_packages_title,
                "payment_titles_datetime" => $this->payment_titles_datetime,
                "payment_titles_aid" => $this->payment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblPaymentTitles} set ";
            $sql .= "payment_titles_partners_subtitle = :payment_titles_partners_subtitle, ";
            $sql .= "payment_titles_partners_title = :payment_titles_partners_title, ";
            $sql .= "payment_titles_datetime = :payment_titles_datetime ";
            $sql .= "where payment_titles_aid = :payment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_partners_subtitle" => $this->payment_titles_partners_subtitle,
                "payment_titles_partners_title" => $this->payment_titles_partners_title,
                "payment_titles_datetime" => $this->payment_titles_datetime,
                "payment_titles_aid" => $this->payment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblPaymentTitles} set ";
            $sql .= "payment_titles_testimonial_subtitle = :payment_titles_testimonial_subtitle, ";
            $sql .= "payment_titles_testimonial_title = :payment_titles_testimonial_title, ";
            $sql .= "payment_titles_datetime = :payment_titles_datetime ";
            $sql .= "where payment_titles_aid = :payment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "payment_titles_testimonial_subtitle" => $this->payment_titles_testimonial_subtitle,
                "payment_titles_testimonial_title" => $this->payment_titles_testimonial_title,
                "payment_titles_datetime" => $this->payment_titles_datetime,
                "payment_titles_aid" => $this->payment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
