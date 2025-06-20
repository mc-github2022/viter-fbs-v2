<?php

class SinglepageTitles
{
    public $singlepage_titles_aid;
    public $singlepage_titles_overview_subtitle;
    public $singlepage_titles_overview_title;
    public $singlepage_titles_packages_subtitle;
    public $singlepage_titles_packages_title;
    public $singlepage_titles_partners_subtitle;
    public $singlepage_titles_partners_title;
    public $singlepage_titles_created;
    public $singlepage_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSinglepageTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSinglepageTitles = "fbsv2_services_singlepage_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSinglepageTitles} ";
            $sql .= "order by singlepage_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSinglepageTitles}";
            $sql .= "(singlepage_titles_overview_subtitle, ";
            $sql .= "singlepage_titles_overview_title, ";
            $sql .= "singlepage_titles_created, ";
            $sql .= "singlepage_titles_datetime ) values ( ";
            $sql .= ":singlepage_titles_overview_subtitle, ";
            $sql .= ":singlepage_titles_overview_title, ";
            $sql .= ":singlepage_titles_created, ";
            $sql .= ":singlepage_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_overview_subtitle" => $this->singlepage_titles_overview_subtitle,
                "singlepage_titles_overview_title" => $this->singlepage_titles_overview_title,
                "singlepage_titles_created" => $this->singlepage_titles_created,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
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
            $sql = "insert into {$this->tblSinglepageTitles}";
            $sql .= "(singlepage_titles_packages_subtitle, ";
            $sql .= "singlepage_titles_packages_title, ";
            $sql .= "singlepage_titles_created, ";
            $sql .= "singlepage_titles_datetime ) values ( ";
            $sql .= ":singlepage_titles_packages_subtitle, ";
            $sql .= ":singlepage_titles_packages_title, ";
            $sql .= ":singlepage_titles_created, ";
            $sql .= ":singlepage_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_packages_subtitle" => $this->singlepage_titles_packages_subtitle,
                "singlepage_titles_packages_title" => $this->singlepage_titles_packages_title,
                "singlepage_titles_created" => $this->singlepage_titles_created,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
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
            $sql = "insert into {$this->tblSinglepageTitles}";
            $sql .= "(singlepage_titles_partners_subtitle, ";
            $sql .= "singlepage_titles_partners_title, ";
            $sql .= "singlepage_titles_created, ";
            $sql .= "singlepage_titles_datetime ) values ( ";
            $sql .= ":singlepage_titles_partners_subtitle, ";
            $sql .= ":singlepage_titles_partners_title, ";
            $sql .= ":singlepage_titles_created, ";
            $sql .= ":singlepage_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_partners_subtitle" => $this->singlepage_titles_partners_subtitle,
                "singlepage_titles_partners_title" => $this->singlepage_titles_partners_title,
                "singlepage_titles_created" => $this->singlepage_titles_created,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
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
            $sql = "update {$this->tblSinglepageTitles} set ";
            $sql .= "singlepage_titles_overview_subtitle = :singlepage_titles_overview_subtitle, ";
            $sql .= "singlepage_titles_overview_title = :singlepage_titles_overview_title, ";
            $sql .= "singlepage_titles_datetime = :singlepage_titles_datetime ";
            $sql .= "where singlepage_titles_aid = :singlepage_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_overview_subtitle" => $this->singlepage_titles_overview_subtitle,
                "singlepage_titles_overview_title" => $this->singlepage_titles_overview_title,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
                "singlepage_titles_aid" => $this->singlepage_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblSinglepageTitles} set ";
            $sql .= "singlepage_titles_packages_subtitle = :singlepage_titles_packages_subtitle, ";
            $sql .= "singlepage_titles_packages_title = :singlepage_titles_packages_title, ";
            $sql .= "singlepage_titles_datetime = :singlepage_titles_datetime ";
            $sql .= "where singlepage_titles_aid = :singlepage_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_packages_subtitle" => $this->singlepage_titles_packages_subtitle,
                "singlepage_titles_packages_title" => $this->singlepage_titles_packages_title,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
                "singlepage_titles_aid" => $this->singlepage_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblSinglepageTitles} set ";
            $sql .= "singlepage_titles_partners_subtitle = :singlepage_titles_partners_subtitle, ";
            $sql .= "singlepage_titles_partners_title = :singlepage_titles_partners_title, ";
            $sql .= "singlepage_titles_datetime = :singlepage_titles_datetime ";
            $sql .= "where singlepage_titles_aid = :singlepage_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_titles_partners_subtitle" => $this->singlepage_titles_partners_subtitle,
                "singlepage_titles_partners_title" => $this->singlepage_titles_partners_title,
                "singlepage_titles_datetime" => $this->singlepage_titles_datetime,
                "singlepage_titles_aid" => $this->singlepage_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
