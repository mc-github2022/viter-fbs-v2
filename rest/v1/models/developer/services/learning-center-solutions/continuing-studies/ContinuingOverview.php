<?php

class ContinuingOverview
{
    public $continuing_overview_aid;
    public $continuing_overview_subtitle;
    public $continuing_overview_title;
    public $continuing_overview_img;
    public $continuing_overview_button_text;
    public $continuing_overview_list_title_a;
    public $continuing_overview_list_description_a;
    public $continuing_overview_list_title_b;
    public $continuing_overview_list_description_b;
    public $continuing_overview_list_title_c;
    public $continuing_overview_list_description_c;
    public $continuing_overview_created;
    public $continuing_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContinuingOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContinuingOverview = "fbsv2_services_continuing_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContinuingOverview} ";
            $sql .= "order by continuing_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContinuingOverview}";
            $sql .= "(continuing_overview_title, ";
            $sql .= "continuing_overview_subtitle, ";
            $sql .= "continuing_overview_img, ";
            $sql .= "continuing_overview_button_text, ";
            $sql .= "continuing_overview_created, ";
            $sql .= "continuing_overview_datetime ) values ( ";
            $sql .= ":continuing_overview_title, ";
            $sql .= ":continuing_overview_subtitle, ";
            $sql .= ":continuing_overview_img, ";
            $sql .= ":continuing_overview_button_text, ";
            $sql .= ":continuing_overview_created, ";
            $sql .= ":continuing_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_overview_title" => $this->continuing_overview_title,
                "continuing_overview_subtitle" => $this->continuing_overview_subtitle,
                "continuing_overview_img" => $this->continuing_overview_img,
                "continuing_overview_button_text" => $this->continuing_overview_button_text,
                "continuing_overview_created" => $this->continuing_overview_created,
                "continuing_overview_datetime" => $this->continuing_overview_datetime,
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
            $sql = "update {$this->tblContinuingOverview} set ";
            $sql .= "continuing_overview_title = :continuing_overview_title, ";
            $sql .= "continuing_overview_subtitle = :continuing_overview_subtitle, ";
            $sql .= "continuing_overview_img = :continuing_overview_img, ";
            $sql .= "continuing_overview_button_text = :continuing_overview_button_text, ";
            $sql .= "continuing_overview_datetime = :continuing_overview_datetime ";
            $sql .= "where continuing_overview_aid = :continuing_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_overview_title" => $this->continuing_overview_title,
                "continuing_overview_subtitle" => $this->continuing_overview_subtitle,
                "continuing_overview_img" => $this->continuing_overview_img,
                "continuing_overview_button_text" => $this->continuing_overview_button_text,
                "continuing_overview_datetime" => $this->continuing_overview_datetime,
                "continuing_overview_aid" => $this->continuing_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblContinuingOverview}";
            $sql .= "(continuing_overview_list_title_a, ";
            $sql .= "continuing_overview_list_description_a, ";
            $sql .= "continuing_overview_list_title_b, ";
            $sql .= "continuing_overview_list_description_b, ";
            $sql .= "continuing_overview_list_title_c, ";
            $sql .= "continuing_overview_list_description_c, ";
            $sql .= "continuing_overview_created, ";
            $sql .= "continuing_overview_datetime ) values ( ";
            $sql .= ":continuing_overview_list_title_a, ";
            $sql .= ":continuing_overview_list_description_a, ";
            $sql .= ":continuing_overview_list_title_b, ";
            $sql .= ":continuing_overview_list_description_b, ";
            $sql .= ":continuing_overview_list_title_c, ";
            $sql .= ":continuing_overview_list_description_c, ";
            $sql .= ":continuing_overview_created, ";
            $sql .= ":continuing_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_overview_list_title_a" => $this->continuing_overview_list_title_a,
                "continuing_overview_list_description_a" => $this->continuing_overview_list_description_a,
                "continuing_overview_list_title_b" => $this->continuing_overview_list_title_b,
                "continuing_overview_list_description_b" => $this->continuing_overview_list_description_b,
                "continuing_overview_list_title_c" => $this->continuing_overview_list_title_c,
                "continuing_overview_list_description_c" => $this->continuing_overview_list_description_c,
                "continuing_overview_created" => $this->continuing_overview_created,
                "continuing_overview_datetime" => $this->continuing_overview_datetime,
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
            $sql = "update {$this->tblContinuingOverview} set ";
            $sql .= "continuing_overview_list_title_a = :continuing_overview_list_title_a, ";
            $sql .= "continuing_overview_list_description_a = :continuing_overview_list_description_a, ";
            $sql .= "continuing_overview_list_title_b = :continuing_overview_list_title_b, ";
            $sql .= "continuing_overview_list_description_b = :continuing_overview_list_description_b, ";
            $sql .= "continuing_overview_list_title_c = :continuing_overview_list_title_c, ";
            $sql .= "continuing_overview_list_description_c = :continuing_overview_list_description_c, ";
            $sql .= "continuing_overview_datetime = :continuing_overview_datetime ";
            $sql .= "where continuing_overview_aid = :continuing_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_overview_list_title_a" => $this->continuing_overview_list_title_a,
                "continuing_overview_list_description_a" => $this->continuing_overview_list_description_a,
                "continuing_overview_list_title_b" => $this->continuing_overview_list_title_b,
                "continuing_overview_list_description_b" => $this->continuing_overview_list_description_b,
                "continuing_overview_list_title_c" => $this->continuing_overview_list_title_c,
                "continuing_overview_list_description_c" => $this->continuing_overview_list_description_c,
                "continuing_overview_datetime" => $this->continuing_overview_datetime,
                "continuing_overview_aid" => $this->continuing_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
