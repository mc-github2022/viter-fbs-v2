<?php

class MarketingOverview
{
    public $marketing_overview_aid;
    public $marketing_overview_subtitle;
    public $marketing_overview_title;
    public $marketing_overview_img;
    public $marketing_overview_list_title_a;
    public $marketing_overview_list_description_a;
    public $marketing_overview_list_title_b;
    public $marketing_overview_list_description_b;
    public $marketing_overview_list_title_c;
    public $marketing_overview_list_description_c;
    public $marketing_overview_created;
    public $marketing_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblMarketingOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMarketingOverview = "fbsv2_services_marketing_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblMarketingOverview} ";
            $sql .= "order by marketing_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblMarketingOverview}";
            $sql .= "(marketing_overview_title, ";
            $sql .= "marketing_overview_subtitle, ";
            $sql .= "marketing_overview_img, ";
            $sql .= "marketing_overview_created, ";
            $sql .= "marketing_overview_datetime ) values ( ";
            $sql .= ":marketing_overview_title, ";
            $sql .= ":marketing_overview_subtitle, ";
            $sql .= ":marketing_overview_img, ";
            $sql .= ":marketing_overview_created, ";
            $sql .= ":marketing_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_overview_title" => $this->marketing_overview_title,
                "marketing_overview_subtitle" => $this->marketing_overview_subtitle,
                "marketing_overview_img" => $this->marketing_overview_img,
                "marketing_overview_created" => $this->marketing_overview_created,
                "marketing_overview_datetime" => $this->marketing_overview_datetime,
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
            $sql = "update {$this->tblMarketingOverview} set ";
            $sql .= "marketing_overview_title = :marketing_overview_title, ";
            $sql .= "marketing_overview_subtitle = :marketing_overview_subtitle, ";
            $sql .= "marketing_overview_img = :marketing_overview_img, ";
            $sql .= "marketing_overview_datetime = :marketing_overview_datetime ";
            $sql .= "where marketing_overview_aid = :marketing_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_overview_title" => $this->marketing_overview_title,
                "marketing_overview_subtitle" => $this->marketing_overview_subtitle,
                "marketing_overview_img" => $this->marketing_overview_img,
                "marketing_overview_datetime" => $this->marketing_overview_datetime,
                "marketing_overview_aid" => $this->marketing_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblMarketingOverview}";
            $sql .= "(marketing_overview_list_title_a, ";
            $sql .= "marketing_overview_list_description_a, ";
            $sql .= "marketing_overview_list_title_b, ";
            $sql .= "marketing_overview_list_description_b, ";
            $sql .= "marketing_overview_list_title_c, ";
            $sql .= "marketing_overview_list_description_c, ";
            $sql .= "marketing_overview_created, ";
            $sql .= "marketing_overview_datetime ) values ( ";
            $sql .= ":marketing_overview_list_title_a, ";
            $sql .= ":marketing_overview_list_description_a, ";
            $sql .= ":marketing_overview_list_title_b, ";
            $sql .= ":marketing_overview_list_description_b, ";
            $sql .= ":marketing_overview_list_title_c, ";
            $sql .= ":marketing_overview_list_description_c, ";
            $sql .= ":marketing_overview_created, ";
            $sql .= ":marketing_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_overview_list_title_a" => $this->marketing_overview_list_title_a,
                "marketing_overview_list_description_a" => $this->marketing_overview_list_description_a,
                "marketing_overview_list_title_b" => $this->marketing_overview_list_title_b,
                "marketing_overview_list_description_b" => $this->marketing_overview_list_description_b,
                "marketing_overview_list_title_c" => $this->marketing_overview_list_title_c,
                "marketing_overview_list_description_c" => $this->marketing_overview_list_description_c,
                "marketing_overview_created" => $this->marketing_overview_created,
                "marketing_overview_datetime" => $this->marketing_overview_datetime,
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
            $sql = "update {$this->tblMarketingOverview} set ";
            $sql .= "marketing_overview_list_title_a = :marketing_overview_list_title_a, ";
            $sql .= "marketing_overview_list_description_a = :marketing_overview_list_description_a, ";
            $sql .= "marketing_overview_list_title_b = :marketing_overview_list_title_b, ";
            $sql .= "marketing_overview_list_description_b = :marketing_overview_list_description_b, ";
            $sql .= "marketing_overview_list_title_c = :marketing_overview_list_title_c, ";
            $sql .= "marketing_overview_list_description_c = :marketing_overview_list_description_c, ";
            $sql .= "marketing_overview_datetime = :marketing_overview_datetime ";
            $sql .= "where marketing_overview_aid = :marketing_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_overview_list_title_a" => $this->marketing_overview_list_title_a,
                "marketing_overview_list_description_a" => $this->marketing_overview_list_description_a,
                "marketing_overview_list_title_b" => $this->marketing_overview_list_title_b,
                "marketing_overview_list_description_b" => $this->marketing_overview_list_description_b,
                "marketing_overview_list_title_c" => $this->marketing_overview_list_title_c,
                "marketing_overview_list_description_c" => $this->marketing_overview_list_description_c,
                "marketing_overview_datetime" => $this->marketing_overview_datetime,
                "marketing_overview_aid" => $this->marketing_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
