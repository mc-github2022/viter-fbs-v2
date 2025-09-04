<?php

class SocialMediaOverview
{
    public $social_overview_aid;
    public $social_overview_subtitle;
    public $social_overview_title;
    public $social_overview_img;
    public $social_overview_list_title_a;
    public $social_overview_list_description_a;
    public $social_overview_list_title_b;
    public $social_overview_list_description_b;
    public $social_overview_list_title_c;
    public $social_overview_list_description_c;
    public $social_overview_list_title_d;
    public $social_overview_list_description_d;
    public $social_overview_created;
    public $social_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaOverview = "fbsv2_services_social_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaOverview} ";
            $sql .= "order by social_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaOverview}";
            $sql .= "(social_overview_title, ";
            $sql .= "social_overview_subtitle, ";
            $sql .= "social_overview_img, ";
            $sql .= "social_overview_created, ";
            $sql .= "social_overview_datetime ) values ( ";
            $sql .= ":social_overview_title, ";
            $sql .= ":social_overview_subtitle, ";
            $sql .= ":social_overview_img, ";
            $sql .= ":social_overview_created, ";
            $sql .= ":social_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_overview_title" => $this->social_overview_title,
                "social_overview_subtitle" => $this->social_overview_subtitle,
                "social_overview_img" => $this->social_overview_img,
                "social_overview_created" => $this->social_overview_created,
                "social_overview_datetime" => $this->social_overview_datetime,
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
            $sql = "update {$this->tblSocialMediaOverview} set ";
            $sql .= "social_overview_title = :social_overview_title, ";
            $sql .= "social_overview_subtitle = :social_overview_subtitle, ";
            $sql .= "social_overview_img = :social_overview_img, ";
            $sql .= "social_overview_datetime = :social_overview_datetime ";
            $sql .= "where social_overview_aid = :social_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_overview_title" => $this->social_overview_title,
                "social_overview_subtitle" => $this->social_overview_subtitle,
                "social_overview_img" => $this->social_overview_img,
                "social_overview_datetime" => $this->social_overview_datetime,
                "social_overview_aid" => $this->social_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaOverview}";
            $sql .= "(social_overview_list_title_a, ";
            $sql .= "social_overview_list_description_a, ";
            $sql .= "social_overview_list_title_b, ";
            $sql .= "social_overview_list_description_b, ";
            $sql .= "social_overview_list_title_c, ";
            $sql .= "social_overview_list_description_c, ";
            $sql .= "social_overview_created, ";
            $sql .= "social_overview_datetime ) values ( ";
            $sql .= ":social_overview_list_title_a, ";
            $sql .= ":social_overview_list_description_a, ";
            $sql .= ":social_overview_list_title_b, ";
            $sql .= ":social_overview_list_description_b, ";
            $sql .= ":social_overview_list_title_c, ";
            $sql .= ":social_overview_list_description_c, ";
            $sql .= ":social_overview_list_title_d, ";
            $sql .= ":social_overview_list_description_d, ";
            $sql .= ":social_overview_created, ";
            $sql .= ":social_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_overview_list_title_a" => $this->social_overview_list_title_a,
                "social_overview_list_description_a" => $this->social_overview_list_description_a,
                "social_overview_list_title_b" => $this->social_overview_list_title_b,
                "social_overview_list_description_b" => $this->social_overview_list_description_b,
                "social_overview_list_title_c" => $this->social_overview_list_title_c,
                "social_overview_list_description_c" => $this->social_overview_list_description_c,
                "social_overview_list_title_d" => $this->social_overview_list_title_d,
                "social_overview_list_description_d" => $this->social_overview_list_description_d,
                "social_overview_created" => $this->social_overview_created,
                "social_overview_datetime" => $this->social_overview_datetime,
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
            $sql = "update {$this->tblSocialMediaOverview} set ";
            $sql .= "social_overview_list_title_a = :social_overview_list_title_a, ";
            $sql .= "social_overview_list_description_a = :social_overview_list_description_a, ";
            $sql .= "social_overview_list_title_b = :social_overview_list_title_b, ";
            $sql .= "social_overview_list_description_b = :social_overview_list_description_b, ";
            $sql .= "social_overview_list_title_c = :social_overview_list_title_c, ";
            $sql .= "social_overview_list_description_c = :social_overview_list_description_c, ";
            $sql .= "social_overview_list_title_d = :social_overview_list_title_d, ";
            $sql .= "social_overview_list_description_d = :social_overview_list_description_d, ";
            $sql .= "social_overview_datetime = :social_overview_datetime ";
            $sql .= "where social_overview_aid = :social_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_overview_list_title_a" => $this->social_overview_list_title_a,
                "social_overview_list_description_a" => $this->social_overview_list_description_a,
                "social_overview_list_title_b" => $this->social_overview_list_title_b,
                "social_overview_list_description_b" => $this->social_overview_list_description_b,
                "social_overview_list_title_c" => $this->social_overview_list_title_c,
                "social_overview_list_description_c" => $this->social_overview_list_description_c,
                "social_overview_list_title_d" => $this->social_overview_list_title_d,
                "social_overview_list_description_d" => $this->social_overview_list_description_d,
                "social_overview_datetime" => $this->social_overview_datetime,
                "social_overview_aid" => $this->social_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
