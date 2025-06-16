<?php

class BusinessOverview
{
    public $business_overview_aid;
    public $business_overview_subtitle;
    public $business_overview_title;
    public $business_overview_img;
    public $business_overview_list_title_a;
    public $business_overview_list_description_a;
    public $business_overview_list_title_b;
    public $business_overview_list_description_b;
    public $business_overview_list_title_c;
    public $business_overview_list_description_c;
    public $business_overview_created;
    public $business_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBusinessOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBusinessOverview = "fbsv2_services_business_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBusinessOverview} ";
            $sql .= "order by business_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBusinessOverview}";
            $sql .= "(business_overview_title, ";
            $sql .= "business_overview_subtitle, ";
            $sql .= "business_overview_img, ";
            $sql .= "business_overview_created, ";
            $sql .= "business_overview_datetime ) values ( ";
            $sql .= ":business_overview_title, ";
            $sql .= ":business_overview_subtitle, ";
            $sql .= ":business_overview_img, ";
            $sql .= ":business_overview_created, ";
            $sql .= ":business_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_overview_title" => $this->business_overview_title,
                "business_overview_subtitle" => $this->business_overview_subtitle,
                "business_overview_img" => $this->business_overview_img,
                "business_overview_created" => $this->business_overview_created,
                "business_overview_datetime" => $this->business_overview_datetime,
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
            $sql = "update {$this->tblBusinessOverview} set ";
            $sql .= "business_overview_title = :business_overview_title, ";
            $sql .= "business_overview_subtitle = :business_overview_subtitle, ";
            $sql .= "business_overview_img = :business_overview_img, ";
            $sql .= "business_overview_datetime = :business_overview_datetime ";
            $sql .= "where business_overview_aid = :business_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_overview_title" => $this->business_overview_title,
                "business_overview_subtitle" => $this->business_overview_subtitle,
                "business_overview_img" => $this->business_overview_img,
                "business_overview_datetime" => $this->business_overview_datetime,
                "business_overview_aid" => $this->business_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblBusinessOverview}";
            $sql .= "(business_overview_list_title_a, ";
            $sql .= "business_overview_list_description_a, ";
            $sql .= "business_overview_list_title_b, ";
            $sql .= "business_overview_list_description_b, ";
            $sql .= "business_overview_list_title_c, ";
            $sql .= "business_overview_list_description_c, ";
            $sql .= "business_overview_created, ";
            $sql .= "business_overview_datetime ) values ( ";
            $sql .= ":business_overview_list_title_a, ";
            $sql .= ":business_overview_list_description_a, ";
            $sql .= ":business_overview_list_title_b, ";
            $sql .= ":business_overview_list_description_b, ";
            $sql .= ":business_overview_list_title_c, ";
            $sql .= ":business_overview_list_description_c, ";
            $sql .= ":business_overview_created, ";
            $sql .= ":business_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_overview_list_title_a" => $this->business_overview_list_title_a,
                "business_overview_list_description_a" => $this->business_overview_list_description_a,
                "business_overview_list_title_b" => $this->business_overview_list_title_b,
                "business_overview_list_description_b" => $this->business_overview_list_description_b,
                "business_overview_list_title_c" => $this->business_overview_list_title_c,
                "business_overview_list_description_c" => $this->business_overview_list_description_c,
                "business_overview_created" => $this->business_overview_created,
                "business_overview_datetime" => $this->business_overview_datetime,
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
            $sql = "update {$this->tblBusinessOverview} set ";
            $sql .= "business_overview_list_title_a = :business_overview_list_title_a, ";
            $sql .= "business_overview_list_description_a = :business_overview_list_description_a, ";
            $sql .= "business_overview_list_title_b = :business_overview_list_title_b, ";
            $sql .= "business_overview_list_description_b = :business_overview_list_description_b, ";
            $sql .= "business_overview_list_title_c = :business_overview_list_title_c, ";
            $sql .= "business_overview_list_description_c = :business_overview_list_description_c, ";
            $sql .= "business_overview_datetime = :business_overview_datetime ";
            $sql .= "where business_overview_aid = :business_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_overview_list_title_a" => $this->business_overview_list_title_a,
                "business_overview_list_description_a" => $this->business_overview_list_description_a,
                "business_overview_list_title_b" => $this->business_overview_list_title_b,
                "business_overview_list_description_b" => $this->business_overview_list_description_b,
                "business_overview_list_title_c" => $this->business_overview_list_title_c,
                "business_overview_list_description_c" => $this->business_overview_list_description_c,
                "business_overview_datetime" => $this->business_overview_datetime,
                "business_overview_aid" => $this->business_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
