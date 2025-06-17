<?php

class BusinessTitles
{
    public $business_titles_aid;
    public $business_titles_packages_subtitle;
    public $business_titles_packages_title;
    public $business_titles_partners_subtitle;
    public $business_titles_partners_title;
    public $business_titles_testimonial_subtitle;
    public $business_titles_testimonial_title;
    public $business_titles_created;
    public $business_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBusinessTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBusinessTitles = "fbsv2_services_business_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBusinessTitles} ";
            $sql .= "order by business_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function createPackagesTitle()
    {
        try {
            $sql = "insert into {$this->tblBusinessTitles}";
            $sql .= "(business_titles_packages_subtitle, ";
            $sql .= "business_titles_packages_title, ";
            $sql .= "business_titles_created, ";
            $sql .= "business_titles_datetime ) values ( ";
            $sql .= ":business_titles_packages_subtitle, ";
            $sql .= ":business_titles_packages_title, ";
            $sql .= ":business_titles_created, ";
            $sql .= ":business_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_packages_subtitle" => $this->business_titles_packages_subtitle,
                "business_titles_packages_title" => $this->business_titles_packages_title,
                "business_titles_created" => $this->business_titles_created,
                "business_titles_datetime" => $this->business_titles_datetime,
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
            $sql = "insert into {$this->tblBusinessTitles}";
            $sql .= "(business_titles_partners_subtitle, ";
            $sql .= "business_titles_partners_title, ";
            $sql .= "business_titles_created, ";
            $sql .= "business_titles_datetime ) values ( ";
            $sql .= ":business_titles_partners_subtitle, ";
            $sql .= ":business_titles_partners_title, ";
            $sql .= ":business_titles_created, ";
            $sql .= ":business_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_partners_subtitle" => $this->business_titles_partners_subtitle,
                "business_titles_partners_title" => $this->business_titles_partners_title,
                "business_titles_created" => $this->business_titles_created,
                "business_titles_datetime" => $this->business_titles_datetime,
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
            $sql = "insert into {$this->tblBusinessTitles}";
            $sql .= "(business_titles_testimonial_subtitle, ";
            $sql .= "business_titles_testimonial_title, ";
            $sql .= "business_titles_created, ";
            $sql .= "business_titles_datetime ) values ( ";
            $sql .= ":business_titles_testimonial_subtitle, ";
            $sql .= ":business_titles_testimonial_title, ";
            $sql .= ":business_titles_created, ";
            $sql .= ":business_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_testimonial_subtitle" => $this->business_titles_testimonial_subtitle,
                "business_titles_testimonial_title" => $this->business_titles_testimonial_title,
                "business_titles_created" => $this->business_titles_created,
                "business_titles_datetime" => $this->business_titles_datetime,
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
            $sql = "update {$this->tblBusinessTitles} set ";
            $sql .= "business_titles_packages_subtitle = :business_titles_packages_subtitle, ";
            $sql .= "business_titles_packages_title = :business_titles_packages_title, ";
            $sql .= "business_titles_datetime = :business_titles_datetime ";
            $sql .= "where business_titles_aid = :business_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_packages_subtitle" => $this->business_titles_packages_subtitle,
                "business_titles_packages_title" => $this->business_titles_packages_title,
                "business_titles_datetime" => $this->business_titles_datetime,
                "business_titles_aid" => $this->business_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblBusinessTitles} set ";
            $sql .= "business_titles_partners_subtitle = :business_titles_partners_subtitle, ";
            $sql .= "business_titles_partners_title = :business_titles_partners_title, ";
            $sql .= "business_titles_datetime = :business_titles_datetime ";
            $sql .= "where business_titles_aid = :business_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_partners_subtitle" => $this->business_titles_partners_subtitle,
                "business_titles_partners_title" => $this->business_titles_partners_title,
                "business_titles_datetime" => $this->business_titles_datetime,
                "business_titles_aid" => $this->business_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblBusinessTitles} set ";
            $sql .= "business_titles_testimonial_subtitle = :business_titles_testimonial_subtitle, ";
            $sql .= "business_titles_testimonial_title = :business_titles_testimonial_title, ";
            $sql .= "business_titles_datetime = :business_titles_datetime ";
            $sql .= "where business_titles_aid = :business_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_titles_testimonial_subtitle" => $this->business_titles_testimonial_subtitle,
                "business_titles_testimonial_title" => $this->business_titles_testimonial_title,
                "business_titles_datetime" => $this->business_titles_datetime,
                "business_titles_aid" => $this->business_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
