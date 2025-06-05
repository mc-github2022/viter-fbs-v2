<?php

class ImmersionApplyNow
{
    public $immersion_apply_aid;
    public $immersion_apply_subtitle;
    public $immersion_apply_title;
    public $immersion_apply_requirement_list;
    public $immersion_apply_button_text;
    public $immersion_apply_img;
    public $immersion_apply_created;
    public $immersion_apply_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblImmersionApplyNow;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblImmersionApplyNow = "fbsv2_services_immersion_apply_now";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblImmersionApplyNow} ";
            $sql .= "order by immersion_apply_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblImmersionApplyNow}";
            $sql .= "(immersion_apply_subtitle, ";
            $sql .= "immersion_apply_title, ";
            $sql .= "immersion_apply_requirement_list, ";
            $sql .= "immersion_apply_button_text, ";
            $sql .= "immersion_apply_img, ";
            $sql .= "immersion_apply_created, ";
            $sql .= "immersion_apply_datetime ) values ( ";
            $sql .= ":immersion_apply_subtitle, ";
            $sql .= ":immersion_apply_title, ";
            $sql .= ":immersion_apply_requirement_list, ";
            $sql .= ":immersion_apply_button_text, ";
            $sql .= ":immersion_apply_img, ";
            $sql .= ":immersion_apply_created, ";
            $sql .= ":immersion_apply_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_apply_subtitle" => $this->immersion_apply_subtitle,
                "immersion_apply_title" => $this->immersion_apply_title,
                "immersion_apply_requirement_list" => $this->immersion_apply_requirement_list,
                "immersion_apply_button_text" => $this->immersion_apply_button_text,
                "immersion_apply_img" => $this->immersion_apply_img,
                "immersion_apply_created" => $this->immersion_apply_created,
                "immersion_apply_datetime" => $this->immersion_apply_datetime,
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
            $sql = "update {$this->tblImmersionApplyNow} set ";
            $sql .= "immersion_apply_subtitle = :immersion_apply_subtitle, ";
            $sql .= "immersion_apply_title = :immersion_apply_title, ";
            $sql .= "immersion_apply_requirement_list = :immersion_apply_requirement_list, ";
            $sql .= "immersion_apply_button_text = :immersion_apply_button_text, ";
            $sql .= "immersion_apply_img = :immersion_apply_img, ";
            $sql .= "immersion_apply_datetime = :immersion_apply_datetime ";
            $sql .= "where immersion_apply_aid = :immersion_apply_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_apply_subtitle" => $this->immersion_apply_subtitle,
                "immersion_apply_title" => $this->immersion_apply_title,
                "immersion_apply_requirement_list" => $this->immersion_apply_requirement_list,
                "immersion_apply_button_text" => $this->immersion_apply_button_text,
                "immersion_apply_img" => $this->immersion_apply_img,
                "immersion_apply_datetime" => $this->immersion_apply_datetime,
                "immersion_apply_aid" => $this->immersion_apply_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
