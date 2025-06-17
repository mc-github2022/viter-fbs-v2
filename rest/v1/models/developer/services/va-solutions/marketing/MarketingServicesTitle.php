<?php

class MarketingServicesTitle
{
    public $marketing_services_title_aid;
    public $marketing_services_title_black_a;
    public $marketing_services_title_highlighted;
    public $marketing_services_title_black_b;
    public $marketing_services_title_description;
    public $marketing_services_title_button_text;
    public $marketing_services_title_created;
    public $marketing_services_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblMarketingServicesTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMarketingServicesTitle = "fbsv2_services_marketing_services_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblMarketingServicesTitle} ";
            $sql .= "order by marketing_services_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblMarketingServicesTitle}";
            $sql .= "(marketing_services_title_black_a, ";
            $sql .= "marketing_services_title_highlighted, ";
            $sql .= "marketing_services_title_black_b, ";
            $sql .= "marketing_services_title_description, ";
            $sql .= "marketing_services_title_button_text, ";
            $sql .= "marketing_services_title_created, ";
            $sql .= "marketing_services_title_datetime ) values ( ";
            $sql .= ":marketing_services_title_black_a, ";
            $sql .= ":marketing_services_title_highlighted, ";
            $sql .= ":marketing_services_title_black_b, ";
            $sql .= ":marketing_services_title_description, ";
            $sql .= ":marketing_services_title_button_text, ";
            $sql .= ":marketing_services_title_created, ";
            $sql .= ":marketing_services_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_services_title_black_a" => $this->marketing_services_title_black_a,
                "marketing_services_title_highlighted" => $this->marketing_services_title_highlighted,
                "marketing_services_title_black_b" => $this->marketing_services_title_black_b,
                "marketing_services_title_description" => $this->marketing_services_title_description,
                "marketing_services_title_button_text" => $this->marketing_services_title_button_text,
                "marketing_services_title_created" => $this->marketing_services_title_created,
                "marketing_services_title_datetime" => $this->marketing_services_title_datetime,
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
            $sql = "update {$this->tblMarketingServicesTitle} set ";
            $sql .= "marketing_services_title_black_a = :marketing_services_title_black_a, ";
            $sql .= "marketing_services_title_highlighted = :marketing_services_title_highlighted, ";
            $sql .= "marketing_services_title_black_b = :marketing_services_title_black_b, ";
            $sql .= "marketing_services_title_description = :marketing_services_title_description, ";
            $sql .= "marketing_services_title_button_text = :marketing_services_title_button_text, ";
            $sql .= "marketing_services_title_datetime = :marketing_services_title_datetime ";
            $sql .= "where marketing_services_title_aid = :marketing_services_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "marketing_services_title_black_a" => $this->marketing_services_title_black_a,
                "marketing_services_title_highlighted" => $this->marketing_services_title_highlighted,
                "marketing_services_title_black_b" => $this->marketing_services_title_black_b,
                "marketing_services_title_description" => $this->marketing_services_title_description,
                "marketing_services_title_button_text" => $this->marketing_services_title_button_text,
                "marketing_services_title_datetime" => $this->marketing_services_title_datetime,
                "marketing_services_title_aid" => $this->marketing_services_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
