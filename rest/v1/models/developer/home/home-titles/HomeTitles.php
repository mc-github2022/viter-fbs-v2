<?php

class HomeTitles
{
    public $title_aid;
    public $title_testimonial_a;
    public $title_testimonial_b;
    public $title_description;
    public $title_partners_a;
    public $title_partners_b;
    public $title_partners_description;
    public $title_subtitle_insights_a;
    public $title_subtitle_insights_b;
    public $title_insights;
    public $title_created;
    public $title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHomeTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHomeTitles = "fbsv2_home_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHomeTitles} ";
            $sql .= "order by title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHomeTitles}";
            $sql .= "(title_testimonial_a, ";
            $sql .= "title_testimonial_b, ";
            $sql .= "title_description, ";
            $sql .= "title_created, ";
            $sql .= "title_datetime ) values ( ";
            $sql .= ":title_testimonial_a, ";
            $sql .= ":title_testimonial_b, ";
            $sql .= ":title_description, ";
            $sql .= ":title_created, ";
            $sql .= ":title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_testimonial_a" => $this->title_testimonial_a,
                "title_testimonial_b" => $this->title_testimonial_b,
                "title_description" => $this->title_description,
                "title_created" => $this->title_created,
                "title_datetime" => $this->title_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPartnersTitle()
    {
        try {
            $sql = "insert into {$this->tblHomeTitles}";
            $sql .= "(title_partners_a, ";
            $sql .= "title_partners_b, ";
            $sql .= "title_partners_description, ";
            $sql .= "title_created, ";
            $sql .= "title_datetime ) values ( ";
            $sql .= ":title_partners_a, ";
            $sql .= ":title_partners_b, ";
            $sql .= ":title_partners_description, ";
            $sql .= ":title_created, ";
            $sql .= ":title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_partners_a" => $this->title_partners_a,
                "title_partners_b" => $this->title_partners_b,
                "title_partners_description" => $this->title_partners_description,
                "title_created" => $this->title_created,
                "title_datetime" => $this->title_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createInsightsTitle()
    {
        try {
            $sql = "insert into {$this->tblHomeTitles}";
            $sql .= "(title_subtitle_insights_a, ";
            $sql .= "title_subtitle_insights_b, ";
            $sql .= "title_insights, ";
            $sql .= "title_created, ";
            $sql .= "title_datetime ) values ( ";
            $sql .= ":title_subtitle_insights_a, ";
            $sql .= ":title_subtitle_insights_b, ";
            $sql .= ":title_insights, ";
            $sql .= ":title_created, ";
            $sql .= ":title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_subtitle_insights_a" => $this->title_subtitle_insights_a,
                "title_subtitle_insights_b" => $this->title_subtitle_insights_b,
                "title_insights" => $this->title_insights,
                "title_created" => $this->title_created,
                "title_datetime" => $this->title_datetime,
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
            $sql = "update {$this->tblHomeTitles} set ";
            $sql .= "title_testimonial_a = :title_testimonial_a, ";
            $sql .= "title_testimonial_b = :title_testimonial_b, ";
            $sql .= "title_description = :title_description, ";
            $sql .= "title_datetime = :title_datetime ";
            $sql .= "where title_aid = :title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_testimonial_a" => $this->title_testimonial_a,
                "title_testimonial_b" => $this->title_testimonial_b,
                "title_description" => $this->title_description,
                "title_datetime" => $this->title_datetime,
                "title_aid" => $this->title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnersTitle()
    {
        try {
            $sql = "update {$this->tblHomeTitles} set ";
            $sql .= "title_partners_a = :title_partners_a, ";
            $sql .= "title_partners_b = :title_partners_b, ";
            $sql .= "title_partners_description = :title_partners_description, ";
            $sql .= "title_datetime = :title_datetime ";
            $sql .= "where title_aid = :title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_partners_a" => $this->title_partners_a,
                "title_partners_b" => $this->title_partners_b,
                "title_partners_description" => $this->title_partners_description,
                "title_datetime" => $this->title_datetime,
                "title_aid" => $this->title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateInsightsTitle()
    {
        try {
            $sql = "update {$this->tblHomeTitles} set ";
            $sql .= "title_subtitle_insights_a = :title_subtitle_insights_a, ";
            $sql .= "title_subtitle_insights_b = :title_subtitle_insights_b, ";
            $sql .= "title_insights = :title_insights, ";
            $sql .= "title_datetime = :title_datetime ";
            $sql .= "where title_aid = :title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "title_subtitle_insights_a" => $this->title_subtitle_insights_a,
                "title_subtitle_insights_b" => $this->title_subtitle_insights_b,
                "title_insights" => $this->title_insights,
                "title_datetime" => $this->title_datetime,
                "title_aid" => $this->title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
