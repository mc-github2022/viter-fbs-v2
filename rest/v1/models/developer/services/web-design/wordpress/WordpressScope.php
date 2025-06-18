<?php

class WordpressScope
{
    public $wordpress_scope_aid;
    public $wordpress_scope_title;
    public $wordpress_scope_desc;
    public $wordpress_scope_img;
    public $wordpress_scope_button_text;
    public $wordpress_scope_created;
    public $wordpress_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWordpressScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWordpressScope = "fbsv2_services_wordpress_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWordpressScope} ";
            $sql .= "order by wordpress_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWordpressScope}";
            $sql .= "(wordpress_scope_title, ";
            $sql .= "wordpress_scope_desc, ";
            $sql .= "wordpress_scope_img, ";
            $sql .= "wordpress_scope_button_text, ";
            $sql .= "wordpress_scope_created, ";
            $sql .= "wordpress_scope_datetime ) values ( ";
            $sql .= ":wordpress_scope_title, ";
            $sql .= ":wordpress_scope_desc, ";
            $sql .= ":wordpress_scope_img, ";
            $sql .= ":wordpress_scope_button_text, ";
            $sql .= ":wordpress_scope_created, ";
            $sql .= ":wordpress_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_scope_title" => $this->wordpress_scope_title,
                "wordpress_scope_desc" => $this->wordpress_scope_desc,
                "wordpress_scope_img" => $this->wordpress_scope_img,
                "wordpress_scope_button_text" => $this->wordpress_scope_button_text,
                "wordpress_scope_created" => $this->wordpress_scope_created,
                "wordpress_scope_datetime" => $this->wordpress_scope_datetime,
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
            $sql = "update {$this->tblWordpressScope} set ";
            $sql .= "wordpress_scope_title = :wordpress_scope_title, ";
            $sql .= "wordpress_scope_desc = :wordpress_scope_desc, ";
            $sql .= "wordpress_scope_img = :wordpress_scope_img, ";
            $sql .= "wordpress_scope_button_text = :wordpress_scope_button_text, ";
            $sql .= "wordpress_scope_datetime = :wordpress_scope_datetime ";
            $sql .= "where wordpress_scope_aid = :wordpress_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_scope_title" => $this->wordpress_scope_title,
                "wordpress_scope_desc" => $this->wordpress_scope_desc,
                "wordpress_scope_img" => $this->wordpress_scope_img,
                "wordpress_scope_button_text" => $this->wordpress_scope_button_text,
                "wordpress_scope_datetime" => $this->wordpress_scope_datetime,
                "wordpress_scope_aid" => $this->wordpress_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblWordpressScope} ";
            $sql .= "where wordpress_scope_aid = :wordpress_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_scope_aid" => $this->wordpress_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
