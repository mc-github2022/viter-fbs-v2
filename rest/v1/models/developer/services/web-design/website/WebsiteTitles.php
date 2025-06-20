<?php

class WebsiteTitles
{
    public $website_titles_aid;
    public $website_titles_overview_subtitle;
    public $website_titles_overview_title;
    public $website_titles_packages_subtitle;
    public $website_titles_packages_title;
    public $website_titles_partners_subtitle;
    public $website_titles_partners_title;
    public $website_titles_testimonial_subtitle;
    public $website_titles_testimonial_title;
    public $website_titles_created;
    public $website_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWebsiteTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebsiteTitles = "fbsv2_services_website_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWebsiteTitles} ";
            $sql .= "order by website_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebsiteTitles}";
            $sql .= "(website_titles_overview_subtitle, ";
            $sql .= "website_titles_overview_title, ";
            $sql .= "website_titles_created, ";
            $sql .= "website_titles_datetime ) values ( ";
            $sql .= ":website_titles_overview_subtitle, ";
            $sql .= ":website_titles_overview_title, ";
            $sql .= ":website_titles_created, ";
            $sql .= ":website_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_overview_subtitle" => $this->website_titles_overview_subtitle,
                "website_titles_overview_title" => $this->website_titles_overview_title,
                "website_titles_created" => $this->website_titles_created,
                "website_titles_datetime" => $this->website_titles_datetime,
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
            $sql = "insert into {$this->tblWebsiteTitles}";
            $sql .= "(website_titles_packages_subtitle, ";
            $sql .= "website_titles_packages_title, ";
            $sql .= "website_titles_created, ";
            $sql .= "website_titles_datetime ) values ( ";
            $sql .= ":website_titles_packages_subtitle, ";
            $sql .= ":website_titles_packages_title, ";
            $sql .= ":website_titles_created, ";
            $sql .= ":website_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_packages_subtitle" => $this->website_titles_packages_subtitle,
                "website_titles_packages_title" => $this->website_titles_packages_title,
                "website_titles_created" => $this->website_titles_created,
                "website_titles_datetime" => $this->website_titles_datetime,
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
            $sql = "insert into {$this->tblWebsiteTitles}";
            $sql .= "(website_titles_partners_subtitle, ";
            $sql .= "website_titles_partners_title, ";
            $sql .= "website_titles_created, ";
            $sql .= "website_titles_datetime ) values ( ";
            $sql .= ":website_titles_partners_subtitle, ";
            $sql .= ":website_titles_partners_title, ";
            $sql .= ":website_titles_created, ";
            $sql .= ":website_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_partners_subtitle" => $this->website_titles_partners_subtitle,
                "website_titles_partners_title" => $this->website_titles_partners_title,
                "website_titles_created" => $this->website_titles_created,
                "website_titles_datetime" => $this->website_titles_datetime,
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
            $sql = "insert into {$this->tblWebsiteTitles}";
            $sql .= "(website_titles_testimonial_subtitle, ";
            $sql .= "website_titles_testimonial_title, ";
            $sql .= "website_titles_created, ";
            $sql .= "website_titles_datetime ) values ( ";
            $sql .= ":website_titles_testimonial_subtitle, ";
            $sql .= ":website_titles_testimonial_title, ";
            $sql .= ":website_titles_created, ";
            $sql .= ":website_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_testimonial_subtitle" => $this->website_titles_testimonial_subtitle,
                "website_titles_testimonial_title" => $this->website_titles_testimonial_title,
                "website_titles_created" => $this->website_titles_created,
                "website_titles_datetime" => $this->website_titles_datetime,
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
            $sql = "update {$this->tblWebsiteTitles} set ";
            $sql .= "website_titles_overview_subtitle = :website_titles_overview_subtitle, ";
            $sql .= "website_titles_overview_title = :website_titles_overview_title, ";
            $sql .= "website_titles_datetime = :website_titles_datetime ";
            $sql .= "where website_titles_aid = :website_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_overview_subtitle" => $this->website_titles_overview_subtitle,
                "website_titles_overview_title" => $this->website_titles_overview_title,
                "website_titles_datetime" => $this->website_titles_datetime,
                "website_titles_aid" => $this->website_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblWebsiteTitles} set ";
            $sql .= "website_titles_packages_subtitle = :website_titles_packages_subtitle, ";
            $sql .= "website_titles_packages_title = :website_titles_packages_title, ";
            $sql .= "website_titles_datetime = :website_titles_datetime ";
            $sql .= "where website_titles_aid = :website_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_packages_subtitle" => $this->website_titles_packages_subtitle,
                "website_titles_packages_title" => $this->website_titles_packages_title,
                "website_titles_datetime" => $this->website_titles_datetime,
                "website_titles_aid" => $this->website_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblWebsiteTitles} set ";
            $sql .= "website_titles_partners_subtitle = :website_titles_partners_subtitle, ";
            $sql .= "website_titles_partners_title = :website_titles_partners_title, ";
            $sql .= "website_titles_datetime = :website_titles_datetime ";
            $sql .= "where website_titles_aid = :website_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_partners_subtitle" => $this->website_titles_partners_subtitle,
                "website_titles_partners_title" => $this->website_titles_partners_title,
                "website_titles_datetime" => $this->website_titles_datetime,
                "website_titles_aid" => $this->website_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblWebsiteTitles} set ";
            $sql .= "website_titles_testimonial_subtitle = :website_titles_testimonial_subtitle, ";
            $sql .= "website_titles_testimonial_title = :website_titles_testimonial_title, ";
            $sql .= "website_titles_datetime = :website_titles_datetime ";
            $sql .= "where website_titles_aid = :website_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_titles_testimonial_subtitle" => $this->website_titles_testimonial_subtitle,
                "website_titles_testimonial_title" => $this->website_titles_testimonial_title,
                "website_titles_datetime" => $this->website_titles_datetime,
                "website_titles_aid" => $this->website_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
