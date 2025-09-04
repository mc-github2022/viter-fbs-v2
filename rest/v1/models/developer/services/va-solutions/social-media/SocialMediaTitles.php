<?php

class SocialMediaTitles
{
    public $social_titles_aid;
    public $social_titles_overview_subtitle;
    public $social_titles_overview_title;
    public $social_titles_packages_subtitle;
    public $social_titles_packages_title;
    public $social_titles_partners_subtitle;
    public $social_titles_partners_title;
    public $social_titles_testimonial_subtitle;
    public $social_titles_testimonial_title;
    public $social_titles_created;
    public $social_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaTitles = "fbsv2_services_social_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaTitles} ";
            $sql .= "order by social_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaTitles}";
            $sql .= "(social_titles_overview_subtitle, ";
            $sql .= "social_titles_overview_title, ";
            $sql .= "social_titles_created, ";
            $sql .= "social_titles_datetime ) values ( ";
            $sql .= ":social_titles_overview_subtitle, ";
            $sql .= ":social_titles_overview_title, ";
            $sql .= ":social_titles_created, ";
            $sql .= ":social_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_overview_subtitle" => $this->social_titles_overview_subtitle,
                "social_titles_overview_title" => $this->social_titles_overview_title,
                "social_titles_created" => $this->social_titles_created,
                "social_titles_datetime" => $this->social_titles_datetime,
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
            $sql = "insert into {$this->tblSocialMediaTitles}";
            $sql .= "(social_titles_packages_subtitle, ";
            $sql .= "social_titles_packages_title, ";
            $sql .= "social_titles_created, ";
            $sql .= "social_titles_datetime ) values ( ";
            $sql .= ":social_titles_packages_subtitle, ";
            $sql .= ":social_titles_packages_title, ";
            $sql .= ":social_titles_created, ";
            $sql .= ":social_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_packages_subtitle" => $this->social_titles_packages_subtitle,
                "social_titles_packages_title" => $this->social_titles_packages_title,
                "social_titles_created" => $this->social_titles_created,
                "social_titles_datetime" => $this->social_titles_datetime,
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
            $sql = "insert into {$this->tblSocialMediaTitles}";
            $sql .= "(social_titles_partners_subtitle, ";
            $sql .= "social_titles_partners_title, ";
            $sql .= "social_titles_created, ";
            $sql .= "social_titles_datetime ) values ( ";
            $sql .= ":social_titles_partners_subtitle, ";
            $sql .= ":social_titles_partners_title, ";
            $sql .= ":social_titles_created, ";
            $sql .= ":social_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_partners_subtitle" => $this->social_titles_partners_subtitle,
                "social_titles_partners_title" => $this->social_titles_partners_title,
                "social_titles_created" => $this->social_titles_created,
                "social_titles_datetime" => $this->social_titles_datetime,
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
            $sql = "insert into {$this->tblSocialMediaTitles}";
            $sql .= "(social_titles_testimonial_subtitle, ";
            $sql .= "social_titles_testimonial_title, ";
            $sql .= "social_titles_created, ";
            $sql .= "social_titles_datetime ) values ( ";
            $sql .= ":social_titles_testimonial_subtitle, ";
            $sql .= ":social_titles_testimonial_title, ";
            $sql .= ":social_titles_created, ";
            $sql .= ":social_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_testimonial_subtitle" => $this->social_titles_testimonial_subtitle,
                "social_titles_testimonial_title" => $this->social_titles_testimonial_title,
                "social_titles_created" => $this->social_titles_created,
                "social_titles_datetime" => $this->social_titles_datetime,
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
            $sql = "update {$this->tblSocialMediaTitles} set ";
            $sql .= "social_titles_overview_subtitle = :social_titles_overview_subtitle, ";
            $sql .= "social_titles_overview_title = :social_titles_overview_title, ";
            $sql .= "social_titles_datetime = :social_titles_datetime ";
            $sql .= "where social_titles_aid = :social_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_overview_subtitle" => $this->social_titles_overview_subtitle,
                "social_titles_overview_title" => $this->social_titles_overview_title,
                "social_titles_datetime" => $this->social_titles_datetime,
                "social_titles_aid" => $this->social_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblSocialMediaTitles} set ";
            $sql .= "social_titles_packages_subtitle = :social_titles_packages_subtitle, ";
            $sql .= "social_titles_packages_title = :social_titles_packages_title, ";
            $sql .= "social_titles_datetime = :social_titles_datetime ";
            $sql .= "where social_titles_aid = :social_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_packages_subtitle" => $this->social_titles_packages_subtitle,
                "social_titles_packages_title" => $this->social_titles_packages_title,
                "social_titles_datetime" => $this->social_titles_datetime,
                "social_titles_aid" => $this->social_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblSocialMediaTitles} set ";
            $sql .= "social_titles_partners_subtitle = :social_titles_partners_subtitle, ";
            $sql .= "social_titles_partners_title = :social_titles_partners_title, ";
            $sql .= "social_titles_datetime = :social_titles_datetime ";
            $sql .= "where social_titles_aid = :social_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_partners_subtitle" => $this->social_titles_partners_subtitle,
                "social_titles_partners_title" => $this->social_titles_partners_title,
                "social_titles_datetime" => $this->social_titles_datetime,
                "social_titles_aid" => $this->social_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblSocialMediaTitles} set ";
            $sql .= "social_titles_testimonial_subtitle = :social_titles_testimonial_subtitle, ";
            $sql .= "social_titles_testimonial_title = :social_titles_testimonial_title, ";
            $sql .= "social_titles_datetime = :social_titles_datetime ";
            $sql .= "where social_titles_aid = :social_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_titles_testimonial_subtitle" => $this->social_titles_testimonial_subtitle,
                "social_titles_testimonial_title" => $this->social_titles_testimonial_title,
                "social_titles_datetime" => $this->social_titles_datetime,
                "social_titles_aid" => $this->social_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
