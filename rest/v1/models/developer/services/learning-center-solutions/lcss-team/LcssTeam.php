<?php

class LcssTeam
{
    public $lcss_teams_aid;
    public $lcss_teams_img;
    public $lcss_teams_name;
    public $lcss_teams_role;
    public $lcss_teams_position;
    public $lcss_teams_email;
    public $lcss_teams_created;
    public $lcss_teams_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblLcssTeam;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLcssTeam = "fbsv2_lcss_team";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLcssTeam} ";
            $sql .= "order by lcss_teams_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLcssTeam}";
            $sql .= "(lcss_teams_img, ";
            $sql .= "lcss_teams_name, ";
            $sql .= "lcss_teams_role, ";
            $sql .= "lcss_teams_position, ";
            $sql .= "lcss_teams_email, ";
            $sql .= "lcss_teams_created, ";
            $sql .= "lcss_teams_datetime ) values ( ";
            $sql .= ":lcss_teams_img, ";
            $sql .= ":lcss_teams_name, ";
            $sql .= ":lcss_teams_role, ";
            $sql .= ":lcss_teams_position, ";
            $sql .= ":lcss_teams_email, ";
            $sql .= ":lcss_teams_created, ";
            $sql .= ":lcss_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_teams_img" => $this->lcss_teams_img,
                "lcss_teams_name" => $this->lcss_teams_name,
                "lcss_teams_role" => $this->lcss_teams_role,
                "lcss_teams_position" => $this->lcss_teams_position,
                "lcss_teams_email" => $this->lcss_teams_email,
                "lcss_teams_created" => $this->lcss_teams_created,
                "lcss_teams_datetime" => $this->lcss_teams_datetime,
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
            $sql = "update {$this->tblLcssTeam} set ";
            $sql .= "lcss_teams_img = :lcss_teams_img, ";
            $sql .= "lcss_teams_name = :lcss_teams_name, ";
            $sql .= "lcss_teams_role = :lcss_teams_role, ";
            $sql .= "lcss_teams_position = :lcss_teams_position, ";
            $sql .= "lcss_teams_email = :lcss_teams_email, ";
            $sql .= "lcss_teams_datetime = :lcss_teams_datetime ";
            $sql .= "where lcss_teams_aid = :lcss_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_teams_img" => $this->lcss_teams_img,
                "lcss_teams_name" => $this->lcss_teams_name,
                "lcss_teams_role" => $this->lcss_teams_role,
                "lcss_teams_position" => $this->lcss_teams_position,
                "lcss_teams_email" => $this->lcss_teams_email,
                "lcss_teams_datetime" => $this->lcss_teams_datetime,
                "lcss_teams_aid" => $this->lcss_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLcssTeam} ";
            $sql .= "where lcss_teams_aid = :lcss_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_teams_aid" => $this->lcss_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
