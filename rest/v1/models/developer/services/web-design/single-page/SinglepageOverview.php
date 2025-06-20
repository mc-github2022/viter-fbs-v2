<?php

class SinglepageOverview
{
    public $singlepage_overview_aid;
    public $singlepage_overview_subtitle;
    public $singlepage_overview_title;
    public $singlepage_overview_img;
    public $singlepage_overview_file;
    public $singlepage_overview_button_text;
    public $singlepage_overview_list_title_a;
    public $singlepage_overview_list_description_a;
    public $singlepage_overview_list_title_b;
    public $singlepage_overview_list_description_b;
    public $singlepage_overview_list_title_c;
    public $singlepage_overview_list_description_c;
    public $singlepage_overview_created;
    public $singlepage_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSinglepageOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSinglepageOverview = "fbsv2_services_singlepage_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSinglepageOverview} ";
            $sql .= "order by singlepage_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSinglepageOverview}";
            $sql .= "(singlepage_overview_title, ";
            $sql .= "singlepage_overview_subtitle, ";
            $sql .= "singlepage_overview_img, ";
            $sql .= "singlepage_overview_file, ";
            $sql .= "singlepage_overview_button_text, ";
            $sql .= "singlepage_overview_created, ";
            $sql .= "singlepage_overview_datetime ) values ( ";
            $sql .= ":singlepage_overview_title, ";
            $sql .= ":singlepage_overview_subtitle, ";
            $sql .= ":singlepage_overview_img, ";
            $sql .= ":singlepage_overview_file, ";
            $sql .= ":singlepage_overview_button_text, ";
            $sql .= ":singlepage_overview_created, ";
            $sql .= ":singlepage_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_overview_title" => $this->singlepage_overview_title,
                "singlepage_overview_subtitle" => $this->singlepage_overview_subtitle,
                "singlepage_overview_img" => $this->singlepage_overview_img,
                "singlepage_overview_file" => $this->singlepage_overview_file,
                "singlepage_overview_button_text" => $this->singlepage_overview_button_text,
                "singlepage_overview_created" => $this->singlepage_overview_created,
                "singlepage_overview_datetime" => $this->singlepage_overview_datetime,
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
            $sql = "update {$this->tblSinglepageOverview} set ";
            $sql .= "singlepage_overview_title = :singlepage_overview_title, ";
            $sql .= "singlepage_overview_subtitle = :singlepage_overview_subtitle, ";
            $sql .= "singlepage_overview_img = :singlepage_overview_img, ";
            $sql .= "singlepage_overview_file = :singlepage_overview_file, ";
            $sql .= "singlepage_overview_button_text = :singlepage_overview_button_text, ";
            $sql .= "singlepage_overview_datetime = :singlepage_overview_datetime ";
            $sql .= "where singlepage_overview_aid = :singlepage_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_overview_title" => $this->singlepage_overview_title,
                "singlepage_overview_subtitle" => $this->singlepage_overview_subtitle,
                "singlepage_overview_img" => $this->singlepage_overview_img,
                "singlepage_overview_file" => $this->singlepage_overview_file,
                "singlepage_overview_button_text" => $this->singlepage_overview_button_text,
                "singlepage_overview_datetime" => $this->singlepage_overview_datetime,
                "singlepage_overview_aid" => $this->singlepage_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblSinglepageOverview}";
            $sql .= "(singlepage_overview_list_title_a, ";
            $sql .= "singlepage_overview_list_description_a, ";
            $sql .= "singlepage_overview_list_title_b, ";
            $sql .= "singlepage_overview_list_description_b, ";
            $sql .= "singlepage_overview_list_title_c, ";
            $sql .= "singlepage_overview_list_description_c, ";
            $sql .= "singlepage_overview_created, ";
            $sql .= "singlepage_overview_datetime ) values ( ";
            $sql .= ":singlepage_overview_list_title_a, ";
            $sql .= ":singlepage_overview_list_description_a, ";
            $sql .= ":singlepage_overview_list_title_b, ";
            $sql .= ":singlepage_overview_list_description_b, ";
            $sql .= ":singlepage_overview_list_title_c, ";
            $sql .= ":singlepage_overview_list_description_c, ";
            $sql .= ":singlepage_overview_created, ";
            $sql .= ":singlepage_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_overview_list_title_a" => $this->singlepage_overview_list_title_a,
                "singlepage_overview_list_description_a" => $this->singlepage_overview_list_description_a,
                "singlepage_overview_list_title_b" => $this->singlepage_overview_list_title_b,
                "singlepage_overview_list_description_b" => $this->singlepage_overview_list_description_b,
                "singlepage_overview_list_title_c" => $this->singlepage_overview_list_title_c,
                "singlepage_overview_list_description_c" => $this->singlepage_overview_list_description_c,
                "singlepage_overview_created" => $this->singlepage_overview_created,
                "singlepage_overview_datetime" => $this->singlepage_overview_datetime,
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
            $sql = "update {$this->tblSinglepageOverview} set ";
            $sql .= "singlepage_overview_list_title_a = :singlepage_overview_list_title_a, ";
            $sql .= "singlepage_overview_list_description_a = :singlepage_overview_list_description_a, ";
            $sql .= "singlepage_overview_list_title_b = :singlepage_overview_list_title_b, ";
            $sql .= "singlepage_overview_list_description_b = :singlepage_overview_list_description_b, ";
            $sql .= "singlepage_overview_list_title_c = :singlepage_overview_list_title_c, ";
            $sql .= "singlepage_overview_list_description_c = :singlepage_overview_list_description_c, ";
            $sql .= "singlepage_overview_datetime = :singlepage_overview_datetime ";
            $sql .= "where singlepage_overview_aid = :singlepage_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_overview_list_title_a" => $this->singlepage_overview_list_title_a,
                "singlepage_overview_list_description_a" => $this->singlepage_overview_list_description_a,
                "singlepage_overview_list_title_b" => $this->singlepage_overview_list_title_b,
                "singlepage_overview_list_description_b" => $this->singlepage_overview_list_description_b,
                "singlepage_overview_list_title_c" => $this->singlepage_overview_list_title_c,
                "singlepage_overview_list_description_c" => $this->singlepage_overview_list_description_c,
                "singlepage_overview_datetime" => $this->singlepage_overview_datetime,
                "singlepage_overview_aid" => $this->singlepage_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
