<?php

class Careers
{
    public $careers_aid;
    public $careers_icon;
    public $careers_job_title;
    public $careers_job_classification;
    public $careers_job_mode;
    public $careers_job_status;
    public $careers_job_description;
    public $careers_img;
    public $careers_job_overview;
    public $careers_created;
    public $careers_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblCareers;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblCareers = "fbsv2_careers";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblCareers} ";
            $sql .= "order by careers_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblCareers}";
            $sql .= "(careers_icon, ";
            $sql .= "careers_job_title, ";
            $sql .= "careers_job_classification, ";
            $sql .= "careers_job_mode, ";
            $sql .= "careers_job_status, ";
            $sql .= "careers_job_description, ";
            $sql .= "careers_img, ";
            $sql .= "careers_job_overview, ";
            $sql .= "careers_created, ";
            $sql .= "careers_datetime ) values ( ";
            $sql .= ":careers_icon, ";
            $sql .= ":careers_job_title, ";
            $sql .= ":careers_job_classification, ";
            $sql .= ":careers_job_mode, ";
            $sql .= ":careers_job_status, ";
            $sql .= ":careers_job_description, ";
            $sql .= ":careers_img, ";
            $sql .= ":careers_job_overview, ";
            $sql .= ":careers_created, ";
            $sql .= ":careers_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "careers_icon" => $this->careers_icon,
                "careers_job_title" => $this->careers_job_title,
                "careers_job_classification" => $this->careers_job_classification,
                "careers_job_mode" => $this->careers_job_mode,
                "careers_job_status" => $this->careers_job_status,
                "careers_job_description" => $this->careers_job_description,
                "careers_img" => $this->careers_img,
                "careers_job_overview" => $this->careers_job_overview,
                "careers_created" => $this->careers_created,
                "careers_datetime" => $this->careers_datetime,
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
            $sql = "update {$this->tblCareers} set ";
            $sql .= "careers_icon = :careers_icon, ";
            $sql .= "careers_job_title = :careers_job_title, ";
            $sql .= "careers_job_classification = :careers_job_classification, ";
            $sql .= "careers_job_mode = :careers_job_mode, ";
            $sql .= "careers_job_status = :careers_job_status, ";
            $sql .= "careers_job_description = :careers_job_description, ";
            $sql .= "careers_img = :careers_img, ";
            $sql .= "careers_job_overview = :careers_job_overview, ";
            $sql .= "careers_datetime = :careers_datetime ";
            $sql .= "where careers_aid = :careers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "careers_icon" => $this->careers_icon,
                "careers_job_title" => $this->careers_job_title,
                "careers_job_classification" => $this->careers_job_classification,
                "careers_job_mode" => $this->careers_job_mode,
                "careers_job_status" => $this->careers_job_status,
                "careers_job_description" => $this->careers_job_description,
                "careers_img" => $this->careers_img,
                "careers_job_overview" => $this->careers_job_overview,
                "careers_datetime" => $this->careers_datetime,
                "careers_aid" => $this->careers_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblCareers} ";
            $sql .= "where careers_aid = :careers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "careers_aid" => $this->careers_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
