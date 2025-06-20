<?php

class SinglepageScope
{
    public $singlepage_scope_aid;
    public $singlepage_scope_title;
    public $singlepage_scope_desc;
    public $singlepage_scope_img;
    public $singlepage_scope_button_text;
    public $singlepage_scope_created;
    public $singlepage_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSinglepageScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSinglepageScope = "fbsv2_services_singlepage_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSinglepageScope} ";
            $sql .= "order by singlepage_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSinglepageScope}";
            $sql .= "(singlepage_scope_title, ";
            $sql .= "singlepage_scope_desc, ";
            $sql .= "singlepage_scope_img, ";
            $sql .= "singlepage_scope_button_text, ";
            $sql .= "singlepage_scope_created, ";
            $sql .= "singlepage_scope_datetime ) values ( ";
            $sql .= ":singlepage_scope_title, ";
            $sql .= ":singlepage_scope_desc, ";
            $sql .= ":singlepage_scope_img, ";
            $sql .= ":singlepage_scope_button_text, ";
            $sql .= ":singlepage_scope_created, ";
            $sql .= ":singlepage_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_scope_title" => $this->singlepage_scope_title,
                "singlepage_scope_desc" => $this->singlepage_scope_desc,
                "singlepage_scope_img" => $this->singlepage_scope_img,
                "singlepage_scope_button_text" => $this->singlepage_scope_button_text,
                "singlepage_scope_created" => $this->singlepage_scope_created,
                "singlepage_scope_datetime" => $this->singlepage_scope_datetime,
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
            $sql = "update {$this->tblSinglepageScope} set ";
            $sql .= "singlepage_scope_title = :singlepage_scope_title, ";
            $sql .= "singlepage_scope_desc = :singlepage_scope_desc, ";
            $sql .= "singlepage_scope_img = :singlepage_scope_img, ";
            $sql .= "singlepage_scope_button_text = :singlepage_scope_button_text, ";
            $sql .= "singlepage_scope_datetime = :singlepage_scope_datetime ";
            $sql .= "where singlepage_scope_aid = :singlepage_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_scope_title" => $this->singlepage_scope_title,
                "singlepage_scope_desc" => $this->singlepage_scope_desc,
                "singlepage_scope_img" => $this->singlepage_scope_img,
                "singlepage_scope_button_text" => $this->singlepage_scope_button_text,
                "singlepage_scope_datetime" => $this->singlepage_scope_datetime,
                "singlepage_scope_aid" => $this->singlepage_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSinglepageScope} ";
            $sql .= "where singlepage_scope_aid = :singlepage_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "singlepage_scope_aid" => $this->singlepage_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
