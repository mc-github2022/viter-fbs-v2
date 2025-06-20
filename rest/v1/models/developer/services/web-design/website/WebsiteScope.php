<?php

class WebsiteScope
{
    public $website_scope_aid;
    public $website_scope_title;
    public $website_scope_desc;
    public $website_scope_img;
    public $website_scope_button_text;
    public $website_scope_created;
    public $website_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWebsiteScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWebsiteScope = "fbsv2_services_website_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWebsiteScope} ";
            $sql .= "order by website_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWebsiteScope}";
            $sql .= "(website_scope_title, ";
            $sql .= "website_scope_desc, ";
            $sql .= "website_scope_img, ";
            $sql .= "website_scope_button_text, ";
            $sql .= "website_scope_created, ";
            $sql .= "website_scope_datetime ) values ( ";
            $sql .= ":website_scope_title, ";
            $sql .= ":website_scope_desc, ";
            $sql .= ":website_scope_img, ";
            $sql .= ":website_scope_button_text, ";
            $sql .= ":website_scope_created, ";
            $sql .= ":website_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_scope_title" => $this->website_scope_title,
                "website_scope_desc" => $this->website_scope_desc,
                "website_scope_img" => $this->website_scope_img,
                "website_scope_button_text" => $this->website_scope_button_text,
                "website_scope_created" => $this->website_scope_created,
                "website_scope_datetime" => $this->website_scope_datetime,
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
            $sql = "update {$this->tblWebsiteScope} set ";
            $sql .= "website_scope_title = :website_scope_title, ";
            $sql .= "website_scope_desc = :website_scope_desc, ";
            $sql .= "website_scope_img = :website_scope_img, ";
            $sql .= "website_scope_button_text = :website_scope_button_text, ";
            $sql .= "website_scope_datetime = :website_scope_datetime ";
            $sql .= "where website_scope_aid = :website_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_scope_title" => $this->website_scope_title,
                "website_scope_desc" => $this->website_scope_desc,
                "website_scope_img" => $this->website_scope_img,
                "website_scope_button_text" => $this->website_scope_button_text,
                "website_scope_datetime" => $this->website_scope_datetime,
                "website_scope_aid" => $this->website_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblWebsiteScope} ";
            $sql .= "where website_scope_aid = :website_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "website_scope_aid" => $this->website_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
