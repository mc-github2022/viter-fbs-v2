<?php

class GraphicTitles
{
    public $graphic_titles_aid;
    public $graphic_titles_overview_title;
    public $graphic_titles_testimonial_subtitle;
    public $graphic_titles_testimonial_title;
    public $graphic_titles_created;
    public $graphic_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblGraphicTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGraphicTitles = "fbsv2_services_graphic_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblGraphicTitles} ";
            $sql .= "order by graphic_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGraphicTitles}";
            $sql .= "(graphic_titles_overview_title, ";
            $sql .= "graphic_titles_created, ";
            $sql .= "graphic_titles_datetime ) values ( ";
            $sql .= ":graphic_titles_overview_title, ";
            $sql .= ":graphic_titles_created, ";
            $sql .= ":graphic_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_titles_overview_title" => $this->graphic_titles_overview_title,
                "graphic_titles_created" => $this->graphic_titles_created,
                "graphic_titles_datetime" => $this->graphic_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }



    public function createTestimonialTitle()
    {
        try {
            $sql = "insert into {$this->tblGraphicTitles}";
            $sql .= "(graphic_titles_testimonial_subtitle, ";
            $sql .= "graphic_titles_testimonial_title, ";
            $sql .= "graphic_titles_created, ";
            $sql .= "graphic_titles_datetime ) values ( ";
            $sql .= ":graphic_titles_testimonial_subtitle, ";
            $sql .= ":graphic_titles_testimonial_title, ";
            $sql .= ":graphic_titles_created, ";
            $sql .= ":graphic_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_titles_testimonial_subtitle" => $this->graphic_titles_testimonial_subtitle,
                "graphic_titles_testimonial_title" => $this->graphic_titles_testimonial_title,
                "graphic_titles_created" => $this->graphic_titles_created,
                "graphic_titles_datetime" => $this->graphic_titles_datetime,
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
            $sql = "update {$this->tblGraphicTitles} set ";
            $sql .= "graphic_titles_overview_title = :graphic_titles_overview_title, ";
            $sql .= "graphic_titles_datetime = :graphic_titles_datetime ";
            $sql .= "where graphic_titles_aid = :graphic_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_titles_overview_title" => $this->graphic_titles_overview_title,
                "graphic_titles_datetime" => $this->graphic_titles_datetime,
                "graphic_titles_aid" => $this->graphic_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblGraphicTitles} set ";
            $sql .= "graphic_titles_testimonial_subtitle = :graphic_titles_testimonial_subtitle, ";
            $sql .= "graphic_titles_testimonial_title = :graphic_titles_testimonial_title, ";
            $sql .= "graphic_titles_datetime = :graphic_titles_datetime ";
            $sql .= "where graphic_titles_aid = :graphic_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_titles_testimonial_subtitle" => $this->graphic_titles_testimonial_subtitle,
                "graphic_titles_testimonial_title" => $this->graphic_titles_testimonial_title,
                "graphic_titles_datetime" => $this->graphic_titles_datetime,
                "graphic_titles_aid" => $this->graphic_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
