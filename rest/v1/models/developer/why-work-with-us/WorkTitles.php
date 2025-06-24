<?php

class WorkTitles
{
    public $work_titles_aid;
    public $work_titles_partners_subtitle;
    public $work_titles_partners_title;
    public $work_titles_teams_subtitle;
    public $work_titles_teams_title;
    public $work_titles_created;
    public $work_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWorkTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorkTitles = "fbsv2_work_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWorkTitles} ";
            $sql .= "order by work_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWorkTitles}";
            $sql .= "(work_titles_partners_subtitle, ";
            $sql .= "work_titles_partners_title, ";
            $sql .= "work_titles_created, ";
            $sql .= "work_titles_datetime ) values ( ";
            $sql .= ":work_titles_partners_subtitle, ";
            $sql .= ":work_titles_partners_title, ";
            $sql .= ":work_titles_created, ";
            $sql .= ":work_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_titles_partners_subtitle" => $this->work_titles_partners_subtitle,
                "work_titles_partners_title" => $this->work_titles_partners_title,
                "work_titles_created" => $this->work_titles_created,
                "work_titles_datetime" => $this->work_titles_datetime,
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
            $sql = "update {$this->tblWorkTitles} set ";
            $sql .= "work_titles_partners_subtitle = :work_titles_partners_subtitle, ";
            $sql .= "work_titles_partners_title = :work_titles_partners_title, ";
            $sql .= "work_titles_datetime = :work_titles_datetime ";
            $sql .= "where work_titles_aid = :work_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_titles_partners_subtitle" => $this->work_titles_partners_subtitle,
                "work_titles_partners_title" => $this->work_titles_partners_title,
                "work_titles_datetime" => $this->work_titles_datetime,
                "work_titles_aid" => $this->work_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createTeamsTitle()
    {
        try {
            $sql = "insert into {$this->tblWorkTitles}";
            $sql .= "(work_titles_teams_subtitle, ";
            $sql .= "work_titles_teams_title, ";
            $sql .= "work_titles_created, ";
            $sql .= "work_titles_datetime ) values ( ";
            $sql .= ":work_titles_teams_subtitle, ";
            $sql .= ":work_titles_teams_title, ";
            $sql .= ":work_titles_created, ";
            $sql .= ":work_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_titles_teams_subtitle" => $this->work_titles_teams_subtitle,
                "work_titles_teams_title" => $this->work_titles_teams_title,
                "work_titles_created" => $this->work_titles_created,
                "work_titles_datetime" => $this->work_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateTeamsTitle()
    {
        try {
            $sql = "update {$this->tblWorkTitles} set ";
            $sql .= "work_titles_teams_subtitle = :work_titles_teams_subtitle, ";
            $sql .= "work_titles_teams_title = :work_titles_teams_title, ";
            $sql .= "work_titles_datetime = :work_titles_datetime ";
            $sql .= "where work_titles_aid = :work_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_titles_teams_subtitle" => $this->work_titles_teams_subtitle,
                "work_titles_teams_title" => $this->work_titles_teams_title,
                "work_titles_datetime" => $this->work_titles_datetime,
                "work_titles_aid" => $this->work_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
