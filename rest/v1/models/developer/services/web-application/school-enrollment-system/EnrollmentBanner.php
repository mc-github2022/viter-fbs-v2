<?php

class EnrollmentBanner
{
    public $enrollment_banner_aid;
    public $enrollment_banner_title;
    public $enrollment_banner_title_bold;
    public $enrollment_banner_description;
    public $enrollment_banner_button_text;
    public $enrollment_banner_img;
    public $enrollment_banner_created;
    public $enrollment_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEnrollmentBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnrollmentBanner = "fbsv2_services_enrollment_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEnrollmentBanner} ";
            $sql .= "order by enrollment_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEnrollmentBanner}";
            $sql .= "(enrollment_banner_title, ";
            $sql .= "enrollment_banner_title_bold, ";
            $sql .= "enrollment_banner_description, ";
            $sql .= "enrollment_banner_button_text, ";
            $sql .= "enrollment_banner_img, ";
            $sql .= "enrollment_banner_created, ";
            $sql .= "enrollment_banner_datetime ) values ( ";
            $sql .= ":enrollment_banner_title, ";
            $sql .= ":enrollment_banner_title_bold, ";
            $sql .= ":enrollment_banner_description, ";
            $sql .= ":enrollment_banner_button_text, ";
            $sql .= ":enrollment_banner_img, ";
            $sql .= ":enrollment_banner_created, ";
            $sql .= ":enrollment_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_banner_title" => $this->enrollment_banner_title,
                "enrollment_banner_title_bold" => $this->enrollment_banner_title_bold,
                "enrollment_banner_description" => $this->enrollment_banner_description,
                "enrollment_banner_button_text" => $this->enrollment_banner_button_text,
                "enrollment_banner_img" => $this->enrollment_banner_img,
                "enrollment_banner_created" => $this->enrollment_banner_created,
                "enrollment_banner_datetime" => $this->enrollment_banner_datetime,
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
            $sql = "update {$this->tblEnrollmentBanner} set ";
            $sql .= "enrollment_banner_title = :enrollment_banner_title, ";
            $sql .= "enrollment_banner_title_bold = :enrollment_banner_title_bold, ";
            $sql .= "enrollment_banner_description = :enrollment_banner_description, ";
            $sql .= "enrollment_banner_button_text = :enrollment_banner_button_text, ";
            $sql .= "enrollment_banner_img = :enrollment_banner_img, ";
            $sql .= "enrollment_banner_datetime = :enrollment_banner_datetime ";
            $sql .= "where enrollment_banner_aid = :enrollment_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_banner_title" => $this->enrollment_banner_title,
                "enrollment_banner_title_bold" => $this->enrollment_banner_title_bold,
                "enrollment_banner_description" => $this->enrollment_banner_description,
                "enrollment_banner_button_text" => $this->enrollment_banner_button_text,
                "enrollment_banner_img" => $this->enrollment_banner_img,
                "enrollment_banner_datetime" => $this->enrollment_banner_datetime,
                "enrollment_banner_aid" => $this->enrollment_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
