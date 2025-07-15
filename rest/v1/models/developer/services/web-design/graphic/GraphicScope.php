<?php

class GraphicScope
{
    public $graphic_scope_aid;
    public $graphic_scope_title;
    public $graphic_scope_desc;
    public $graphic_scope_img;
    public $graphic_scope_button_text;
    public $graphic_scope_created;
    public $graphic_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblGraphicScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGraphicScope = "fbsv2_services_graphic_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblGraphicScope} ";
            $sql .= "order by graphic_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGraphicScope}";
            $sql .= "(graphic_scope_title, ";
            $sql .= "graphic_scope_desc, ";
            $sql .= "graphic_scope_img, ";
            $sql .= "graphic_scope_button_text, ";
            $sql .= "graphic_scope_created, ";
            $sql .= "graphic_scope_datetime ) values ( ";
            $sql .= ":graphic_scope_title, ";
            $sql .= ":graphic_scope_desc, ";
            $sql .= ":graphic_scope_img, ";
            $sql .= ":graphic_scope_button_text, ";
            $sql .= ":graphic_scope_created, ";
            $sql .= ":graphic_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_scope_title" => $this->graphic_scope_title,
                "graphic_scope_desc" => $this->graphic_scope_desc,
                "graphic_scope_img" => $this->graphic_scope_img,
                "graphic_scope_button_text" => $this->graphic_scope_button_text,
                "graphic_scope_created" => $this->graphic_scope_created,
                "graphic_scope_datetime" => $this->graphic_scope_datetime,
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
            $sql = "update {$this->tblGraphicScope} set ";
            $sql .= "graphic_scope_title = :graphic_scope_title, ";
            $sql .= "graphic_scope_desc = :graphic_scope_desc, ";
            $sql .= "graphic_scope_img = :graphic_scope_img, ";
            $sql .= "graphic_scope_button_text = :graphic_scope_button_text, ";
            $sql .= "graphic_scope_datetime = :graphic_scope_datetime ";
            $sql .= "where graphic_scope_aid = :graphic_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_scope_title" => $this->graphic_scope_title,
                "graphic_scope_desc" => $this->graphic_scope_desc,
                "graphic_scope_img" => $this->graphic_scope_img,
                "graphic_scope_button_text" => $this->graphic_scope_button_text,
                "graphic_scope_datetime" => $this->graphic_scope_datetime,
                "graphic_scope_aid" => $this->graphic_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblGraphicScope} ";
            $sql .= "where graphic_scope_aid = :graphic_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "graphic_scope_aid" => $this->graphic_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
