<?php

class WebsiteOverview
{
    public $website_overview_aid;
    public $website_overview_subtitle;
    public $website_overview_title;
    public $website_overview_img;
    public $website_overview_file;
    public $website_overview_button_text;
    public $website_overview_list_title_a;
    public $website_overview_list_description_a;
    public $website_overview_list_title_b;
    public $website_overview_list_description_b;
    public $website_overview_list_title_c;
    public $website_overview_list_description_c;
    public $website_overview_created;
    public $website_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWebsiteOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebsiteOverview = "fbsv2_services_website_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWebsiteOverview} ";
            $sql .= "order by website_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebsiteOverview}";
            $sql .= "(website_overview_title, ";
            $sql .= "website_overview_subtitle, ";
            $sql .= "website_overview_img, ";
            $sql .= "website_overview_file, ";
            $sql .= "website_overview_button_text, ";
            $sql .= "website_overview_created, ";
            $sql .= "website_overview_datetime ) values ( ";
            $sql .= ":website_overview_title, ";
            $sql .= ":website_overview_subtitle, ";
            $sql .= ":website_overview_img, ";
            $sql .= ":website_overview_file, ";
            $sql .= ":website_overview_button_text, ";
            $sql .= ":website_overview_created, ";
            $sql .= ":website_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_overview_title" => $this->website_overview_title,
                "website_overview_subtitle" => $this->website_overview_subtitle,
                "website_overview_img" => $this->website_overview_img,
                "website_overview_file" => $this->website_overview_file,
                "website_overview_button_text" => $this->website_overview_button_text,
                "website_overview_created" => $this->website_overview_created,
                "website_overview_datetime" => $this->website_overview_datetime,
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
            $sql = "update {$this->tblWebsiteOverview} set ";
            $sql .= "website_overview_title = :website_overview_title, ";
            $sql .= "website_overview_subtitle = :website_overview_subtitle, ";
            $sql .= "website_overview_img = :website_overview_img, ";
            $sql .= "website_overview_file = :website_overview_file, ";
            $sql .= "website_overview_button_text = :website_overview_button_text, ";
            $sql .= "website_overview_datetime = :website_overview_datetime ";
            $sql .= "where website_overview_aid = :website_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_overview_title" => $this->website_overview_title,
                "website_overview_subtitle" => $this->website_overview_subtitle,
                "website_overview_img" => $this->website_overview_img,
                "website_overview_file" => $this->website_overview_file,
                "website_overview_button_text" => $this->website_overview_button_text,
                "website_overview_datetime" => $this->website_overview_datetime,
                "website_overview_aid" => $this->website_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblWebsiteOverview}";
            $sql .= "(website_overview_list_title_a, ";
            $sql .= "website_overview_list_description_a, ";
            $sql .= "website_overview_list_title_b, ";
            $sql .= "website_overview_list_description_b, ";
            $sql .= "website_overview_list_title_c, ";
            $sql .= "website_overview_list_description_c, ";
            $sql .= "website_overview_created, ";
            $sql .= "website_overview_datetime ) values ( ";
            $sql .= ":website_overview_list_title_a, ";
            $sql .= ":website_overview_list_description_a, ";
            $sql .= ":website_overview_list_title_b, ";
            $sql .= ":website_overview_list_description_b, ";
            $sql .= ":website_overview_list_title_c, ";
            $sql .= ":website_overview_list_description_c, ";
            $sql .= ":website_overview_created, ";
            $sql .= ":website_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_overview_list_title_a" => $this->website_overview_list_title_a,
                "website_overview_list_description_a" => $this->website_overview_list_description_a,
                "website_overview_list_title_b" => $this->website_overview_list_title_b,
                "website_overview_list_description_b" => $this->website_overview_list_description_b,
                "website_overview_list_title_c" => $this->website_overview_list_title_c,
                "website_overview_list_description_c" => $this->website_overview_list_description_c,
                "website_overview_created" => $this->website_overview_created,
                "website_overview_datetime" => $this->website_overview_datetime,
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
            $sql = "update {$this->tblWebsiteOverview} set ";
            $sql .= "website_overview_list_title_a = :website_overview_list_title_a, ";
            $sql .= "website_overview_list_description_a = :website_overview_list_description_a, ";
            $sql .= "website_overview_list_title_b = :website_overview_list_title_b, ";
            $sql .= "website_overview_list_description_b = :website_overview_list_description_b, ";
            $sql .= "website_overview_list_title_c = :website_overview_list_title_c, ";
            $sql .= "website_overview_list_description_c = :website_overview_list_description_c, ";
            $sql .= "website_overview_datetime = :website_overview_datetime ";
            $sql .= "where website_overview_aid = :website_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_overview_list_title_a" => $this->website_overview_list_title_a,
                "website_overview_list_description_a" => $this->website_overview_list_description_a,
                "website_overview_list_title_b" => $this->website_overview_list_title_b,
                "website_overview_list_description_b" => $this->website_overview_list_description_b,
                "website_overview_list_title_c" => $this->website_overview_list_title_c,
                "website_overview_list_description_c" => $this->website_overview_list_description_c,
                "website_overview_datetime" => $this->website_overview_datetime,
                "website_overview_aid" => $this->website_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
