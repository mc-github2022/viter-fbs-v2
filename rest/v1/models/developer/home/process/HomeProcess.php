<?php

class HomeProcess
{
    public $process_aid;
    public $process_subtitle;
    public $process_title;
    public $process_title_a;
    public $process_title_b;
    public $process_title_c;
    public $process_title_d;
    public $process_description_a;
    public $process_description_b;
    public $process_description_c;
    public $process_description_d;
    public $process_created;
    public $process_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHomeProcess;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHomeProcess = "fbsv2_home_process";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHomeProcess} ";
            $sql .= "order by process_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHomeProcess}";
            $sql .= "(process_subtitle, ";
            $sql .= "process_title, ";
            $sql .= "process_created, ";
            $sql .= "process_datetime ) values ( ";
            $sql .= ":process_subtitle, ";
            $sql .= ":process_title, ";
            $sql .= ":process_created, ";
            $sql .= ":process_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_subtitle" => $this->process_subtitle,
                "process_title" => $this->process_title,
                "process_created" => $this->process_created,
                "process_datetime" => $this->process_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createProcessA()
    {
        try {
            $sql = "insert into {$this->tblHomeProcess}";
            $sql .= "(process_title_a, ";
            $sql .= "process_description_a, ";
            $sql .= "process_created, ";
            $sql .= "process_datetime ) values ( ";
            $sql .= ":process_title_a, ";
            $sql .= ":process_description_a, ";
            $sql .= ":process_created, ";
            $sql .= ":process_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_a" => $this->process_title_a,
                "process_description_a" => $this->process_description_a,
                "process_created" => $this->process_created,
                "process_datetime" => $this->process_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createProcessB()
    {
        try {
            $sql = "insert into {$this->tblHomeProcess}";
            $sql .= "(process_title_b, ";
            $sql .= "process_description_b, ";
            $sql .= "process_created, ";
            $sql .= "process_datetime ) values ( ";
            $sql .= ":process_title_b, ";
            $sql .= ":process_description_b, ";
            $sql .= ":process_created, ";
            $sql .= ":process_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_b" => $this->process_title_b,
                "process_description_b" => $this->process_description_b,
                "process_created" => $this->process_created,
                "process_datetime" => $this->process_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createProcessC()
    {
        try {
            $sql = "insert into {$this->tblHomeProcess}";
            $sql .= "(process_title_c, ";
            $sql .= "process_description_c, ";
            $sql .= "process_created, ";
            $sql .= "process_datetime ) values ( ";
            $sql .= ":process_title_c, ";
            $sql .= ":process_description_c, ";
            $sql .= ":process_created, ";
            $sql .= ":process_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_c" => $this->process_title_c,
                "process_description_c" => $this->process_description_c,
                "process_created" => $this->process_created,
                "process_datetime" => $this->process_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createProcessD()
    {
        try {
            $sql = "insert into {$this->tblHomeProcess}";
            $sql .= "(process_title_d, ";
            $sql .= "process_description_d, ";
            $sql .= "process_created, ";
            $sql .= "process_datetime ) values ( ";
            $sql .= ":process_title_d, ";
            $sql .= ":process_description_d, ";
            $sql .= ":process_created, ";
            $sql .= ":process_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_d" => $this->process_title_d,
                "process_description_d" => $this->process_description_d,
                "process_created" => $this->process_created,
                "process_datetime" => $this->process_datetime,
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
            $sql = "update {$this->tblHomeProcess} set ";
            $sql .= "process_subtitle = :process_subtitle, ";
            $sql .= "process_title = :process_title, ";
            $sql .= "process_datetime = :process_datetime ";
            $sql .= "where process_aid = :process_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_subtitle" => $this->process_subtitle,
                "process_title" => $this->process_title,
                "process_datetime" => $this->process_datetime,
                "process_aid" => $this->process_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProcessA()
    {
        try {
            $sql = "update {$this->tblHomeProcess} set ";
            $sql .= "process_title_a = :process_title_a, ";
            $sql .= "process_description_a = :process_description_a, ";
            $sql .= "process_datetime = :process_datetime ";
            $sql .= "where process_aid = :process_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_a" => $this->process_title_a,
                "process_description_a" => $this->process_description_a,
                "process_datetime" => $this->process_datetime,
                "process_aid" => $this->process_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProcessB()
    {
        try {
            $sql = "update {$this->tblHomeProcess} set ";
            $sql .= "process_title_b = :process_title_b, ";
            $sql .= "process_description_b = :process_description_b, ";
            $sql .= "process_datetime = :process_datetime ";
            $sql .= "where process_aid = :process_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_b" => $this->process_title_b,
                "process_description_b" => $this->process_description_b,
                "process_datetime" => $this->process_datetime,
                "process_aid" => $this->process_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProcessC()
    {
        try {
            $sql = "update {$this->tblHomeProcess} set ";
            $sql .= "process_title_c = :process_title_c, ";
            $sql .= "process_description_c = :process_description_c, ";
            $sql .= "process_datetime = :process_datetime ";
            $sql .= "where process_aid = :process_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_c" => $this->process_title_c,
                "process_description_c" => $this->process_description_c,
                "process_datetime" => $this->process_datetime,
                "process_aid" => $this->process_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateProcessD()
    {
        try {
            $sql = "update {$this->tblHomeProcess} set ";
            $sql .= "process_title_d = :process_title_d, ";
            $sql .= "process_description_d = :process_description_d, ";
            $sql .= "process_datetime = :process_datetime ";
            $sql .= "where process_aid = :process_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "process_title_d" => $this->process_title_d,
                "process_description_d" => $this->process_description_d,
                "process_datetime" => $this->process_datetime,
                "process_aid" => $this->process_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
