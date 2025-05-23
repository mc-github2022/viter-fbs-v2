<?php

class EnrollmentTitles
{
    public $enrollment_titles_aid;
    public $enrollment_titles_overview_subtitle;
    public $enrollment_titles_overview_title;
    public $enrollment_titles_packages_subtitle;
    public $enrollment_titles_packages_title;
    public $enrollment_titles_partners_subtitle;
    public $enrollment_titles_partners_title;
    public $enrollment_titles_testimonial_subtitle;
    public $enrollment_titles_testimonial_title;
    public $enrollment_titles_created;
    public $enrollment_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEnrollmentTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnrollmentTitles = "fbsv2_services_enrollment_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEnrollmentTitles} ";
            $sql .= "order by enrollment_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEnrollmentTitles}";
            $sql .= "(enrollment_titles_overview_subtitle, ";
            $sql .= "enrollment_titles_overview_title, ";
            $sql .= "enrollment_titles_created, ";
            $sql .= "enrollment_titles_datetime ) values ( ";
            $sql .= ":enrollment_titles_overview_subtitle, ";
            $sql .= ":enrollment_titles_overview_title, ";
            $sql .= ":enrollment_titles_created, ";
            $sql .= ":enrollment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_overview_subtitle" => $this->enrollment_titles_overview_subtitle,
                "enrollment_titles_overview_title" => $this->enrollment_titles_overview_title,
                "enrollment_titles_created" => $this->enrollment_titles_created,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
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
            $sql = "insert into {$this->tblEnrollmentTitles}";
            $sql .= "(enrollment_titles_packages_subtitle, ";
            $sql .= "enrollment_titles_packages_title, ";
            $sql .= "enrollment_titles_created, ";
            $sql .= "enrollment_titles_datetime ) values ( ";
            $sql .= ":enrollment_titles_packages_subtitle, ";
            $sql .= ":enrollment_titles_packages_title, ";
            $sql .= ":enrollment_titles_created, ";
            $sql .= ":enrollment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_packages_subtitle" => $this->enrollment_titles_packages_subtitle,
                "enrollment_titles_packages_title" => $this->enrollment_titles_packages_title,
                "enrollment_titles_created" => $this->enrollment_titles_created,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
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
            $sql = "insert into {$this->tblEnrollmentTitles}";
            $sql .= "(enrollment_titles_partners_subtitle, ";
            $sql .= "enrollment_titles_partners_title, ";
            $sql .= "enrollment_titles_created, ";
            $sql .= "enrollment_titles_datetime ) values ( ";
            $sql .= ":enrollment_titles_partners_subtitle, ";
            $sql .= ":enrollment_titles_partners_title, ";
            $sql .= ":enrollment_titles_created, ";
            $sql .= ":enrollment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_partners_subtitle" => $this->enrollment_titles_partners_subtitle,
                "enrollment_titles_partners_title" => $this->enrollment_titles_partners_title,
                "enrollment_titles_created" => $this->enrollment_titles_created,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
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
            $sql = "insert into {$this->tblEnrollmentTitles}";
            $sql .= "(enrollment_titles_testimonial_subtitle, ";
            $sql .= "enrollment_titles_testimonial_title, ";
            $sql .= "enrollment_titles_created, ";
            $sql .= "enrollment_titles_datetime ) values ( ";
            $sql .= ":enrollment_titles_testimonial_subtitle, ";
            $sql .= ":enrollment_titles_testimonial_title, ";
            $sql .= ":enrollment_titles_created, ";
            $sql .= ":enrollment_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_testimonial_subtitle" => $this->enrollment_titles_testimonial_subtitle,
                "enrollment_titles_testimonial_title" => $this->enrollment_titles_testimonial_title,
                "enrollment_titles_created" => $this->enrollment_titles_created,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
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
            $sql = "update {$this->tblEnrollmentTitles} set ";
            $sql .= "enrollment_titles_overview_subtitle = :enrollment_titles_overview_subtitle, ";
            $sql .= "enrollment_titles_overview_title = :enrollment_titles_overview_title, ";
            $sql .= "enrollment_titles_datetime = :enrollment_titles_datetime ";
            $sql .= "where enrollment_titles_aid = :enrollment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_overview_subtitle" => $this->enrollment_titles_overview_subtitle,
                "enrollment_titles_overview_title" => $this->enrollment_titles_overview_title,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
                "enrollment_titles_aid" => $this->enrollment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblEnrollmentTitles} set ";
            $sql .= "enrollment_titles_packages_subtitle = :enrollment_titles_packages_subtitle, ";
            $sql .= "enrollment_titles_packages_title = :enrollment_titles_packages_title, ";
            $sql .= "enrollment_titles_datetime = :enrollment_titles_datetime ";
            $sql .= "where enrollment_titles_aid = :enrollment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_packages_subtitle" => $this->enrollment_titles_packages_subtitle,
                "enrollment_titles_packages_title" => $this->enrollment_titles_packages_title,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
                "enrollment_titles_aid" => $this->enrollment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblEnrollmentTitles} set ";
            $sql .= "enrollment_titles_partners_subtitle = :enrollment_titles_partners_subtitle, ";
            $sql .= "enrollment_titles_partners_title = :enrollment_titles_partners_title, ";
            $sql .= "enrollment_titles_datetime = :enrollment_titles_datetime ";
            $sql .= "where enrollment_titles_aid = :enrollment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_partners_subtitle" => $this->enrollment_titles_partners_subtitle,
                "enrollment_titles_partners_title" => $this->enrollment_titles_partners_title,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
                "enrollment_titles_aid" => $this->enrollment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblEnrollmentTitles} set ";
            $sql .= "enrollment_titles_testimonial_subtitle = :enrollment_titles_testimonial_subtitle, ";
            $sql .= "enrollment_titles_testimonial_title = :enrollment_titles_testimonial_title, ";
            $sql .= "enrollment_titles_datetime = :enrollment_titles_datetime ";
            $sql .= "where enrollment_titles_aid = :enrollment_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_titles_testimonial_subtitle" => $this->enrollment_titles_testimonial_subtitle,
                "enrollment_titles_testimonial_title" => $this->enrollment_titles_testimonial_title,
                "enrollment_titles_datetime" => $this->enrollment_titles_datetime,
                "enrollment_titles_aid" => $this->enrollment_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
