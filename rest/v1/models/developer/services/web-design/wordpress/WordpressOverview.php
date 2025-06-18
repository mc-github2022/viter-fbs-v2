<?php

class WordpressOverview
{
    public $wordpress_overview_aid;
    public $wordpress_overview_subtitle;
    public $wordpress_overview_title;
    public $wordpress_overview_img;
    public $wordpress_overview_button_text;
    public $wordpress_overview_list_title_a;
    public $wordpress_overview_list_description_a;
    public $wordpress_overview_list_title_b;
    public $wordpress_overview_list_description_b;
    public $wordpress_overview_list_title_c;
    public $wordpress_overview_list_description_c;
    public $wordpress_overview_created;
    public $wordpress_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWordpressOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWordpressOverview = "fbsv2_services_wordpress_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWordpressOverview} ";
            $sql .= "order by wordpress_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWordpressOverview}";
            $sql .= "(wordpress_overview_title, ";
            $sql .= "wordpress_overview_subtitle, ";
            $sql .= "wordpress_overview_img, ";
            $sql .= "wordpress_overview_button_text, ";
            $sql .= "wordpress_overview_created, ";
            $sql .= "wordpress_overview_datetime ) values ( ";
            $sql .= ":wordpress_overview_title, ";
            $sql .= ":wordpress_overview_subtitle, ";
            $sql .= ":wordpress_overview_img, ";
            $sql .= ":wordpress_overview_button_text, ";
            $sql .= ":wordpress_overview_created, ";
            $sql .= ":wordpress_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_overview_title" => $this->wordpress_overview_title,
                "wordpress_overview_subtitle" => $this->wordpress_overview_subtitle,
                "wordpress_overview_img" => $this->wordpress_overview_img,
                "wordpress_overview_button_text" => $this->wordpress_overview_button_text,
                "wordpress_overview_created" => $this->wordpress_overview_created,
                "wordpress_overview_datetime" => $this->wordpress_overview_datetime,
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
            $sql = "update {$this->tblWordpressOverview} set ";
            $sql .= "wordpress_overview_title = :wordpress_overview_title, ";
            $sql .= "wordpress_overview_subtitle = :wordpress_overview_subtitle, ";
            $sql .= "wordpress_overview_img = :wordpress_overview_img, ";
            $sql .= "wordpress_overview_button_text = :wordpress_overview_button_text, ";
            $sql .= "wordpress_overview_datetime = :wordpress_overview_datetime ";
            $sql .= "where wordpress_overview_aid = :wordpress_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_overview_title" => $this->wordpress_overview_title,
                "wordpress_overview_subtitle" => $this->wordpress_overview_subtitle,
                "wordpress_overview_img" => $this->wordpress_overview_img,
                "wordpress_overview_button_text" => $this->wordpress_overview_button_text,
                "wordpress_overview_datetime" => $this->wordpress_overview_datetime,
                "wordpress_overview_aid" => $this->wordpress_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblWordpressOverview}";
            $sql .= "(wordpress_overview_list_title_a, ";
            $sql .= "wordpress_overview_list_description_a, ";
            $sql .= "wordpress_overview_list_title_b, ";
            $sql .= "wordpress_overview_list_description_b, ";
            $sql .= "wordpress_overview_list_title_c, ";
            $sql .= "wordpress_overview_list_description_c, ";
            $sql .= "wordpress_overview_created, ";
            $sql .= "wordpress_overview_datetime ) values ( ";
            $sql .= ":wordpress_overview_list_title_a, ";
            $sql .= ":wordpress_overview_list_description_a, ";
            $sql .= ":wordpress_overview_list_title_b, ";
            $sql .= ":wordpress_overview_list_description_b, ";
            $sql .= ":wordpress_overview_list_title_c, ";
            $sql .= ":wordpress_overview_list_description_c, ";
            $sql .= ":wordpress_overview_created, ";
            $sql .= ":wordpress_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_overview_list_title_a" => $this->wordpress_overview_list_title_a,
                "wordpress_overview_list_description_a" => $this->wordpress_overview_list_description_a,
                "wordpress_overview_list_title_b" => $this->wordpress_overview_list_title_b,
                "wordpress_overview_list_description_b" => $this->wordpress_overview_list_description_b,
                "wordpress_overview_list_title_c" => $this->wordpress_overview_list_title_c,
                "wordpress_overview_list_description_c" => $this->wordpress_overview_list_description_c,
                "wordpress_overview_created" => $this->wordpress_overview_created,
                "wordpress_overview_datetime" => $this->wordpress_overview_datetime,
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
            $sql = "update {$this->tblWordpressOverview} set ";
            $sql .= "wordpress_overview_list_title_a = :wordpress_overview_list_title_a, ";
            $sql .= "wordpress_overview_list_description_a = :wordpress_overview_list_description_a, ";
            $sql .= "wordpress_overview_list_title_b = :wordpress_overview_list_title_b, ";
            $sql .= "wordpress_overview_list_description_b = :wordpress_overview_list_description_b, ";
            $sql .= "wordpress_overview_list_title_c = :wordpress_overview_list_title_c, ";
            $sql .= "wordpress_overview_list_description_c = :wordpress_overview_list_description_c, ";
            $sql .= "wordpress_overview_datetime = :wordpress_overview_datetime ";
            $sql .= "where wordpress_overview_aid = :wordpress_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_overview_list_title_a" => $this->wordpress_overview_list_title_a,
                "wordpress_overview_list_description_a" => $this->wordpress_overview_list_description_a,
                "wordpress_overview_list_title_b" => $this->wordpress_overview_list_title_b,
                "wordpress_overview_list_description_b" => $this->wordpress_overview_list_description_b,
                "wordpress_overview_list_title_c" => $this->wordpress_overview_list_title_c,
                "wordpress_overview_list_description_c" => $this->wordpress_overview_list_description_c,
                "wordpress_overview_datetime" => $this->wordpress_overview_datetime,
                "wordpress_overview_aid" => $this->wordpress_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
