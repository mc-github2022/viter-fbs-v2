<?php

class BusinessServicesTitle
{
    public $business_services_title_aid;
    public $business_services_title_black_a;
    public $business_services_title_highlighted;
    public $business_services_title_black_b;
    public $business_services_title_description;
    public $business_services_title_button_text;
    public $business_services_title_created;
    public $business_services_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBusinessServicesTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBusinessServicesTitle = "fbsv2_services_business_services_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBusinessServicesTitle} ";
            $sql .= "order by business_services_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBusinessServicesTitle}";
            $sql .= "(business_services_title_black_a, ";
            $sql .= "business_services_title_highlighted, ";
            $sql .= "business_services_title_black_b, ";
            $sql .= "business_services_title_description, ";
            $sql .= "business_services_title_button_text, ";
            $sql .= "business_services_title_created, ";
            $sql .= "business_services_title_datetime ) values ( ";
            $sql .= ":business_services_title_black_a, ";
            $sql .= ":business_services_title_highlighted, ";
            $sql .= ":business_services_title_black_b, ";
            $sql .= ":business_services_title_description, ";
            $sql .= ":business_services_title_button_text, ";
            $sql .= ":business_services_title_created, ";
            $sql .= ":business_services_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_services_title_black_a" => $this->business_services_title_black_a,
                "business_services_title_highlighted" => $this->business_services_title_highlighted,
                "business_services_title_black_b" => $this->business_services_title_black_b,
                "business_services_title_description" => $this->business_services_title_description,
                "business_services_title_button_text" => $this->business_services_title_button_text,
                "business_services_title_created" => $this->business_services_title_created,
                "business_services_title_datetime" => $this->business_services_title_datetime,
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
            $sql = "update {$this->tblBusinessServicesTitle} set ";
            $sql .= "business_services_title_black_a = :business_services_title_black_a, ";
            $sql .= "business_services_title_highlighted = :business_services_title_highlighted, ";
            $sql .= "business_services_title_black_b = :business_services_title_black_b, ";
            $sql .= "business_services_title_description = :business_services_title_description, ";
            $sql .= "business_services_title_button_text = :business_services_title_button_text, ";
            $sql .= "business_services_title_datetime = :business_services_title_datetime ";
            $sql .= "where business_services_title_aid = :business_services_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "business_services_title_black_a" => $this->business_services_title_black_a,
                "business_services_title_highlighted" => $this->business_services_title_highlighted,
                "business_services_title_black_b" => $this->business_services_title_black_b,
                "business_services_title_description" => $this->business_services_title_description,
                "business_services_title_button_text" => $this->business_services_title_button_text,
                "business_services_title_datetime" => $this->business_services_title_datetime,
                "business_services_title_aid" => $this->business_services_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
