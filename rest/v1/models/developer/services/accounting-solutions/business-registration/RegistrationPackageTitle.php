<?php

class RegistrationPackageTitle
{
    public $registration_title_aid;
    public $registration_title_packages_subtitle;
    public $registration_title_packages_title;
    public $registration_title_created;
    public $registration_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblRegistrationPackageTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRegistrationPackageTitle = "fbsv2_services_registration_pricing_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblRegistrationPackageTitle} ";
            $sql .= "order by registration_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRegistrationPackageTitle}";
            $sql .= "(registration_title_packages_subtitle, ";
            $sql .= "registration_title_packages_title, ";
            $sql .= "registration_title_created, ";
            $sql .= "registration_title_datetime ) values ( ";
            $sql .= ":registration_title_packages_subtitle, ";
            $sql .= ":registration_title_packages_title, ";
            $sql .= ":registration_title_created, ";
            $sql .= ":registration_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_title_packages_subtitle" => $this->registration_title_packages_subtitle,
                "registration_title_packages_title" => $this->registration_title_packages_title,
                "registration_title_created" => $this->registration_title_created,
                "registration_title_datetime" => $this->registration_title_datetime,
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
            $sql = "update {$this->tblRegistrationPackageTitle} set ";
            $sql .= "registration_title_packages_subtitle = :registration_title_packages_subtitle, ";
            $sql .= "registration_title_packages_title = :registration_title_packages_title, ";
            $sql .= "registration_title_datetime = :registration_title_datetime ";
            $sql .= "where registration_title_aid = :registration_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_title_packages_subtitle" => $this->registration_title_packages_subtitle,
                "registration_title_packages_title" => $this->registration_title_packages_title,
                "registration_title_datetime" => $this->registration_title_datetime,
                "registration_title_aid" => $this->registration_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
