<?php

class Insights
{
    public $home_insights_aid;
    public $home_insights_is_active;
    public $home_insights_img;
    public $home_insights_category;
    public $home_insights_title;
    public $home_insights_slug;
    public $home_insights_date;
    public $home_insights_paragraph_a;
    public $home_insights_paragraph_b;
    public $home_insights_paragraph_c;
    public $home_insights_created;
    public $home_insights_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblInsights;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblInsights = "fbsv2_home_insights";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblInsights} ";
            $sql .= "order by home_insights_aid desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblInsights}";
            $sql .= "(home_insights_is_active, ";
            $sql .= "home_insights_img, ";
            $sql .= "home_insights_category, ";
            $sql .= "home_insights_title, ";
            $sql .= "home_insights_slug, ";
            $sql .= "home_insights_date, ";
            $sql .= "home_insights_paragraph_a, ";
            $sql .= "home_insights_paragraph_b, ";
            $sql .= "home_insights_paragraph_c, ";
            $sql .= "home_insights_created, ";
            $sql .= "home_insights_datetime ) values ( ";
            $sql .= ":home_insights_is_active, ";
            $sql .= ":home_insights_img, ";
            $sql .= ":home_insights_category, ";
            $sql .= ":home_insights_title, ";
            $sql .= ":home_insights_slug, ";
            $sql .= ":home_insights_date, ";
            $sql .= ":home_insights_paragraph_a, ";
            $sql .= ":home_insights_paragraph_b, ";
            $sql .= ":home_insights_paragraph_c, ";
            $sql .= ":home_insights_created, ";
            $sql .= ":home_insights_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_insights_is_active" => $this->home_insights_is_active,
                "home_insights_img" => $this->home_insights_img,
                "home_insights_category" => $this->home_insights_category,
                "home_insights_title" => $this->home_insights_title,
                "home_insights_slug" => $this->home_insights_slug,
                "home_insights_date" => $this->home_insights_date,
                "home_insights_paragraph_a" => $this->home_insights_paragraph_a,
                "home_insights_paragraph_b" => $this->home_insights_paragraph_b,
                "home_insights_paragraph_c" => $this->home_insights_paragraph_c,
                "home_insights_created" => $this->home_insights_created,
                "home_insights_datetime" => $this->home_insights_datetime,
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
            $sql = "update {$this->tblInsights} set ";
            $sql .= "home_insights_is_active = :home_insights_is_active, ";
            $sql .= "home_insights_img = :home_insights_img, ";
            $sql .= "home_insights_category = :home_insights_category, ";
            $sql .= "home_insights_title = :home_insights_title, ";
            $sql .= "home_insights_slug = :home_insights_slug, ";
            $sql .= "home_insights_date = :home_insights_date, ";
            $sql .= "home_insights_paragraph_a = :home_insights_paragraph_a, ";
            $sql .= "home_insights_paragraph_b = :home_insights_paragraph_b, ";
            $sql .= "home_insights_paragraph_c = :home_insights_paragraph_c, ";
            $sql .= "home_insights_datetime = :home_insights_datetime ";
            $sql .= "where home_insights_aid = :home_insights_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_insights_is_active" => $this->home_insights_is_active,
                "home_insights_img" => $this->home_insights_img,
                "home_insights_category" => $this->home_insights_category,
                "home_insights_title" => $this->home_insights_title,
                "home_insights_slug" => $this->home_insights_slug,
                "home_insights_date" => $this->home_insights_date,
                "home_insights_paragraph_a" => $this->home_insights_paragraph_a,
                "home_insights_paragraph_b" => $this->home_insights_paragraph_b,
                "home_insights_paragraph_c" => $this->home_insights_paragraph_c,
                "home_insights_datetime" => $this->home_insights_datetime,
                "home_insights_aid" => $this->home_insights_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblInsights} ";
            $sql .= "where home_insights_aid = :home_insights_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_insights_aid" => $this->home_insights_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblInsights} set ";
            $sql .= "home_insights_is_active = :home_insights_is_active, ";
            $sql .= "home_insights_datetime = :home_insights_datetime ";
            $sql .= "where home_insights_aid = :home_insights_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_insights_is_active" => $this->home_insights_is_active,
                "home_insights_datetime" => $this->home_insights_datetime,
                "home_insights_aid" => $this->home_insights_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}
