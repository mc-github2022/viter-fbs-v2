<?php

class RegistrationOverview
{
    public $registration_overview_aid;
    public $registration_overview_subtitle;
    public $registration_overview_title;
    public $registration_overview_img;
    public $registration_overview_list_title_a;
    public $registration_overview_list_description_a;
    public $registration_overview_list_title_b;
    public $registration_overview_list_description_b;
    public $registration_overview_list_title_c;
    public $registration_overview_list_description_c;
    public $registration_overview_created;
    public $registration_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblRegistrationOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRegistrationOverview = "fbsv2_services_registration_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblRegistrationOverview} ";
            $sql .= "order by registration_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblRegistrationOverview}";
            $sql .= "(registration_overview_title, ";
            $sql .= "registration_overview_subtitle, ";
            $sql .= "registration_overview_img, ";
            $sql .= "registration_overview_created, ";
            $sql .= "registration_overview_datetime ) values ( ";
            $sql .= ":registration_overview_title, ";
            $sql .= ":registration_overview_subtitle, ";
            $sql .= ":registration_overview_img, ";
            $sql .= ":registration_overview_created, ";
            $sql .= ":registration_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_overview_title" => $this->registration_overview_title,
                "registration_overview_subtitle" => $this->registration_overview_subtitle,
                "registration_overview_img" => $this->registration_overview_img,
                "registration_overview_created" => $this->registration_overview_created,
                "registration_overview_datetime" => $this->registration_overview_datetime,
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
            $sql = "update {$this->tblRegistrationOverview} set ";
            $sql .= "registration_overview_title = :registration_overview_title, ";
            $sql .= "registration_overview_subtitle = :registration_overview_subtitle, ";
            $sql .= "registration_overview_img = :registration_overview_img, ";
            $sql .= "registration_overview_datetime = :registration_overview_datetime ";
            $sql .= "where registration_overview_aid = :registration_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_overview_title" => $this->registration_overview_title,
                "registration_overview_subtitle" => $this->registration_overview_subtitle,
                "registration_overview_img" => $this->registration_overview_img,
                "registration_overview_datetime" => $this->registration_overview_datetime,
                "registration_overview_aid" => $this->registration_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblRegistrationOverview}";
            $sql .= "(registration_overview_list_title_a, ";
            $sql .= "registration_overview_list_description_a, ";
            $sql .= "registration_overview_list_title_b, ";
            $sql .= "registration_overview_list_description_b, ";
            $sql .= "registration_overview_list_title_c, ";
            $sql .= "registration_overview_list_description_c, ";
            $sql .= "registration_overview_created, ";
            $sql .= "registration_overview_datetime ) values ( ";
            $sql .= ":registration_overview_list_title_a, ";
            $sql .= ":registration_overview_list_description_a, ";
            $sql .= ":registration_overview_list_title_b, ";
            $sql .= ":registration_overview_list_description_b, ";
            $sql .= ":registration_overview_list_title_c, ";
            $sql .= ":registration_overview_list_description_c, ";
            $sql .= ":registration_overview_created, ";
            $sql .= ":registration_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_overview_list_title_a" => $this->registration_overview_list_title_a,
                "registration_overview_list_description_a" => $this->registration_overview_list_description_a,
                "registration_overview_list_title_b" => $this->registration_overview_list_title_b,
                "registration_overview_list_description_b" => $this->registration_overview_list_description_b,
                "registration_overview_list_title_c" => $this->registration_overview_list_title_c,
                "registration_overview_list_description_c" => $this->registration_overview_list_description_c,
                "registration_overview_created" => $this->registration_overview_created,
                "registration_overview_datetime" => $this->registration_overview_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateOverviewList()
    {
        try {
            $sql = "update {$this->tblRegistrationOverview} set ";
            $sql .= "registration_overview_list_title_a = :registration_overview_list_title_a, ";
            $sql .= "registration_overview_list_description_a = :registration_overview_list_description_a, ";
            $sql .= "registration_overview_list_title_b = :registration_overview_list_title_b, ";
            $sql .= "registration_overview_list_description_b = :registration_overview_list_description_b, ";
            $sql .= "registration_overview_list_title_c = :registration_overview_list_title_c, ";
            $sql .= "registration_overview_list_description_c = :registration_overview_list_description_c, ";
            $sql .= "registration_overview_datetime = :registration_overview_datetime ";
            $sql .= "where registration_overview_aid = :registration_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "registration_overview_list_title_a" => $this->registration_overview_list_title_a,
                "registration_overview_list_description_a" => $this->registration_overview_list_description_a,
                "registration_overview_list_title_b" => $this->registration_overview_list_title_b,
                "registration_overview_list_description_b" => $this->registration_overview_list_description_b,
                "registration_overview_list_title_c" => $this->registration_overview_list_title_c,
                "registration_overview_list_description_c" => $this->registration_overview_list_description_c,
                "registration_overview_datetime" => $this->registration_overview_datetime,
                "registration_overview_aid" => $this->registration_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
