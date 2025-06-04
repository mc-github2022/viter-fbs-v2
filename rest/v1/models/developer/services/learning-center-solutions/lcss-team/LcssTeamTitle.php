<?php

class LcssTeamTitle
{
    public $teams_title_aid;
    public $teams_title_substitle_a;
    public $teams_title_title;
    public $teams_title_substitle_b;
    public $teams_title_created;
    public $teams_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblLcssTeamTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLcssTeamTitle = "fbsv2_lcss_team_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLcssTeamTitle} ";
            $sql .= "order by teams_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLcssTeamTitle}";
            $sql .= "(teams_title_substitle_a, ";
            $sql .= "teams_title_title, ";
            $sql .= "teams_title_substitle_b, ";
            $sql .= "teams_title_created, ";
            $sql .= "teams_title_datetime ) values ( ";
            $sql .= ":teams_title_substitle_a, ";
            $sql .= ":teams_title_title, ";
            $sql .= ":teams_title_substitle_b, ";
            $sql .= ":teams_title_created, ";
            $sql .= ":teams_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teams_title_substitle_a" => $this->teams_title_substitle_a,
                "teams_title_title" => $this->teams_title_title,
                "teams_title_substitle_b" => $this->teams_title_substitle_b,
                "teams_title_created" => $this->teams_title_created,
                "teams_title_datetime" => $this->teams_title_datetime,
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
            $sql = "update {$this->tblLcssTeamTitle} set ";
            $sql .= "teams_title_substitle_a = :teams_title_substitle_a, ";
            $sql .= "teams_title_title = :teams_title_title, ";
            $sql .= "teams_title_substitle_b = :teams_title_substitle_b, ";
            $sql .= "teams_title_datetime = :teams_title_datetime ";
            $sql .= "where teams_title_aid = :teams_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "teams_title_substitle_a" => $this->teams_title_substitle_a,
                "teams_title_title" => $this->teams_title_title,
                "teams_title_substitle_b" => $this->teams_title_substitle_b,
                "teams_title_datetime" => $this->teams_title_datetime,
                "teams_title_aid" => $this->teams_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
