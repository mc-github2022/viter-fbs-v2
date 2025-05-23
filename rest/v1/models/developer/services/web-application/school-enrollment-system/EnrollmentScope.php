<?php

class EnrollmentScope
{
    public $enrollment_scope_aid;
    public $enrollment_scope_title;
    public $enrollment_scope_desc;
    public $enrollment_scope_img;
    public $enrollment_scope_button_text;
    public $enrollment_scope_created;
    public $enrollment_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEnrollmentScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnrollmentScope = "fbsv2_services_enrollment_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEnrollmentScope} ";
            $sql .= "order by enrollment_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEnrollmentScope}";
            $sql .= "(enrollment_scope_title, ";
            $sql .= "enrollment_scope_desc, ";
            $sql .= "enrollment_scope_img, ";
            $sql .= "enrollment_scope_button_text, ";
            $sql .= "enrollment_scope_created, ";
            $sql .= "enrollment_scope_datetime ) values ( ";
            $sql .= ":enrollment_scope_title, ";
            $sql .= ":enrollment_scope_desc, ";
            $sql .= ":enrollment_scope_img, ";
            $sql .= ":enrollment_scope_button_text, ";
            $sql .= ":enrollment_scope_created, ";
            $sql .= ":enrollment_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_scope_title" => $this->enrollment_scope_title,
                "enrollment_scope_desc" => $this->enrollment_scope_desc,
                "enrollment_scope_img" => $this->enrollment_scope_img,
                "enrollment_scope_button_text" => $this->enrollment_scope_button_text,
                "enrollment_scope_created" => $this->enrollment_scope_created,
                "enrollment_scope_datetime" => $this->enrollment_scope_datetime,
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
            $sql = "update {$this->tblEnrollmentScope} set ";
            $sql .= "enrollment_scope_title = :enrollment_scope_title, ";
            $sql .= "enrollment_scope_desc = :enrollment_scope_desc, ";
            $sql .= "enrollment_scope_img = :enrollment_scope_img, ";
            $sql .= "enrollment_scope_button_text = :enrollment_scope_button_text, ";
            $sql .= "enrollment_scope_datetime = :enrollment_scope_datetime ";
            $sql .= "where enrollment_scope_aid = :enrollment_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_scope_title" => $this->enrollment_scope_title,
                "enrollment_scope_desc" => $this->enrollment_scope_desc,
                "enrollment_scope_img" => $this->enrollment_scope_img,
                "enrollment_scope_button_text" => $this->enrollment_scope_button_text,
                "enrollment_scope_datetime" => $this->enrollment_scope_datetime,
                "enrollment_scope_aid" => $this->enrollment_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblEnrollmentScope} ";
            $sql .= "where enrollment_scope_aid = :enrollment_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_scope_aid" => $this->enrollment_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
