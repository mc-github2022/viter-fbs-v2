<?php

class WorkTeams
{
    public $work_teams_aid;
    public $work_teams_ceo_img;
    public $work_teams_ceo_name;
    public $work_teams_ceo_position;
    public $work_teams_om_img;
    public $work_teams_om_name;
    public $work_teams_om_position;
    public $work_teams_hr_img;
    public $work_teams_hr_name;
    public $work_teams_hr_position;
    public $work_teams_finance_img;
    public $work_teams_finance_name;
    public $work_teams_finance_position;
    public $work_teams_lcs_img;
    public $work_teams_lcs_name;
    public $work_teams_lcs_position;
    public $work_teams_web_img;
    public $work_teams_web_name;
    public $work_teams_web_position;
    public $work_teams_marketing_img;
    public $work_teams_marketing_name;
    public $work_teams_marketing_position;
    public $work_teams_va_img;
    public $work_teams_va_name;
    public $work_teams_va_position;
    public $work_teams_created;
    public $work_teams_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWorkTeams;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorkTeams = "fbsv2_work_teams";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWorkTeams} ";
            $sql .= "order by work_teams_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_ceo_img, ";
            $sql .= "work_teams_ceo_name, ";
            $sql .= "work_teams_ceo_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_ceo_img, ";
            $sql .= ":work_teams_ceo_name, ";
            $sql .= ":work_teams_ceo_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_ceo_img" => $this->work_teams_ceo_img,
                "work_teams_ceo_name" => $this->work_teams_ceo_name,
                "work_teams_ceo_position" => $this->work_teams_ceo_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
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
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_ceo_img = :work_teams_ceo_img, ";
            $sql .= "work_teams_ceo_name = :work_teams_ceo_name, ";
            $sql .= "work_teams_ceo_position = :work_teams_ceo_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_ceo_img" => $this->work_teams_ceo_img,
                "work_teams_ceo_name" => $this->work_teams_ceo_name,
                "work_teams_ceo_position" => $this->work_teams_ceo_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOperationManager()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_om_img, ";
            $sql .= "work_teams_om_name, ";
            $sql .= "work_teams_om_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_om_img, ";
            $sql .= ":work_teams_om_name, ";
            $sql .= ":work_teams_om_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_om_img" => $this->work_teams_om_img,
                "work_teams_om_name" => $this->work_teams_om_name,
                "work_teams_om_position" => $this->work_teams_om_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateOperationManager()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_om_img = :work_teams_om_img, ";
            $sql .= "work_teams_om_name = :work_teams_om_name, ";
            $sql .= "work_teams_om_position = :work_teams_om_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_om_img" => $this->work_teams_om_img,
                "work_teams_om_name" => $this->work_teams_om_name,
                "work_teams_om_position" => $this->work_teams_om_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createHR()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_hr_img, ";
            $sql .= "work_teams_hr_name, ";
            $sql .= "work_teams_hr_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_hr_img, ";
            $sql .= ":work_teams_hr_name, ";
            $sql .= ":work_teams_hr_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_hr_img" => $this->work_teams_hr_img,
                "work_teams_hr_name" => $this->work_teams_hr_name,
                "work_teams_hr_position" => $this->work_teams_hr_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateHR()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_hr_img = :work_teams_hr_img, ";
            $sql .= "work_teams_hr_name = :work_teams_hr_name, ";
            $sql .= "work_teams_hr_position = :work_teams_hr_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_hr_img" => $this->work_teams_hr_img,
                "work_teams_hr_name" => $this->work_teams_hr_name,
                "work_teams_hr_position" => $this->work_teams_hr_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createFinance()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_finance_img, ";
            $sql .= "work_teams_finance_name, ";
            $sql .= "work_teams_finance_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_finance_img, ";
            $sql .= ":work_teams_finance_name, ";
            $sql .= ":work_teams_finance_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_finance_img" => $this->work_teams_finance_img,
                "work_teams_finance_name" => $this->work_teams_finance_name,
                "work_teams_finance_position" => $this->work_teams_finance_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateFinance()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_finance_img = :work_teams_finance_img, ";
            $sql .= "work_teams_finance_name = :work_teams_finance_name, ";
            $sql .= "work_teams_finance_position = :work_teams_finance_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_finance_img" => $this->work_teams_finance_img,
                "work_teams_finance_name" => $this->work_teams_finance_name,
                "work_teams_finance_position" => $this->work_teams_finance_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createLcsSupervisor()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_lcs_img, ";
            $sql .= "work_teams_lcs_name, ";
            $sql .= "work_teams_lcs_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_lcs_img, ";
            $sql .= ":work_teams_lcs_name, ";
            $sql .= ":work_teams_lcs_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_lcs_img" => $this->work_teams_lcs_img,
                "work_teams_lcs_name" => $this->work_teams_lcs_name,
                "work_teams_lcs_position" => $this->work_teams_lcs_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateLcsSupervisor()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_lcs_img = :work_teams_lcs_img, ";
            $sql .= "work_teams_lcs_name = :work_teams_lcs_name, ";
            $sql .= "work_teams_lcs_position = :work_teams_lcs_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_lcs_img" => $this->work_teams_lcs_img,
                "work_teams_lcs_name" => $this->work_teams_lcs_name,
                "work_teams_lcs_position" => $this->work_teams_lcs_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createWebSupervisor()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_web_img, ";
            $sql .= "work_teams_web_name, ";
            $sql .= "work_teams_web_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_web_img, ";
            $sql .= ":work_teams_web_name, ";
            $sql .= ":work_teams_web_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_web_img" => $this->work_teams_web_img,
                "work_teams_web_name" => $this->work_teams_web_name,
                "work_teams_web_position" => $this->work_teams_web_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateWebSupervisor()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_web_img = :work_teams_web_img, ";
            $sql .= "work_teams_web_name = :work_teams_web_name, ";
            $sql .= "work_teams_web_position = :work_teams_web_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_web_img" => $this->work_teams_web_img,
                "work_teams_web_name" => $this->work_teams_web_name,
                "work_teams_web_position" => $this->work_teams_web_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createMarketing()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_marketing_img, ";
            $sql .= "work_teams_marketing_name, ";
            $sql .= "work_teams_marketing_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_marketing_img, ";
            $sql .= ":work_teams_marketing_name, ";
            $sql .= ":work_teams_marketing_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_marketing_img" => $this->work_teams_marketing_img,
                "work_teams_marketing_name" => $this->work_teams_marketing_name,
                "work_teams_marketing_position" => $this->work_teams_marketing_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateMarketing()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_marketing_img = :work_teams_marketing_img, ";
            $sql .= "work_teams_marketing_name = :work_teams_marketing_name, ";
            $sql .= "work_teams_marketing_position = :work_teams_marketing_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_marketing_img" => $this->work_teams_marketing_img,
                "work_teams_marketing_name" => $this->work_teams_marketing_name,
                "work_teams_marketing_position" => $this->work_teams_marketing_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createVA()
    {
        try {
            $sql = "insert into {$this->tblWorkTeams}";
            $sql .= "(work_teams_va_img, ";
            $sql .= "work_teams_va_name, ";
            $sql .= "work_teams_va_position, ";
            $sql .= "work_teams_created, ";
            $sql .= "work_teams_datetime ) values ( ";
            $sql .= ":work_teams_va_img, ";
            $sql .= ":work_teams_va_name, ";
            $sql .= ":work_teams_va_position, ";
            $sql .= ":work_teams_created, ";
            $sql .= ":work_teams_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_va_img" => $this->work_teams_va_img,
                "work_teams_va_name" => $this->work_teams_va_name,
                "work_teams_va_position" => $this->work_teams_va_position,
                "work_teams_created" => $this->work_teams_created,
                "work_teams_datetime" => $this->work_teams_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateVA()
    {
        try {
            $sql = "update {$this->tblWorkTeams} set ";
            $sql .= "work_teams_va_img = :work_teams_va_img, ";
            $sql .= "work_teams_va_name = :work_teams_va_name, ";
            $sql .= "work_teams_va_position = :work_teams_va_position, ";
            $sql .= "work_teams_datetime = :work_teams_datetime ";
            $sql .= "where work_teams_aid = :work_teams_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_teams_va_img" => $this->work_teams_va_img,
                "work_teams_va_name" => $this->work_teams_va_name,
                "work_teams_va_position" => $this->work_teams_va_position,
                "work_teams_datetime" => $this->work_teams_datetime,
                "work_teams_aid" => $this->work_teams_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
