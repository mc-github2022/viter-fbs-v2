<?php

class LcssBatches
{
    public $lcss_batch_aid;
    public $lcss_batch_name;
    public $lcss_batch_category;
    public $lcss_batch_school;
    public $lcss_batch_course;
    public $lcss_batch_img;
    public $lcss_batch_created;
    public $lcss_batch_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblLcssBatch;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLcssBatch = "lcss_batch";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblLcssBatch} ";
            $sql .= "order by lcss_batch_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select lcss_batch_name from {$this->tblLcssBatch} ";
            $sql .= "where lcss_batch_name = :lcss_batch_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_batch_name" => "{$this->lcss_batch_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblLcssBatch}";
            $sql .= "(lcss_batch_name, ";
            $sql .= "lcss_batch_category, ";
            $sql .= "lcss_batch_school, ";
            $sql .= "lcss_batch_course, ";
            $sql .= "lcss_batch_img, ";
            $sql .= "lcss_batch_created, ";
            $sql .= "lcss_batch_datetime ) values ( ";
            $sql .= ":lcss_batch_name, ";
            $sql .= ":lcss_batch_category, ";
            $sql .= ":lcss_batch_school, ";
            $sql .= ":lcss_batch_course, ";
            $sql .= ":lcss_batch_img, ";
            $sql .= ":lcss_batch_created, ";
            $sql .= ":lcss_batch_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_batch_name" => $this->lcss_batch_name,
                "lcss_batch_category" => $this->lcss_batch_category,
                "lcss_batch_school" => $this->lcss_batch_school,
                "lcss_batch_course" => $this->lcss_batch_course,
                "lcss_batch_img" => $this->lcss_batch_img,
                "lcss_batch_created" => $this->lcss_batch_created,
                "lcss_batch_datetime" => $this->lcss_batch_datetime,
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
            $sql = "update {$this->tblLcssBatch} set ";
            $sql .= "lcss_batch_name = :lcss_batch_name, ";
            $sql .= "lcss_batch_category = :lcss_batch_category, ";
            $sql .= "lcss_batch_school = :lcss_batch_school, ";
            $sql .= "lcss_batch_course = :lcss_batch_course, ";
            $sql .= "lcss_batch_img = :lcss_batch_img, ";
            $sql .= "lcss_batch_created = :lcss_batch_created ";
            $sql .= "where lcss_batch_aid = :lcss_batch_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_batch_name" => $this->lcss_batch_name,
                "lcss_batch_category" => $this->lcss_batch_category,
                "lcss_batch_school" => $this->lcss_batch_school,
                "lcss_batch_course" => $this->lcss_batch_course,
                "lcss_batch_img" => $this->lcss_batch_img,
                "lcss_batch_created" => $this->lcss_batch_created,
                "lcss_batch_aid" => $this->lcss_batch_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblLcssBatch} ";
            $sql .= "where lcss_batch_aid = :lcss_batch_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lcss_batch_aid" => $this->lcss_batch_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
