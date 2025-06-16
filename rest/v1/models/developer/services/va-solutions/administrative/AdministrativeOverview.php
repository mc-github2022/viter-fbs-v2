<?php

class AdministrativeOverview
{
    public $administrative_overview_aid;
    public $administrative_overview_subtitle;
    public $administrative_overview_title;
    public $administrative_overview_img;
    public $administrative_overview_list_title_a;
    public $administrative_overview_list_description_a;
    public $administrative_overview_list_title_b;
    public $administrative_overview_list_description_b;
    public $administrative_overview_list_title_c;
    public $administrative_overview_list_description_c;
    public $administrative_overview_created;
    public $administrative_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAdministrativeOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdministrativeOverview = "fbsv2_services_administrative_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAdministrativeOverview} ";
            $sql .= "order by administrative_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeOverview}";
            $sql .= "(administrative_overview_title, ";
            $sql .= "administrative_overview_subtitle, ";
            $sql .= "administrative_overview_img, ";
            $sql .= "administrative_overview_created, ";
            $sql .= "administrative_overview_datetime ) values ( ";
            $sql .= ":administrative_overview_title, ";
            $sql .= ":administrative_overview_subtitle, ";
            $sql .= ":administrative_overview_img, ";
            $sql .= ":administrative_overview_created, ";
            $sql .= ":administrative_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_overview_title" => $this->administrative_overview_title,
                "administrative_overview_subtitle" => $this->administrative_overview_subtitle,
                "administrative_overview_img" => $this->administrative_overview_img,
                "administrative_overview_created" => $this->administrative_overview_created,
                "administrative_overview_datetime" => $this->administrative_overview_datetime,
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
            $sql = "update {$this->tblAdministrativeOverview} set ";
            $sql .= "administrative_overview_title = :administrative_overview_title, ";
            $sql .= "administrative_overview_subtitle = :administrative_overview_subtitle, ";
            $sql .= "administrative_overview_img = :administrative_overview_img, ";
            $sql .= "administrative_overview_datetime = :administrative_overview_datetime ";
            $sql .= "where administrative_overview_aid = :administrative_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_overview_title" => $this->administrative_overview_title,
                "administrative_overview_subtitle" => $this->administrative_overview_subtitle,
                "administrative_overview_img" => $this->administrative_overview_img,
                "administrative_overview_datetime" => $this->administrative_overview_datetime,
                "administrative_overview_aid" => $this->administrative_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeOverview}";
            $sql .= "(administrative_overview_list_title_a, ";
            $sql .= "administrative_overview_list_description_a, ";
            $sql .= "administrative_overview_list_title_b, ";
            $sql .= "administrative_overview_list_description_b, ";
            $sql .= "administrative_overview_list_title_c, ";
            $sql .= "administrative_overview_list_description_c, ";
            $sql .= "administrative_overview_created, ";
            $sql .= "administrative_overview_datetime ) values ( ";
            $sql .= ":administrative_overview_list_title_a, ";
            $sql .= ":administrative_overview_list_description_a, ";
            $sql .= ":administrative_overview_list_title_b, ";
            $sql .= ":administrative_overview_list_description_b, ";
            $sql .= ":administrative_overview_list_title_c, ";
            $sql .= ":administrative_overview_list_description_c, ";
            $sql .= ":administrative_overview_created, ";
            $sql .= ":administrative_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_overview_list_title_a" => $this->administrative_overview_list_title_a,
                "administrative_overview_list_description_a" => $this->administrative_overview_list_description_a,
                "administrative_overview_list_title_b" => $this->administrative_overview_list_title_b,
                "administrative_overview_list_description_b" => $this->administrative_overview_list_description_b,
                "administrative_overview_list_title_c" => $this->administrative_overview_list_title_c,
                "administrative_overview_list_description_c" => $this->administrative_overview_list_description_c,
                "administrative_overview_created" => $this->administrative_overview_created,
                "administrative_overview_datetime" => $this->administrative_overview_datetime,
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
            $sql = "update {$this->tblAdministrativeOverview} set ";
            $sql .= "administrative_overview_list_title_a = :administrative_overview_list_title_a, ";
            $sql .= "administrative_overview_list_description_a = :administrative_overview_list_description_a, ";
            $sql .= "administrative_overview_list_title_b = :administrative_overview_list_title_b, ";
            $sql .= "administrative_overview_list_description_b = :administrative_overview_list_description_b, ";
            $sql .= "administrative_overview_list_title_c = :administrative_overview_list_title_c, ";
            $sql .= "administrative_overview_list_description_c = :administrative_overview_list_description_c, ";
            $sql .= "administrative_overview_datetime = :administrative_overview_datetime ";
            $sql .= "where administrative_overview_aid = :administrative_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_overview_list_title_a" => $this->administrative_overview_list_title_a,
                "administrative_overview_list_description_a" => $this->administrative_overview_list_description_a,
                "administrative_overview_list_title_b" => $this->administrative_overview_list_title_b,
                "administrative_overview_list_description_b" => $this->administrative_overview_list_description_b,
                "administrative_overview_list_title_c" => $this->administrative_overview_list_title_c,
                "administrative_overview_list_description_c" => $this->administrative_overview_list_description_c,
                "administrative_overview_datetime" => $this->administrative_overview_datetime,
                "administrative_overview_aid" => $this->administrative_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
