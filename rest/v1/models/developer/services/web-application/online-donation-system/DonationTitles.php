<?php

class DonationTitles
{
    public $donation_titles_aid;
    public $donation_titles_overview_subtitle;
    public $donation_titles_overview_title;
    public $donation_titles_packages_subtitle;
    public $donation_titles_packages_title;
    public $donation_titles_partners_subtitle;
    public $donation_titles_partners_title;
    public $donation_titles_testimonial_subtitle;
    public $donation_titles_testimonial_title;
    public $donation_titles_created;
    public $donation_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblDonationTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDonationTitles = "fbsv2_services_donation_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblDonationTitles} ";
            $sql .= "order by donation_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblDonationTitles}";
            $sql .= "(donation_titles_overview_subtitle, ";
            $sql .= "donation_titles_overview_title, ";
            $sql .= "donation_titles_created, ";
            $sql .= "donation_titles_datetime ) values ( ";
            $sql .= ":donation_titles_overview_subtitle, ";
            $sql .= ":donation_titles_overview_title, ";
            $sql .= ":donation_titles_created, ";
            $sql .= ":donation_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_overview_subtitle" => $this->donation_titles_overview_subtitle,
                "donation_titles_overview_title" => $this->donation_titles_overview_title,
                "donation_titles_created" => $this->donation_titles_created,
                "donation_titles_datetime" => $this->donation_titles_datetime,
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
            $sql = "insert into {$this->tblDonationTitles}";
            $sql .= "(donation_titles_packages_subtitle, ";
            $sql .= "donation_titles_packages_title, ";
            $sql .= "donation_titles_created, ";
            $sql .= "donation_titles_datetime ) values ( ";
            $sql .= ":donation_titles_packages_subtitle, ";
            $sql .= ":donation_titles_packages_title, ";
            $sql .= ":donation_titles_created, ";
            $sql .= ":donation_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_packages_subtitle" => $this->donation_titles_packages_subtitle,
                "donation_titles_packages_title" => $this->donation_titles_packages_title,
                "donation_titles_created" => $this->donation_titles_created,
                "donation_titles_datetime" => $this->donation_titles_datetime,
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
            $sql = "insert into {$this->tblDonationTitles}";
            $sql .= "(donation_titles_partners_subtitle, ";
            $sql .= "donation_titles_partners_title, ";
            $sql .= "donation_titles_created, ";
            $sql .= "donation_titles_datetime ) values ( ";
            $sql .= ":donation_titles_partners_subtitle, ";
            $sql .= ":donation_titles_partners_title, ";
            $sql .= ":donation_titles_created, ";
            $sql .= ":donation_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_partners_subtitle" => $this->donation_titles_partners_subtitle,
                "donation_titles_partners_title" => $this->donation_titles_partners_title,
                "donation_titles_created" => $this->donation_titles_created,
                "donation_titles_datetime" => $this->donation_titles_datetime,
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
            $sql = "insert into {$this->tblDonationTitles}";
            $sql .= "(donation_titles_testimonial_subtitle, ";
            $sql .= "donation_titles_testimonial_title, ";
            $sql .= "donation_titles_created, ";
            $sql .= "donation_titles_datetime ) values ( ";
            $sql .= ":donation_titles_testimonial_subtitle, ";
            $sql .= ":donation_titles_testimonial_title, ";
            $sql .= ":donation_titles_created, ";
            $sql .= ":donation_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_testimonial_subtitle" => $this->donation_titles_testimonial_subtitle,
                "donation_titles_testimonial_title" => $this->donation_titles_testimonial_title,
                "donation_titles_created" => $this->donation_titles_created,
                "donation_titles_datetime" => $this->donation_titles_datetime,
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
            $sql = "update {$this->tblDonationTitles} set ";
            $sql .= "donation_titles_overview_subtitle = :donation_titles_overview_subtitle, ";
            $sql .= "donation_titles_overview_title = :donation_titles_overview_title, ";
            $sql .= "donation_titles_datetime = :donation_titles_datetime ";
            $sql .= "where donation_titles_aid = :donation_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_overview_subtitle" => $this->donation_titles_overview_subtitle,
                "donation_titles_overview_title" => $this->donation_titles_overview_title,
                "donation_titles_datetime" => $this->donation_titles_datetime,
                "donation_titles_aid" => $this->donation_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblDonationTitles} set ";
            $sql .= "donation_titles_packages_subtitle = :donation_titles_packages_subtitle, ";
            $sql .= "donation_titles_packages_title = :donation_titles_packages_title, ";
            $sql .= "donation_titles_datetime = :donation_titles_datetime ";
            $sql .= "where donation_titles_aid = :donation_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_packages_subtitle" => $this->donation_titles_packages_subtitle,
                "donation_titles_packages_title" => $this->donation_titles_packages_title,
                "donation_titles_datetime" => $this->donation_titles_datetime,
                "donation_titles_aid" => $this->donation_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblDonationTitles} set ";
            $sql .= "donation_titles_partners_subtitle = :donation_titles_partners_subtitle, ";
            $sql .= "donation_titles_partners_title = :donation_titles_partners_title, ";
            $sql .= "donation_titles_datetime = :donation_titles_datetime ";
            $sql .= "where donation_titles_aid = :donation_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_partners_subtitle" => $this->donation_titles_partners_subtitle,
                "donation_titles_partners_title" => $this->donation_titles_partners_title,
                "donation_titles_datetime" => $this->donation_titles_datetime,
                "donation_titles_aid" => $this->donation_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblDonationTitles} set ";
            $sql .= "donation_titles_testimonial_subtitle = :donation_titles_testimonial_subtitle, ";
            $sql .= "donation_titles_testimonial_title = :donation_titles_testimonial_title, ";
            $sql .= "donation_titles_datetime = :donation_titles_datetime ";
            $sql .= "where donation_titles_aid = :donation_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_titles_testimonial_subtitle" => $this->donation_titles_testimonial_subtitle,
                "donation_titles_testimonial_title" => $this->donation_titles_testimonial_title,
                "donation_titles_datetime" => $this->donation_titles_datetime,
                "donation_titles_aid" => $this->donation_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
