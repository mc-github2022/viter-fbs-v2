<?php

class OjtOverview
{
    public $ojt_overview_aid;
    public $ojt_overview_subtitle;
    public $ojt_overview_title;
    public $ojt_overview_img;
    public $ojt_overview_file;
    public $ojt_overview_button_text;
    public $ojt_overview_list_title_a;
    public $ojt_overview_list_description_a;
    public $ojt_overview_list_title_b;
    public $ojt_overview_list_description_b;
    public $ojt_overview_list_title_c;
    public $ojt_overview_list_description_c;
    public $ojt_overview_created;
    public $ojt_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblOjtOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOjtOverview = "fbsv2_services_ojt_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblOjtOverview} ";
            $sql .= "order by ojt_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblOjtOverview}";
            $sql .= "(ojt_overview_title, ";
            $sql .= "ojt_overview_subtitle, ";
            $sql .= "ojt_overview_img, ";
            $sql .= "ojt_overview_file, ";
            $sql .= "ojt_overview_button_text, ";
            $sql .= "ojt_overview_created, ";
            $sql .= "ojt_overview_datetime ) values ( ";
            $sql .= ":ojt_overview_title, ";
            $sql .= ":ojt_overview_subtitle, ";
            $sql .= ":ojt_overview_img, ";
            $sql .= ":ojt_overview_file, ";
            $sql .= ":ojt_overview_button_text, ";
            $sql .= ":ojt_overview_created, ";
            $sql .= ":ojt_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_overview_title" => $this->ojt_overview_title,
                "ojt_overview_subtitle" => $this->ojt_overview_subtitle,
                "ojt_overview_img" => $this->ojt_overview_img,
                "ojt_overview_file" => $this->ojt_overview_file,
                "ojt_overview_button_text" => $this->ojt_overview_button_text,
                "ojt_overview_created" => $this->ojt_overview_created,
                "ojt_overview_datetime" => $this->ojt_overview_datetime,
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
            $sql = "update {$this->tblOjtOverview} set ";
            $sql .= "ojt_overview_title = :ojt_overview_title, ";
            $sql .= "ojt_overview_subtitle = :ojt_overview_subtitle, ";
            $sql .= "ojt_overview_img = :ojt_overview_img, ";
            $sql .= "ojt_overview_file = :ojt_overview_file, ";
            $sql .= "ojt_overview_button_text = :ojt_overview_button_text, ";
            $sql .= "ojt_overview_datetime = :ojt_overview_datetime ";
            $sql .= "where ojt_overview_aid = :ojt_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_overview_title" => $this->ojt_overview_title,
                "ojt_overview_subtitle" => $this->ojt_overview_subtitle,
                "ojt_overview_img" => $this->ojt_overview_img,
                "ojt_overview_file" => $this->ojt_overview_file,
                "ojt_overview_button_text" => $this->ojt_overview_button_text,
                "ojt_overview_datetime" => $this->ojt_overview_datetime,
                "ojt_overview_aid" => $this->ojt_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblOjtOverview}";
            $sql .= "(ojt_overview_list_title_a, ";
            $sql .= "ojt_overview_list_description_a, ";
            $sql .= "ojt_overview_list_title_b, ";
            $sql .= "ojt_overview_list_description_b, ";
            $sql .= "ojt_overview_list_title_c, ";
            $sql .= "ojt_overview_list_description_c, ";
            $sql .= "ojt_overview_created, ";
            $sql .= "ojt_overview_datetime ) values ( ";
            $sql .= ":ojt_overview_list_title_a, ";
            $sql .= ":ojt_overview_list_description_a, ";
            $sql .= ":ojt_overview_list_title_b, ";
            $sql .= ":ojt_overview_list_description_b, ";
            $sql .= ":ojt_overview_list_title_c, ";
            $sql .= ":ojt_overview_list_description_c, ";
            $sql .= ":ojt_overview_created, ";
            $sql .= ":ojt_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_overview_list_title_a" => $this->ojt_overview_list_title_a,
                "ojt_overview_list_description_a" => $this->ojt_overview_list_description_a,
                "ojt_overview_list_title_b" => $this->ojt_overview_list_title_b,
                "ojt_overview_list_description_b" => $this->ojt_overview_list_description_b,
                "ojt_overview_list_title_c" => $this->ojt_overview_list_title_c,
                "ojt_overview_list_description_c" => $this->ojt_overview_list_description_c,
                "ojt_overview_created" => $this->ojt_overview_created,
                "ojt_overview_datetime" => $this->ojt_overview_datetime,
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
            $sql = "update {$this->tblOjtOverview} set ";
            $sql .= "ojt_overview_list_title_a = :ojt_overview_list_title_a, ";
            $sql .= "ojt_overview_list_description_a = :ojt_overview_list_description_a, ";
            $sql .= "ojt_overview_list_title_b = :ojt_overview_list_title_b, ";
            $sql .= "ojt_overview_list_description_b = :ojt_overview_list_description_b, ";
            $sql .= "ojt_overview_list_title_c = :ojt_overview_list_title_c, ";
            $sql .= "ojt_overview_list_description_c = :ojt_overview_list_description_c, ";
            $sql .= "ojt_overview_datetime = :ojt_overview_datetime ";
            $sql .= "where ojt_overview_aid = :ojt_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_overview_list_title_a" => $this->ojt_overview_list_title_a,
                "ojt_overview_list_description_a" => $this->ojt_overview_list_description_a,
                "ojt_overview_list_title_b" => $this->ojt_overview_list_title_b,
                "ojt_overview_list_description_b" => $this->ojt_overview_list_description_b,
                "ojt_overview_list_title_c" => $this->ojt_overview_list_title_c,
                "ojt_overview_list_description_c" => $this->ojt_overview_list_description_c,
                "ojt_overview_datetime" => $this->ojt_overview_datetime,
                "ojt_overview_aid" => $this->ojt_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
