<?php

class AdministrativeServicesTitle
{
    public $administrative_services_title_aid;
    public $administrative_services_title_black_a;
    public $administrative_services_title_highlighted;
    public $administrative_services_title_black_b;
    public $administrative_services_title_description;
    public $administrative_services_title_button_text;
    public $administrative_services_title_created;
    public $administrative_services_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAdministrativeServicesTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAdministrativeServicesTitle = "fbsv2_services_administrative_services_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAdministrativeServicesTitle} ";
            $sql .= "order by administrative_services_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAdministrativeServicesTitle}";
            $sql .= "(administrative_services_title_black_a, ";
            $sql .= "administrative_services_title_highlighted, ";
            $sql .= "administrative_services_title_black_b, ";
            $sql .= "administrative_services_title_description, ";
            $sql .= "administrative_services_title_button_text, ";
            $sql .= "administrative_services_title_created, ";
            $sql .= "administrative_services_title_datetime ) values ( ";
            $sql .= ":administrative_services_title_black_a, ";
            $sql .= ":administrative_services_title_highlighted, ";
            $sql .= ":administrative_services_title_black_b, ";
            $sql .= ":administrative_services_title_description, ";
            $sql .= ":administrative_services_title_button_text, ";
            $sql .= ":administrative_services_title_created, ";
            $sql .= ":administrative_services_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_services_title_black_a" => $this->administrative_services_title_black_a,
                "administrative_services_title_highlighted" => $this->administrative_services_title_highlighted,
                "administrative_services_title_black_b" => $this->administrative_services_title_black_b,
                "administrative_services_title_description" => $this->administrative_services_title_description,
                "administrative_services_title_button_text" => $this->administrative_services_title_button_text,
                "administrative_services_title_created" => $this->administrative_services_title_created,
                "administrative_services_title_datetime" => $this->administrative_services_title_datetime,
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
            $sql = "update {$this->tblAdministrativeServicesTitle} set ";
            $sql .= "administrative_services_title_black_a = :administrative_services_title_black_a, ";
            $sql .= "administrative_services_title_highlighted = :administrative_services_title_highlighted, ";
            $sql .= "administrative_services_title_black_b = :administrative_services_title_black_b, ";
            $sql .= "administrative_services_title_description = :administrative_services_title_description, ";
            $sql .= "administrative_services_title_button_text = :administrative_services_title_button_text, ";
            $sql .= "administrative_services_title_datetime = :administrative_services_title_datetime ";
            $sql .= "where administrative_services_title_aid = :administrative_services_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "administrative_services_title_black_a" => $this->administrative_services_title_black_a,
                "administrative_services_title_highlighted" => $this->administrative_services_title_highlighted,
                "administrative_services_title_black_b" => $this->administrative_services_title_black_b,
                "administrative_services_title_description" => $this->administrative_services_title_description,
                "administrative_services_title_button_text" => $this->administrative_services_title_button_text,
                "administrative_services_title_datetime" => $this->administrative_services_title_datetime,
                "administrative_services_title_aid" => $this->administrative_services_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
