<?php

class WordpressTitles
{
    public $wordpress_titles_aid;
    public $wordpress_titles_overview_subtitle;
    public $wordpress_titles_overview_title;
    public $wordpress_titles_packages_subtitle;
    public $wordpress_titles_packages_title;
    public $wordpress_titles_partners_subtitle;
    public $wordpress_titles_partners_title;
    public $wordpress_titles_testimonial_subtitle;
    public $wordpress_titles_testimonial_title;
    public $wordpress_titles_created;
    public $wordpress_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWordpressTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWordpressTitles = "fbsv2_services_wordpress_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWordpressTitles} ";
            $sql .= "order by wordpress_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWordpressTitles}";
            $sql .= "(wordpress_titles_overview_subtitle, ";
            $sql .= "wordpress_titles_overview_title, ";
            $sql .= "wordpress_titles_created, ";
            $sql .= "wordpress_titles_datetime ) values ( ";
            $sql .= ":wordpress_titles_overview_subtitle, ";
            $sql .= ":wordpress_titles_overview_title, ";
            $sql .= ":wordpress_titles_created, ";
            $sql .= ":wordpress_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_overview_subtitle" => $this->wordpress_titles_overview_subtitle,
                "wordpress_titles_overview_title" => $this->wordpress_titles_overview_title,
                "wordpress_titles_created" => $this->wordpress_titles_created,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
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
            $sql = "insert into {$this->tblWordpressTitles}";
            $sql .= "(wordpress_titles_packages_subtitle, ";
            $sql .= "wordpress_titles_packages_title, ";
            $sql .= "wordpress_titles_created, ";
            $sql .= "wordpress_titles_datetime ) values ( ";
            $sql .= ":wordpress_titles_packages_subtitle, ";
            $sql .= ":wordpress_titles_packages_title, ";
            $sql .= ":wordpress_titles_created, ";
            $sql .= ":wordpress_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_packages_subtitle" => $this->wordpress_titles_packages_subtitle,
                "wordpress_titles_packages_title" => $this->wordpress_titles_packages_title,
                "wordpress_titles_created" => $this->wordpress_titles_created,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
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
            $sql = "insert into {$this->tblWordpressTitles}";
            $sql .= "(wordpress_titles_partners_subtitle, ";
            $sql .= "wordpress_titles_partners_title, ";
            $sql .= "wordpress_titles_created, ";
            $sql .= "wordpress_titles_datetime ) values ( ";
            $sql .= ":wordpress_titles_partners_subtitle, ";
            $sql .= ":wordpress_titles_partners_title, ";
            $sql .= ":wordpress_titles_created, ";
            $sql .= ":wordpress_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_partners_subtitle" => $this->wordpress_titles_partners_subtitle,
                "wordpress_titles_partners_title" => $this->wordpress_titles_partners_title,
                "wordpress_titles_created" => $this->wordpress_titles_created,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
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
            $sql = "insert into {$this->tblWordpressTitles}";
            $sql .= "(wordpress_titles_testimonial_subtitle, ";
            $sql .= "wordpress_titles_testimonial_title, ";
            $sql .= "wordpress_titles_created, ";
            $sql .= "wordpress_titles_datetime ) values ( ";
            $sql .= ":wordpress_titles_testimonial_subtitle, ";
            $sql .= ":wordpress_titles_testimonial_title, ";
            $sql .= ":wordpress_titles_created, ";
            $sql .= ":wordpress_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_testimonial_subtitle" => $this->wordpress_titles_testimonial_subtitle,
                "wordpress_titles_testimonial_title" => $this->wordpress_titles_testimonial_title,
                "wordpress_titles_created" => $this->wordpress_titles_created,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
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
            $sql = "update {$this->tblWordpressTitles} set ";
            $sql .= "wordpress_titles_overview_subtitle = :wordpress_titles_overview_subtitle, ";
            $sql .= "wordpress_titles_overview_title = :wordpress_titles_overview_title, ";
            $sql .= "wordpress_titles_datetime = :wordpress_titles_datetime ";
            $sql .= "where wordpress_titles_aid = :wordpress_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_overview_subtitle" => $this->wordpress_titles_overview_subtitle,
                "wordpress_titles_overview_title" => $this->wordpress_titles_overview_title,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
                "wordpress_titles_aid" => $this->wordpress_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblWordpressTitles} set ";
            $sql .= "wordpress_titles_packages_subtitle = :wordpress_titles_packages_subtitle, ";
            $sql .= "wordpress_titles_packages_title = :wordpress_titles_packages_title, ";
            $sql .= "wordpress_titles_datetime = :wordpress_titles_datetime ";
            $sql .= "where wordpress_titles_aid = :wordpress_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_packages_subtitle" => $this->wordpress_titles_packages_subtitle,
                "wordpress_titles_packages_title" => $this->wordpress_titles_packages_title,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
                "wordpress_titles_aid" => $this->wordpress_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblWordpressTitles} set ";
            $sql .= "wordpress_titles_partners_subtitle = :wordpress_titles_partners_subtitle, ";
            $sql .= "wordpress_titles_partners_title = :wordpress_titles_partners_title, ";
            $sql .= "wordpress_titles_datetime = :wordpress_titles_datetime ";
            $sql .= "where wordpress_titles_aid = :wordpress_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_partners_subtitle" => $this->wordpress_titles_partners_subtitle,
                "wordpress_titles_partners_title" => $this->wordpress_titles_partners_title,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
                "wordpress_titles_aid" => $this->wordpress_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblWordpressTitles} set ";
            $sql .= "wordpress_titles_testimonial_subtitle = :wordpress_titles_testimonial_subtitle, ";
            $sql .= "wordpress_titles_testimonial_title = :wordpress_titles_testimonial_title, ";
            $sql .= "wordpress_titles_datetime = :wordpress_titles_datetime ";
            $sql .= "where wordpress_titles_aid = :wordpress_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_titles_testimonial_subtitle" => $this->wordpress_titles_testimonial_subtitle,
                "wordpress_titles_testimonial_title" => $this->wordpress_titles_testimonial_title,
                "wordpress_titles_datetime" => $this->wordpress_titles_datetime,
                "wordpress_titles_aid" => $this->wordpress_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
