<?php

class GraphicOverview
{
    public $graphic_overview_aid;
    public $graphic_overview_subtitle_a;
    public $graphic_overview_subtitle_b;
    public $graphic_overview_title;
    public $graphic_overview_img;
    public $graphic_overview_button_text;
    public $graphic_overview_list_title_a;
    public $graphic_overview_list_description_a;
    public $graphic_overview_list_title_b;
    public $graphic_overview_list_description_b;
    public $graphic_overview_list_title_c;
    public $graphic_overview_list_description_c;
    public $graphic_overview_created;
    public $graphic_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblGraphicOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGraphicOverview = "fbsv2_services_graphic_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblGraphicOverview} ";
            $sql .= "order by graphic_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGraphicOverview}";
            $sql .= "(graphic_overview_title, ";
            $sql .= "graphic_overview_subtitle_a, ";
            $sql .= "graphic_overview_subtitle_b, ";
            $sql .= "graphic_overview_img, ";
            $sql .= "graphic_overview_button_text, ";
            $sql .= "graphic_overview_created, ";
            $sql .= "graphic_overview_datetime ) values ( ";
            $sql .= ":graphic_overview_title, ";
            $sql .= ":graphic_overview_subtitle_a, ";
            $sql .= ":graphic_overview_subtitle_b, ";
            $sql .= ":graphic_overview_img, ";
            $sql .= ":graphic_overview_button_text, ";
            $sql .= ":graphic_overview_created, ";
            $sql .= ":graphic_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_overview_title" => $this->graphic_overview_title,
                "graphic_overview_subtitle_a" => $this->graphic_overview_subtitle_a,
                "graphic_overview_subtitle_b" => $this->graphic_overview_subtitle_b,
                "graphic_overview_img" => $this->graphic_overview_img,
                "graphic_overview_button_text" => $this->graphic_overview_button_text,
                "graphic_overview_created" => $this->graphic_overview_created,
                "graphic_overview_datetime" => $this->graphic_overview_datetime,
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
            $sql = "update {$this->tblGraphicOverview} set ";
            $sql .= "graphic_overview_title = :graphic_overview_title, ";
            $sql .= "graphic_overview_subtitle_a = :graphic_overview_subtitle_a, ";
            $sql .= "graphic_overview_subtitle_b = :graphic_overview_subtitle_b, ";
            $sql .= "graphic_overview_img = :graphic_overview_img, ";
            $sql .= "graphic_overview_button_text = :graphic_overview_button_text, ";
            $sql .= "graphic_overview_datetime = :graphic_overview_datetime ";
            $sql .= "where graphic_overview_aid = :graphic_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_overview_title" => $this->graphic_overview_title,
                "graphic_overview_subtitle_a" => $this->graphic_overview_subtitle_a,
                "graphic_overview_subtitle_b" => $this->graphic_overview_subtitle_b,
                "graphic_overview_img" => $this->graphic_overview_img,
                "graphic_overview_button_text" => $this->graphic_overview_button_text,
                "graphic_overview_datetime" => $this->graphic_overview_datetime,
                "graphic_overview_aid" => $this->graphic_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblGraphicOverview}";
            $sql .= "(graphic_overview_list_title_a, ";
            $sql .= "graphic_overview_list_description_a, ";
            $sql .= "graphic_overview_list_title_b, ";
            $sql .= "graphic_overview_list_description_b, ";
            $sql .= "graphic_overview_list_title_c, ";
            $sql .= "graphic_overview_list_description_c, ";
            $sql .= "graphic_overview_created, ";
            $sql .= "graphic_overview_datetime ) values ( ";
            $sql .= ":graphic_overview_list_title_a, ";
            $sql .= ":graphic_overview_list_description_a, ";
            $sql .= ":graphic_overview_list_title_b, ";
            $sql .= ":graphic_overview_list_description_b, ";
            $sql .= ":graphic_overview_list_title_c, ";
            $sql .= ":graphic_overview_list_description_c, ";
            $sql .= ":graphic_overview_created, ";
            $sql .= ":graphic_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_overview_list_title_a" => $this->graphic_overview_list_title_a,
                "graphic_overview_list_description_a" => $this->graphic_overview_list_description_a,
                "graphic_overview_list_title_b" => $this->graphic_overview_list_title_b,
                "graphic_overview_list_description_b" => $this->graphic_overview_list_description_b,
                "graphic_overview_list_title_c" => $this->graphic_overview_list_title_c,
                "graphic_overview_list_description_c" => $this->graphic_overview_list_description_c,
                "graphic_overview_created" => $this->graphic_overview_created,
                "graphic_overview_datetime" => $this->graphic_overview_datetime,
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
            $sql = "update {$this->tblGraphicOverview} set ";
            $sql .= "graphic_overview_list_title_a = :graphic_overview_list_title_a, ";
            $sql .= "graphic_overview_list_description_a = :graphic_overview_list_description_a, ";
            $sql .= "graphic_overview_list_title_b = :graphic_overview_list_title_b, ";
            $sql .= "graphic_overview_list_description_b = :graphic_overview_list_description_b, ";
            $sql .= "graphic_overview_list_title_c = :graphic_overview_list_title_c, ";
            $sql .= "graphic_overview_list_description_c = :graphic_overview_list_description_c, ";
            $sql .= "graphic_overview_datetime = :graphic_overview_datetime ";
            $sql .= "where graphic_overview_aid = :graphic_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_overview_list_title_a" => $this->graphic_overview_list_title_a,
                "graphic_overview_list_description_a" => $this->graphic_overview_list_description_a,
                "graphic_overview_list_title_b" => $this->graphic_overview_list_title_b,
                "graphic_overview_list_description_b" => $this->graphic_overview_list_description_b,
                "graphic_overview_list_title_c" => $this->graphic_overview_list_title_c,
                "graphic_overview_list_description_c" => $this->graphic_overview_list_description_c,
                "graphic_overview_datetime" => $this->graphic_overview_datetime,
                "graphic_overview_aid" => $this->graphic_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
