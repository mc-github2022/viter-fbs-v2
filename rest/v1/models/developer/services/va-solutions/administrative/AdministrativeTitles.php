<?php

class AdministrativeTitles
{
    public $administrative_titles_aid;
    public $administrative_titles_packages_subtitle;
    public $administrative_titles_packages_title;
    public $administrative_titles_partners_subtitle;
    public $administrative_titles_partners_title;
    public $administrative_titles_testimonial_subtitle;
    public $administrative_titles_testimonial_title;
    public $administrative_titles_created;
    public $administrative_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAdministrativeTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdministrativeTitles = "fbsv2_services_administrative_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAdministrativeTitles} ";
            $sql .= "order by administrative_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function createPackagesTitle()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeTitles}";
            $sql .= "(administrative_titles_packages_subtitle, ";
            $sql .= "administrative_titles_packages_title, ";
            $sql .= "administrative_titles_created, ";
            $sql .= "administrative_titles_datetime ) values ( ";
            $sql .= ":administrative_titles_packages_subtitle, ";
            $sql .= ":administrative_titles_packages_title, ";
            $sql .= ":administrative_titles_created, ";
            $sql .= ":administrative_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_packages_subtitle" => $this->administrative_titles_packages_subtitle,
                "administrative_titles_packages_title" => $this->administrative_titles_packages_title,
                "administrative_titles_created" => $this->administrative_titles_created,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
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
            $sql = "insert into {$this->tblAdministrativeTitles}";
            $sql .= "(administrative_titles_partners_subtitle, ";
            $sql .= "administrative_titles_partners_title, ";
            $sql .= "administrative_titles_created, ";
            $sql .= "administrative_titles_datetime ) values ( ";
            $sql .= ":administrative_titles_partners_subtitle, ";
            $sql .= ":administrative_titles_partners_title, ";
            $sql .= ":administrative_titles_created, ";
            $sql .= ":administrative_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_partners_subtitle" => $this->administrative_titles_partners_subtitle,
                "administrative_titles_partners_title" => $this->administrative_titles_partners_title,
                "administrative_titles_created" => $this->administrative_titles_created,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
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
            $sql = "insert into {$this->tblAdministrativeTitles}";
            $sql .= "(administrative_titles_testimonial_subtitle, ";
            $sql .= "administrative_titles_testimonial_title, ";
            $sql .= "administrative_titles_created, ";
            $sql .= "administrative_titles_datetime ) values ( ";
            $sql .= ":administrative_titles_testimonial_subtitle, ";
            $sql .= ":administrative_titles_testimonial_title, ";
            $sql .= ":administrative_titles_created, ";
            $sql .= ":administrative_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_testimonial_subtitle" => $this->administrative_titles_testimonial_subtitle,
                "administrative_titles_testimonial_title" => $this->administrative_titles_testimonial_title,
                "administrative_titles_created" => $this->administrative_titles_created,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
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
            $sql = "update {$this->tblAdministrativeTitles} set ";
            $sql .= "administrative_titles_packages_subtitle = :administrative_titles_packages_subtitle, ";
            $sql .= "administrative_titles_packages_title = :administrative_titles_packages_title, ";
            $sql .= "administrative_titles_datetime = :administrative_titles_datetime ";
            $sql .= "where administrative_titles_aid = :administrative_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_packages_subtitle" => $this->administrative_titles_packages_subtitle,
                "administrative_titles_packages_title" => $this->administrative_titles_packages_title,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
                "administrative_titles_aid" => $this->administrative_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblAdministrativeTitles} set ";
            $sql .= "administrative_titles_partners_subtitle = :administrative_titles_partners_subtitle, ";
            $sql .= "administrative_titles_partners_title = :administrative_titles_partners_title, ";
            $sql .= "administrative_titles_datetime = :administrative_titles_datetime ";
            $sql .= "where administrative_titles_aid = :administrative_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_partners_subtitle" => $this->administrative_titles_partners_subtitle,
                "administrative_titles_partners_title" => $this->administrative_titles_partners_title,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
                "administrative_titles_aid" => $this->administrative_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblAdministrativeTitles} set ";
            $sql .= "administrative_titles_testimonial_subtitle = :administrative_titles_testimonial_subtitle, ";
            $sql .= "administrative_titles_testimonial_title = :administrative_titles_testimonial_title, ";
            $sql .= "administrative_titles_datetime = :administrative_titles_datetime ";
            $sql .= "where administrative_titles_aid = :administrative_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_titles_testimonial_subtitle" => $this->administrative_titles_testimonial_subtitle,
                "administrative_titles_testimonial_title" => $this->administrative_titles_testimonial_title,
                "administrative_titles_datetime" => $this->administrative_titles_datetime,
                "administrative_titles_aid" => $this->administrative_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
