<?php

class SocialMediaScope
{
    public $social_scope_aid;
    public $social_scope_title;
    public $social_scope_desc;
    public $social_scope_img;
    public $social_scope_button_text;
    public $social_scope_created;
    public $social_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSocialMediaScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSocialMediaScope = "fbsv2_services_social_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSocialMediaScope} ";
            $sql .= "order by social_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSocialMediaScope}";
            $sql .= "(social_scope_title, ";
            $sql .= "social_scope_desc, ";
            $sql .= "social_scope_img, ";
            $sql .= "social_scope_button_text, ";
            $sql .= "social_scope_created, ";
            $sql .= "social_scope_datetime ) values ( ";
            $sql .= ":social_scope_title, ";
            $sql .= ":social_scope_desc, ";
            $sql .= ":social_scope_img, ";
            $sql .= ":social_scope_button_text, ";
            $sql .= ":social_scope_created, ";
            $sql .= ":social_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_scope_title" => $this->social_scope_title,
                "social_scope_desc" => $this->social_scope_desc,
                "social_scope_img" => $this->social_scope_img,
                "social_scope_button_text" => $this->social_scope_button_text,
                "social_scope_created" => $this->social_scope_created,
                "social_scope_datetime" => $this->social_scope_datetime,
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
            $sql = "update {$this->tblSocialMediaScope} set ";
            $sql .= "social_scope_title = :social_scope_title, ";
            $sql .= "social_scope_desc = :social_scope_desc, ";
            $sql .= "social_scope_img = :social_scope_img, ";
            $sql .= "social_scope_button_text = :social_scope_button_text, ";
            $sql .= "social_scope_datetime = :social_scope_datetime ";
            $sql .= "where social_scope_aid = :social_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_scope_title" => $this->social_scope_title,
                "social_scope_desc" => $this->social_scope_desc,
                "social_scope_img" => $this->social_scope_img,
                "social_scope_button_text" => $this->social_scope_button_text,
                "social_scope_datetime" => $this->social_scope_datetime,
                "social_scope_aid" => $this->social_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSocialMediaScope} ";
            $sql .= "where social_scope_aid = :social_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "social_scope_aid" => $this->social_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
