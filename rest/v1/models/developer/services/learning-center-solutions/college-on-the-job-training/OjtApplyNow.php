<?php

class OjtApplyNow
{
    public $ojt_apply_aid;
    public $ojt_apply_subtitle;
    public $ojt_apply_title;
    public $ojt_apply_requirement_list;
    public $ojt_apply_button_text;
    public $ojt_apply_img;
    public $ojt_apply_created;
    public $ojt_apply_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblOjtApplyNow;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOjtApplyNow = "fbsv2_services_ojt_apply_now";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblOjtApplyNow} ";
            $sql .= "order by ojt_apply_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblOjtApplyNow}";
            $sql .= "(ojt_apply_subtitle, ";
            $sql .= "ojt_apply_title, ";
            $sql .= "ojt_apply_requirement_list, ";
            $sql .= "ojt_apply_button_text, ";
            $sql .= "ojt_apply_img, ";
            $sql .= "ojt_apply_created, ";
            $sql .= "ojt_apply_datetime ) values ( ";
            $sql .= ":ojt_apply_subtitle, ";
            $sql .= ":ojt_apply_title, ";
            $sql .= ":ojt_apply_requirement_list, ";
            $sql .= ":ojt_apply_button_text, ";
            $sql .= ":ojt_apply_img, ";
            $sql .= ":ojt_apply_created, ";
            $sql .= ":ojt_apply_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_apply_subtitle" => $this->ojt_apply_subtitle,
                "ojt_apply_title" => $this->ojt_apply_title,
                "ojt_apply_requirement_list" => $this->ojt_apply_requirement_list,
                "ojt_apply_button_text" => $this->ojt_apply_button_text,
                "ojt_apply_img" => $this->ojt_apply_img,
                "ojt_apply_created" => $this->ojt_apply_created,
                "ojt_apply_datetime" => $this->ojt_apply_datetime,
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
            $sql = "update {$this->tblOjtApplyNow} set ";
            $sql .= "ojt_apply_subtitle = :ojt_apply_subtitle, ";
            $sql .= "ojt_apply_title = :ojt_apply_title, ";
            $sql .= "ojt_apply_requirement_list = :ojt_apply_requirement_list, ";
            $sql .= "ojt_apply_button_text = :ojt_apply_button_text, ";
            $sql .= "ojt_apply_img = :ojt_apply_img, ";
            $sql .= "ojt_apply_datetime = :ojt_apply_datetime ";
            $sql .= "where ojt_apply_aid = :ojt_apply_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_apply_subtitle" => $this->ojt_apply_subtitle,
                "ojt_apply_title" => $this->ojt_apply_title,
                "ojt_apply_requirement_list" => $this->ojt_apply_requirement_list,
                "ojt_apply_button_text" => $this->ojt_apply_button_text,
                "ojt_apply_img" => $this->ojt_apply_img,
                "ojt_apply_datetime" => $this->ojt_apply_datetime,
                "ojt_apply_aid" => $this->ojt_apply_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
