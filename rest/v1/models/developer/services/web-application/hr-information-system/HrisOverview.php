<?php

class HrisOverview
{
    public $hris_overview_aid;
    public $hris_overview_subtitle;
    public $hris_overview_title;
    public $hris_overview_img;
    public $hris_overview_list_title_a;
    public $hris_overview_list_description_a;
    public $hris_overview_list_title_b;
    public $hris_overview_list_description_b;
    public $hris_overview_list_title_c;
    public $hris_overview_list_description_c;
    public $hris_overview_created;
    public $hris_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHrisOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHrisOverview = "fbsv2_services_hris_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHrisOverview} ";
            $sql .= "order by hris_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHrisOverview}";
            $sql .= "(hris_overview_title, ";
            $sql .= "hris_overview_subtitle, ";
            $sql .= "hris_overview_img, ";
            $sql .= "hris_overview_created, ";
            $sql .= "hris_overview_datetime ) values ( ";
            $sql .= ":hris_overview_title, ";
            $sql .= ":hris_overview_subtitle, ";
            $sql .= ":hris_overview_img, ";
            $sql .= ":hris_overview_created, ";
            $sql .= ":hris_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_overview_title" => $this->hris_overview_title,
                "hris_overview_subtitle" => $this->hris_overview_subtitle,
                "hris_overview_img" => $this->hris_overview_img,
                "hris_overview_created" => $this->hris_overview_created,
                "hris_overview_datetime" => $this->hris_overview_datetime,
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
            $sql = "update {$this->tblHrisOverview} set ";
            $sql .= "hris_overview_title = :hris_overview_title, ";
            $sql .= "hris_overview_subtitle = :hris_overview_subtitle, ";
            $sql .= "hris_overview_img = :hris_overview_img, ";
            $sql .= "hris_overview_datetime = :hris_overview_datetime ";
            $sql .= "where hris_overview_aid = :hris_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_overview_title" => $this->hris_overview_title,
                "hris_overview_subtitle" => $this->hris_overview_subtitle,
                "hris_overview_img" => $this->hris_overview_img,
                "hris_overview_datetime" => $this->hris_overview_datetime,
                "hris_overview_aid" => $this->hris_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblHrisOverview}";
            $sql .= "(hris_overview_list_title_a, ";
            $sql .= "hris_overview_list_description_a, ";
            $sql .= "hris_overview_list_title_b, ";
            $sql .= "hris_overview_list_description_b, ";
            $sql .= "hris_overview_list_title_c, ";
            $sql .= "hris_overview_list_description_c, ";
            $sql .= "hris_overview_created, ";
            $sql .= "hris_overview_datetime ) values ( ";
            $sql .= ":hris_overview_list_title_a, ";
            $sql .= ":hris_overview_list_description_a, ";
            $sql .= ":hris_overview_list_title_b, ";
            $sql .= ":hris_overview_list_description_b, ";
            $sql .= ":hris_overview_list_title_c, ";
            $sql .= ":hris_overview_list_description_c, ";
            $sql .= ":hris_overview_created, ";
            $sql .= ":hris_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_overview_list_title_a" => $this->hris_overview_list_title_a,
                "hris_overview_list_description_a" => $this->hris_overview_list_description_a,
                "hris_overview_list_title_b" => $this->hris_overview_list_title_b,
                "hris_overview_list_description_b" => $this->hris_overview_list_description_b,
                "hris_overview_list_title_c" => $this->hris_overview_list_title_c,
                "hris_overview_list_description_c" => $this->hris_overview_list_description_c,
                "hris_overview_created" => $this->hris_overview_created,
                "hris_overview_datetime" => $this->hris_overview_datetime,
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
            $sql = "update {$this->tblHrisOverview} set ";
            $sql .= "hris_overview_list_title_a = :hris_overview_list_title_a, ";
            $sql .= "hris_overview_list_description_a = :hris_overview_list_description_a, ";
            $sql .= "hris_overview_list_title_b = :hris_overview_list_title_b, ";
            $sql .= "hris_overview_list_description_b = :hris_overview_list_description_b, ";
            $sql .= "hris_overview_list_title_c = :hris_overview_list_title_c, ";
            $sql .= "hris_overview_list_description_c = :hris_overview_list_description_c, ";
            $sql .= "hris_overview_datetime = :hris_overview_datetime ";
            $sql .= "where hris_overview_aid = :hris_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "hris_overview_list_title_a" => $this->hris_overview_list_title_a,
                "hris_overview_list_description_a" => $this->hris_overview_list_description_a,
                "hris_overview_list_title_b" => $this->hris_overview_list_title_b,
                "hris_overview_list_description_b" => $this->hris_overview_list_description_b,
                "hris_overview_list_title_c" => $this->hris_overview_list_title_c,
                "hris_overview_list_description_c" => $this->hris_overview_list_description_c,
                "hris_overview_datetime" => $this->hris_overview_datetime,
                "hris_overview_aid" => $this->hris_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
