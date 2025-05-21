<?php

class HrisTitles
{
    public $hris_titles_aid;
    public $hris_titles_overview_subtitle;
    public $hris_titles_overview_title;
    public $hris_titles_packages_subtitle;
    public $hris_titles_packages_title;
    public $hris_titles_partners_subtitle;
    public $hris_titles_partners_title;
    public $hris_titles_testimonial_subtitle;
    public $hris_titles_testimonial_title;
    public $hris_titles_created;
    public $hris_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHrisTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHrisTitles = "fbsv2_services_hris_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHrisTitles} ";
            $sql .= "order by hris_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHrisTitles}";
            $sql .= "(hris_titles_overview_subtitle, ";
            $sql .= "hris_titles_overview_title, ";
            $sql .= "hris_titles_created, ";
            $sql .= "hris_titles_datetime ) values ( ";
            $sql .= ":hris_titles_overview_subtitle, ";
            $sql .= ":hris_titles_overview_title, ";
            $sql .= ":hris_titles_created, ";
            $sql .= ":hris_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_overview_subtitle" => $this->hris_titles_overview_subtitle,
                "hris_titles_overview_title" => $this->hris_titles_overview_title,
                "hris_titles_created" => $this->hris_titles_created,
                "hris_titles_datetime" => $this->hris_titles_datetime,
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
            $sql = "insert into {$this->tblHrisTitles}";
            $sql .= "(hris_titles_packages_subtitle, ";
            $sql .= "hris_titles_packages_title, ";
            $sql .= "hris_titles_created, ";
            $sql .= "hris_titles_datetime ) values ( ";
            $sql .= ":hris_titles_packages_subtitle, ";
            $sql .= ":hris_titles_packages_title, ";
            $sql .= ":hris_titles_created, ";
            $sql .= ":hris_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_packages_subtitle" => $this->hris_titles_packages_subtitle,
                "hris_titles_packages_title" => $this->hris_titles_packages_title,
                "hris_titles_created" => $this->hris_titles_created,
                "hris_titles_datetime" => $this->hris_titles_datetime,
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
            $sql = "insert into {$this->tblHrisTitles}";
            $sql .= "(hris_titles_partners_subtitle, ";
            $sql .= "hris_titles_partners_title, ";
            $sql .= "hris_titles_created, ";
            $sql .= "hris_titles_datetime ) values ( ";
            $sql .= ":hris_titles_partners_subtitle, ";
            $sql .= ":hris_titles_partners_title, ";
            $sql .= ":hris_titles_created, ";
            $sql .= ":hris_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_partners_subtitle" => $this->hris_titles_partners_subtitle,
                "hris_titles_partners_title" => $this->hris_titles_partners_title,
                "hris_titles_created" => $this->hris_titles_created,
                "hris_titles_datetime" => $this->hris_titles_datetime,
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
            $sql = "insert into {$this->tblHrisTitles}";
            $sql .= "(hris_titles_testimonial_subtitle, ";
            $sql .= "hris_titles_testimonial_title, ";
            $sql .= "hris_titles_created, ";
            $sql .= "hris_titles_datetime ) values ( ";
            $sql .= ":hris_titles_testimonial_subtitle, ";
            $sql .= ":hris_titles_testimonial_title, ";
            $sql .= ":hris_titles_created, ";
            $sql .= ":hris_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_testimonial_subtitle" => $this->hris_titles_testimonial_subtitle,
                "hris_titles_testimonial_title" => $this->hris_titles_testimonial_title,
                "hris_titles_created" => $this->hris_titles_created,
                "hris_titles_datetime" => $this->hris_titles_datetime,
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
            $sql = "update {$this->tblHrisTitles} set ";
            $sql .= "hris_titles_overview_subtitle = :hris_titles_overview_subtitle, ";
            $sql .= "hris_titles_overview_title = :hris_titles_overview_title, ";
            $sql .= "hris_titles_datetime = :hris_titles_datetime ";
            $sql .= "where hris_titles_aid = :hris_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_overview_subtitle" => $this->hris_titles_overview_subtitle,
                "hris_titles_overview_title" => $this->hris_titles_overview_title,
                "hris_titles_datetime" => $this->hris_titles_datetime,
                "hris_titles_aid" => $this->hris_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblHrisTitles} set ";
            $sql .= "hris_titles_packages_subtitle = :hris_titles_packages_subtitle, ";
            $sql .= "hris_titles_packages_title = :hris_titles_packages_title, ";
            $sql .= "hris_titles_datetime = :hris_titles_datetime ";
            $sql .= "where hris_titles_aid = :hris_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_packages_subtitle" => $this->hris_titles_packages_subtitle,
                "hris_titles_packages_title" => $this->hris_titles_packages_title,
                "hris_titles_datetime" => $this->hris_titles_datetime,
                "hris_titles_aid" => $this->hris_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblHrisTitles} set ";
            $sql .= "hris_titles_partners_subtitle = :hris_titles_partners_subtitle, ";
            $sql .= "hris_titles_partners_title = :hris_titles_partners_title, ";
            $sql .= "hris_titles_datetime = :hris_titles_datetime ";
            $sql .= "where hris_titles_aid = :hris_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_partners_subtitle" => $this->hris_titles_partners_subtitle,
                "hris_titles_partners_title" => $this->hris_titles_partners_title,
                "hris_titles_datetime" => $this->hris_titles_datetime,
                "hris_titles_aid" => $this->hris_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblHrisTitles} set ";
            $sql .= "hris_titles_testimonial_subtitle = :hris_titles_testimonial_subtitle, ";
            $sql .= "hris_titles_testimonial_title = :hris_titles_testimonial_title, ";
            $sql .= "hris_titles_datetime = :hris_titles_datetime ";
            $sql .= "where hris_titles_aid = :hris_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_titles_testimonial_subtitle" => $this->hris_titles_testimonial_subtitle,
                "hris_titles_testimonial_title" => $this->hris_titles_testimonial_title,
                "hris_titles_datetime" => $this->hris_titles_datetime,
                "hris_titles_aid" => $this->hris_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
