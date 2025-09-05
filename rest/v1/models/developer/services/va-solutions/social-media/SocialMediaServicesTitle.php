<?php

class SocialMediaServicesTitle
{
    public $social_services_title_aid;
    public $social_services_title_black_a;
    public $social_services_title_highlighted;
    public $social_services_title_black_b;
    public $social_services_title_description;
    public $social_services_title_button_text;
    public $social_services_title_created;
    public $social_services_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaServicesTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaServicesTitle = "fbsv2_services_social_services_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaServicesTitle} ";
            $sql .= "order by social_services_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaServicesTitle}";
            $sql .= "(social_services_title_black_a, ";
            $sql .= "social_services_title_highlighted, ";
            $sql .= "social_services_title_black_b, ";
            $sql .= "social_services_title_description, ";
            $sql .= "social_services_title_button_text, ";
            $sql .= "social_services_title_created, ";
            $sql .= "social_services_title_datetime ) values ( ";
            $sql .= ":social_services_title_black_a, ";
            $sql .= ":social_services_title_highlighted, ";
            $sql .= ":social_services_title_black_b, ";
            $sql .= ":social_services_title_description, ";
            $sql .= ":social_services_title_button_text, ";
            $sql .= ":social_services_title_created, ";
            $sql .= ":social_services_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_services_title_black_a" => $this->social_services_title_black_a,
                "social_services_title_highlighted" => $this->social_services_title_highlighted,
                "social_services_title_black_b" => $this->social_services_title_black_b,
                "social_services_title_description" => $this->social_services_title_description,
                "social_services_title_button_text" => $this->social_services_title_button_text,
                "social_services_title_created" => $this->social_services_title_created,
                "social_services_title_datetime" => $this->social_services_title_datetime,
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
            $sql = "update {$this->tblSocialMediaServicesTitle} set ";
            $sql .= "social_services_title_black_a = :social_services_title_black_a, ";
            $sql .= "social_services_title_highlighted = :social_services_title_highlighted, ";
            $sql .= "social_services_title_black_b = :social_services_title_black_b, ";
            $sql .= "social_services_title_description = :social_services_title_description, ";
            $sql .= "social_services_title_button_text = :social_services_title_button_text, ";
            $sql .= "social_services_title_datetime = :social_services_title_datetime ";
            $sql .= "where social_services_title_aid = :social_services_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_services_title_black_a" => $this->social_services_title_black_a,
                "social_services_title_highlighted" => $this->social_services_title_highlighted,
                "social_services_title_black_b" => $this->social_services_title_black_b,
                "social_services_title_description" => $this->social_services_title_description,
                "social_services_title_button_text" => $this->social_services_title_button_text,
                "social_services_title_datetime" => $this->social_services_title_datetime,
                "social_services_title_aid" => $this->social_services_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
