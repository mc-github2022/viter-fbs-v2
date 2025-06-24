<?php

class WorkVisionMission
{
    public $work_vision_aid;
    public $work_vision_subtitle;
    public $work_vision_title;
    public $work_vision_vision_title;
    public $work_vision_vision_desc;
    public $work_vision_mission_title;
    public $work_vision_mission_desc;
    public $work_vision_core_title;
    public $work_vision_core_list;
    public $work_vision_created;
    public $work_vision_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWorkVisionMission;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorkVisionMission = "fbsv2_work_vision_mission";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWorkVisionMission} ";
            $sql .= "order by work_vision_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWorkVisionMission}";
            $sql .= "(work_vision_subtitle, ";
            $sql .= "work_vision_title, ";
            $sql .= "work_vision_created, ";
            $sql .= "work_vision_datetime ) values ( ";
            $sql .= ":work_vision_subtitle, ";
            $sql .= ":work_vision_title, ";
            $sql .= ":work_vision_created, ";
            $sql .= ":work_vision_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_subtitle" => $this->work_vision_subtitle,
                "work_vision_title" => $this->work_vision_title,
                "work_vision_created" => $this->work_vision_created,
                "work_vision_datetime" => $this->work_vision_datetime,
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
            $sql = "update {$this->tblWorkVisionMission} set ";
            $sql .= "work_vision_subtitle = :work_vision_subtitle, ";
            $sql .= "work_vision_title = :work_vision_title, ";
            $sql .= "work_vision_datetime = :work_vision_datetime ";
            $sql .= "where work_vision_aid = :work_vision_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_subtitle" => $this->work_vision_subtitle,
                "work_vision_title" => $this->work_vision_title,
                "work_vision_datetime" => $this->work_vision_datetime,
                "work_vision_aid" => $this->work_vision_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createVision()
    {
        try {
            $sql = "insert into {$this->tblWorkVisionMission}";
            $sql .= "(work_vision_vision_title, ";
            $sql .= "work_vision_vision_desc, ";
            $sql .= "work_vision_created, ";
            $sql .= "work_vision_datetime ) values ( ";
            $sql .= ":work_vision_vision_title, ";
            $sql .= ":work_vision_vision_desc, ";
            $sql .= ":work_vision_created, ";
            $sql .= ":work_vision_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_vision_title" => $this->work_vision_vision_title,
                "work_vision_vision_desc" => $this->work_vision_vision_desc,
                "work_vision_created" => $this->work_vision_created,
                "work_vision_datetime" => $this->work_vision_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateVision()
    {
        try {
            $sql = "update {$this->tblWorkVisionMission} set ";
            $sql .= "work_vision_vision_title = :work_vision_vision_title, ";
            $sql .= "work_vision_vision_desc = :work_vision_vision_desc, ";
            $sql .= "work_vision_datetime = :work_vision_datetime ";
            $sql .= "where work_vision_aid = :work_vision_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_vision_title" => $this->work_vision_vision_title,
                "work_vision_vision_desc" => $this->work_vision_vision_desc,
                "work_vision_datetime" => $this->work_vision_datetime,
                "work_vision_aid" => $this->work_vision_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createMission()
    {
        try {
            $sql = "insert into {$this->tblWorkVisionMission}";
            $sql .= "(work_vision_mission_title, ";
            $sql .= "work_vision_mission_desc, ";
            $sql .= "work_vision_created, ";
            $sql .= "work_vision_datetime ) values ( ";
            $sql .= ":work_vision_mission_title, ";
            $sql .= ":work_vision_mission_desc, ";
            $sql .= ":work_vision_created, ";
            $sql .= ":work_vision_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_mission_title" => $this->work_vision_mission_title,
                "work_vision_mission_desc" => $this->work_vision_mission_desc,
                "work_vision_created" => $this->work_vision_created,
                "work_vision_datetime" => $this->work_vision_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateMission()
    {
        try {
            $sql = "update {$this->tblWorkVisionMission} set ";
            $sql .= "work_vision_mission_title = :work_vision_mission_title, ";
            $sql .= "work_vision_mission_desc = :work_vision_mission_desc, ";
            $sql .= "work_vision_datetime = :work_vision_datetime ";
            $sql .= "where work_vision_aid = :work_vision_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_mission_title" => $this->work_vision_mission_title,
                "work_vision_mission_desc" => $this->work_vision_mission_desc,
                "work_vision_datetime" => $this->work_vision_datetime,
                "work_vision_aid" => $this->work_vision_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCoreValues()
    {
        try {
            $sql = "insert into {$this->tblWorkVisionMission}";
            $sql .= "(work_vision_core_title, ";
            $sql .= "work_vision_core_list, ";
            $sql .= "work_vision_created, ";
            $sql .= "work_vision_datetime ) values ( ";
            $sql .= ":work_vision_core_title, ";
            $sql .= ":work_vision_core_list, ";
            $sql .= ":work_vision_created, ";
            $sql .= ":work_vision_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_core_title" => $this->work_vision_core_title,
                "work_vision_core_list" => $this->work_vision_core_list,
                "work_vision_created" => $this->work_vision_created,
                "work_vision_datetime" => $this->work_vision_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCoreValues()
    {
        try {
            $sql = "update {$this->tblWorkVisionMission} set ";
            $sql .= "work_vision_core_title = :work_vision_core_title, ";
            $sql .= "work_vision_core_list = :work_vision_core_list, ";
            $sql .= "work_vision_datetime = :work_vision_datetime ";
            $sql .= "where work_vision_aid = :work_vision_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_vision_core_title" => $this->work_vision_core_title,
                "work_vision_core_list" => $this->work_vision_core_list,
                "work_vision_datetime" => $this->work_vision_datetime,
                "work_vision_aid" => $this->work_vision_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
