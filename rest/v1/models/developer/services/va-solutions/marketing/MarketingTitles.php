<?php

class MarketingTitles
{
    public $marketing_titles_aid;
    public $marketing_titles_packages_subtitle;
    public $marketing_titles_packages_title;
    public $marketing_titles_partners_subtitle;
    public $marketing_titles_partners_title;
    public $marketing_titles_testimonial_subtitle;
    public $marketing_titles_testimonial_title;
    public $marketing_titles_created;
    public $marketing_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblMarketingTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMarketingTitles = "fbsv2_services_marketing_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblMarketingTitles} ";
            $sql .= "order by marketing_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function createPackagesTitle()
    {
        try {
            $sql = "insert into {$this->tblMarketingTitles}";
            $sql .= "(marketing_titles_packages_subtitle, ";
            $sql .= "marketing_titles_packages_title, ";
            $sql .= "marketing_titles_created, ";
            $sql .= "marketing_titles_datetime ) values ( ";
            $sql .= ":marketing_titles_packages_subtitle, ";
            $sql .= ":marketing_titles_packages_title, ";
            $sql .= ":marketing_titles_created, ";
            $sql .= ":marketing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_packages_subtitle" => $this->marketing_titles_packages_subtitle,
                "marketing_titles_packages_title" => $this->marketing_titles_packages_title,
                "marketing_titles_created" => $this->marketing_titles_created,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
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
            $sql = "insert into {$this->tblMarketingTitles}";
            $sql .= "(marketing_titles_partners_subtitle, ";
            $sql .= "marketing_titles_partners_title, ";
            $sql .= "marketing_titles_created, ";
            $sql .= "marketing_titles_datetime ) values ( ";
            $sql .= ":marketing_titles_partners_subtitle, ";
            $sql .= ":marketing_titles_partners_title, ";
            $sql .= ":marketing_titles_created, ";
            $sql .= ":marketing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_partners_subtitle" => $this->marketing_titles_partners_subtitle,
                "marketing_titles_partners_title" => $this->marketing_titles_partners_title,
                "marketing_titles_created" => $this->marketing_titles_created,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
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
            $sql = "insert into {$this->tblMarketingTitles}";
            $sql .= "(marketing_titles_testimonial_subtitle, ";
            $sql .= "marketing_titles_testimonial_title, ";
            $sql .= "marketing_titles_created, ";
            $sql .= "marketing_titles_datetime ) values ( ";
            $sql .= ":marketing_titles_testimonial_subtitle, ";
            $sql .= ":marketing_titles_testimonial_title, ";
            $sql .= ":marketing_titles_created, ";
            $sql .= ":marketing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_testimonial_subtitle" => $this->marketing_titles_testimonial_subtitle,
                "marketing_titles_testimonial_title" => $this->marketing_titles_testimonial_title,
                "marketing_titles_created" => $this->marketing_titles_created,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblMarketingTitles} set ";
            $sql .= "marketing_titles_packages_subtitle = :marketing_titles_packages_subtitle, ";
            $sql .= "marketing_titles_packages_title = :marketing_titles_packages_title, ";
            $sql .= "marketing_titles_datetime = :marketing_titles_datetime ";
            $sql .= "where marketing_titles_aid = :marketing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_packages_subtitle" => $this->marketing_titles_packages_subtitle,
                "marketing_titles_packages_title" => $this->marketing_titles_packages_title,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
                "marketing_titles_aid" => $this->marketing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblMarketingTitles} set ";
            $sql .= "marketing_titles_partners_subtitle = :marketing_titles_partners_subtitle, ";
            $sql .= "marketing_titles_partners_title = :marketing_titles_partners_title, ";
            $sql .= "marketing_titles_datetime = :marketing_titles_datetime ";
            $sql .= "where marketing_titles_aid = :marketing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_partners_subtitle" => $this->marketing_titles_partners_subtitle,
                "marketing_titles_partners_title" => $this->marketing_titles_partners_title,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
                "marketing_titles_aid" => $this->marketing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblMarketingTitles} set ";
            $sql .= "marketing_titles_testimonial_subtitle = :marketing_titles_testimonial_subtitle, ";
            $sql .= "marketing_titles_testimonial_title = :marketing_titles_testimonial_title, ";
            $sql .= "marketing_titles_datetime = :marketing_titles_datetime ";
            $sql .= "where marketing_titles_aid = :marketing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_titles_testimonial_subtitle" => $this->marketing_titles_testimonial_subtitle,
                "marketing_titles_testimonial_title" => $this->marketing_titles_testimonial_title,
                "marketing_titles_datetime" => $this->marketing_titles_datetime,
                "marketing_titles_aid" => $this->marketing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
