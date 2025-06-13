<?php

class ContinuingApplyNow
{
    public $continuing_apply_aid;
    public $continuing_apply_subtitle;
    public $continuing_apply_title;
    public $continuing_apply_requirement_list;
    public $continuing_apply_other_details;
    public $continuing_apply_button_text;
    public $continuing_apply_img;
    public $continuing_apply_created;
    public $continuing_apply_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContinuingApplyNow;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContinuingApplyNow = "fbsv2_services_continuing_apply_now";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContinuingApplyNow} ";
            $sql .= "order by continuing_apply_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContinuingApplyNow}";
            $sql .= "(continuing_apply_subtitle, ";
            $sql .= "continuing_apply_title, ";
            $sql .= "continuing_apply_requirement_list, ";
            $sql .= "continuing_apply_other_details, ";
            $sql .= "continuing_apply_button_text, ";
            $sql .= "continuing_apply_img, ";
            $sql .= "continuing_apply_created, ";
            $sql .= "continuing_apply_datetime ) values ( ";
            $sql .= ":continuing_apply_subtitle, ";
            $sql .= ":continuing_apply_title, ";
            $sql .= ":continuing_apply_requirement_list, ";
            $sql .= ":continuing_apply_other_details, ";
            $sql .= ":continuing_apply_button_text, ";
            $sql .= ":continuing_apply_img, ";
            $sql .= ":continuing_apply_created, ";
            $sql .= ":continuing_apply_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_apply_subtitle" => $this->continuing_apply_subtitle,
                "continuing_apply_title" => $this->continuing_apply_title,
                "continuing_apply_requirement_list" => $this->continuing_apply_requirement_list,
                "continuing_apply_other_details" => $this->continuing_apply_other_details,
                "continuing_apply_button_text" => $this->continuing_apply_button_text,
                "continuing_apply_img" => $this->continuing_apply_img,
                "continuing_apply_created" => $this->continuing_apply_created,
                "continuing_apply_datetime" => $this->continuing_apply_datetime,
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
            $sql = "update {$this->tblContinuingApplyNow} set ";
            $sql .= "continuing_apply_subtitle = :continuing_apply_subtitle, ";
            $sql .= "continuing_apply_title = :continuing_apply_title, ";
            $sql .= "continuing_apply_requirement_list = :continuing_apply_requirement_list, ";
            $sql .= "continuing_apply_other_details = :continuing_apply_other_details, ";
            $sql .= "continuing_apply_button_text = :continuing_apply_button_text, ";
            $sql .= "continuing_apply_img = :continuing_apply_img, ";
            $sql .= "continuing_apply_datetime = :continuing_apply_datetime ";
            $sql .= "where continuing_apply_aid = :continuing_apply_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_apply_subtitle" => $this->continuing_apply_subtitle,
                "continuing_apply_title" => $this->continuing_apply_title,
                "continuing_apply_requirement_list" => $this->continuing_apply_requirement_list,
                "continuing_apply_other_details" => $this->continuing_apply_other_details,
                "continuing_apply_button_text" => $this->continuing_apply_button_text,
                "continuing_apply_img" => $this->continuing_apply_img,
                "continuing_apply_datetime" => $this->continuing_apply_datetime,
                "continuing_apply_aid" => $this->continuing_apply_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
