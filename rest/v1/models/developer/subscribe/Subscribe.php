<?php

class Subscribe
{
    public $subscriber_aid;
    public $subscriber_email;
    public $subscriber_is_active;
    public $subscriber_created;
    public $subscriber_datetime;
  
    public $connection;
    public $lastInsertedId;

    public $tblSubscriber;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSubscriber = "fbsv2_subscriber_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "order by subscriber_aid desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSubscriber}";
            $sql .= "(subscriber_email, ";
            $sql .= "subscriber_is_active, ";
            $sql .= "subscriber_created, ";
            $sql .= "subscriber_datetime ) values ( ";
            $sql .= ":subscriber_email, ";
            $sql .= ":subscriber_is_active, ";
            $sql .= ":subscriber_created, ";
            $sql .= ":subscriber_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_created" => $this->subscriber_created,
                "subscriber_datetime" => $this->subscriber_datetime,
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
            $sql = "delete from {$this->tblSubscriber} ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    
    // validator
    // email
    public function checkEmail()
    {
        try {
            $sql = "select subscriber_email from {$this->tblSubscriber} ";
            $sql .= "where subscriber_email = :subscriber_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "{$this->subscriber_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
