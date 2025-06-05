<?php

class ImmersionOverview
{
    public $immersion_overview_aid;
    public $immersion_overview_subtitle;
    public $immersion_overview_title;
    public $immersion_overview_img;
    public $immersion_overview_file;
    public $immersion_overview_button_text;
    public $immersion_overview_list_title_a;
    public $immersion_overview_list_description_a;
    public $immersion_overview_list_title_b;
    public $immersion_overview_list_description_b;
    public $immersion_overview_list_title_c;
    public $immersion_overview_list_description_c;
    public $immersion_overview_created;
    public $immersion_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblImmersionOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblImmersionOverview = "fbsv2_services_immersion_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblImmersionOverview} ";
            $sql .= "order by immersion_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblImmersionOverview}";
            $sql .= "(immersion_overview_title, ";
            $sql .= "immersion_overview_subtitle, ";
            $sql .= "immersion_overview_img, ";
            $sql .= "immersion_overview_file, ";
            $sql .= "immersion_overview_button_text, ";
            $sql .= "immersion_overview_created, ";
            $sql .= "immersion_overview_datetime ) values ( ";
            $sql .= ":immersion_overview_title, ";
            $sql .= ":immersion_overview_subtitle, ";
            $sql .= ":immersion_overview_img, ";
            $sql .= ":immersion_overview_file, ";
            $sql .= ":immersion_overview_button_text, ";
            $sql .= ":immersion_overview_created, ";
            $sql .= ":immersion_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_overview_title" => $this->immersion_overview_title,
                "immersion_overview_subtitle" => $this->immersion_overview_subtitle,
                "immersion_overview_img" => $this->immersion_overview_img,
                "immersion_overview_file" => $this->immersion_overview_file,
                "immersion_overview_button_text" => $this->immersion_overview_button_text,
                "immersion_overview_created" => $this->immersion_overview_created,
                "immersion_overview_datetime" => $this->immersion_overview_datetime,
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
            $sql = "update {$this->tblImmersionOverview} set ";
            $sql .= "immersion_overview_title = :immersion_overview_title, ";
            $sql .= "immersion_overview_subtitle = :immersion_overview_subtitle, ";
            $sql .= "immersion_overview_img = :immersion_overview_img, ";
            $sql .= "immersion_overview_file = :immersion_overview_file, ";
            $sql .= "immersion_overview_button_text = :immersion_overview_button_text, ";
            $sql .= "immersion_overview_datetime = :immersion_overview_datetime ";
            $sql .= "where immersion_overview_aid = :immersion_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_overview_title" => $this->immersion_overview_title,
                "immersion_overview_subtitle" => $this->immersion_overview_subtitle,
                "immersion_overview_img" => $this->immersion_overview_img,
                "immersion_overview_file" => $this->immersion_overview_file,
                "immersion_overview_button_text" => $this->immersion_overview_button_text,
                "immersion_overview_datetime" => $this->immersion_overview_datetime,
                "immersion_overview_aid" => $this->immersion_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblImmersionOverview}";
            $sql .= "(immersion_overview_list_title_a, ";
            $sql .= "immersion_overview_list_description_a, ";
            $sql .= "immersion_overview_list_title_b, ";
            $sql .= "immersion_overview_list_description_b, ";
            $sql .= "immersion_overview_list_title_c, ";
            $sql .= "immersion_overview_list_description_c, ";
            $sql .= "immersion_overview_created, ";
            $sql .= "immersion_overview_datetime ) values ( ";
            $sql .= ":immersion_overview_list_title_a, ";
            $sql .= ":immersion_overview_list_description_a, ";
            $sql .= ":immersion_overview_list_title_b, ";
            $sql .= ":immersion_overview_list_description_b, ";
            $sql .= ":immersion_overview_list_title_c, ";
            $sql .= ":immersion_overview_list_description_c, ";
            $sql .= ":immersion_overview_created, ";
            $sql .= ":immersion_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_overview_list_title_a" => $this->immersion_overview_list_title_a,
                "immersion_overview_list_description_a" => $this->immersion_overview_list_description_a,
                "immersion_overview_list_title_b" => $this->immersion_overview_list_title_b,
                "immersion_overview_list_description_b" => $this->immersion_overview_list_description_b,
                "immersion_overview_list_title_c" => $this->immersion_overview_list_title_c,
                "immersion_overview_list_description_c" => $this->immersion_overview_list_description_c,
                "immersion_overview_created" => $this->immersion_overview_created,
                "immersion_overview_datetime" => $this->immersion_overview_datetime,
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
            $sql = "update {$this->tblImmersionOverview} set ";
            $sql .= "immersion_overview_list_title_a = :immersion_overview_list_title_a, ";
            $sql .= "immersion_overview_list_description_a = :immersion_overview_list_description_a, ";
            $sql .= "immersion_overview_list_title_b = :immersion_overview_list_title_b, ";
            $sql .= "immersion_overview_list_description_b = :immersion_overview_list_description_b, ";
            $sql .= "immersion_overview_list_title_c = :immersion_overview_list_title_c, ";
            $sql .= "immersion_overview_list_description_c = :immersion_overview_list_description_c, ";
            $sql .= "immersion_overview_datetime = :immersion_overview_datetime ";
            $sql .= "where immersion_overview_aid = :immersion_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_overview_list_title_a" => $this->immersion_overview_list_title_a,
                "immersion_overview_list_description_a" => $this->immersion_overview_list_description_a,
                "immersion_overview_list_title_b" => $this->immersion_overview_list_title_b,
                "immersion_overview_list_description_b" => $this->immersion_overview_list_description_b,
                "immersion_overview_list_title_c" => $this->immersion_overview_list_title_c,
                "immersion_overview_list_description_c" => $this->immersion_overview_list_description_c,
                "immersion_overview_datetime" => $this->immersion_overview_datetime,
                "immersion_overview_aid" => $this->immersion_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
