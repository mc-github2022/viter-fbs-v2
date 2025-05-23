<?php

class EnrollmentOverview
{
    public $enrollment_overview_aid;
    public $enrollment_overview_subtitle;
    public $enrollment_overview_title;
    public $enrollment_overview_img;
    public $enrollment_overview_button_text;
    public $enrollment_overview_list_title_a;
    public $enrollment_overview_list_description_a;
    public $enrollment_overview_list_title_b;
    public $enrollment_overview_list_description_b;
    public $enrollment_overview_list_title_c;
    public $enrollment_overview_list_description_c;
    public $enrollment_overview_created;
    public $enrollment_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEnrollmentOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEnrollmentOverview = "fbsv2_services_enrollment_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEnrollmentOverview} ";
            $sql .= "order by enrollment_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEnrollmentOverview}";
            $sql .= "(enrollment_overview_title, ";
            $sql .= "enrollment_overview_subtitle, ";
            $sql .= "enrollment_overview_img, ";
            $sql .= "enrollment_overview_button_text, ";
            $sql .= "enrollment_overview_created, ";
            $sql .= "enrollment_overview_datetime ) values ( ";
            $sql .= ":enrollment_overview_title, ";
            $sql .= ":enrollment_overview_subtitle, ";
            $sql .= ":enrollment_overview_img, ";
            $sql .= ":enrollment_overview_button_text, ";
            $sql .= ":enrollment_overview_created, ";
            $sql .= ":enrollment_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_overview_title" => $this->enrollment_overview_title,
                "enrollment_overview_subtitle" => $this->enrollment_overview_subtitle,
                "enrollment_overview_img" => $this->enrollment_overview_img,
                "enrollment_overview_button_text" => $this->enrollment_overview_button_text,
                "enrollment_overview_created" => $this->enrollment_overview_created,
                "enrollment_overview_datetime" => $this->enrollment_overview_datetime,
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
            $sql = "update {$this->tblEnrollmentOverview} set ";
            $sql .= "enrollment_overview_title = :enrollment_overview_title, ";
            $sql .= "enrollment_overview_subtitle = :enrollment_overview_subtitle, ";
            $sql .= "enrollment_overview_img = :enrollment_overview_img, ";
            $sql .= "enrollment_overview_button_text = :enrollment_overview_button_text, ";
            $sql .= "enrollment_overview_datetime = :enrollment_overview_datetime ";
            $sql .= "where enrollment_overview_aid = :enrollment_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_overview_title" => $this->enrollment_overview_title,
                "enrollment_overview_subtitle" => $this->enrollment_overview_subtitle,
                "enrollment_overview_img" => $this->enrollment_overview_img,
                "enrollment_overview_button_text" => $this->enrollment_overview_button_text,
                "enrollment_overview_datetime" => $this->enrollment_overview_datetime,
                "enrollment_overview_aid" => $this->enrollment_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblEnrollmentOverview}";
            $sql .= "(enrollment_overview_list_title_a, ";
            $sql .= "enrollment_overview_list_description_a, ";
            $sql .= "enrollment_overview_list_title_b, ";
            $sql .= "enrollment_overview_list_description_b, ";
            $sql .= "enrollment_overview_list_title_c, ";
            $sql .= "enrollment_overview_list_description_c, ";
            $sql .= "enrollment_overview_created, ";
            $sql .= "enrollment_overview_datetime ) values ( ";
            $sql .= ":enrollment_overview_list_title_a, ";
            $sql .= ":enrollment_overview_list_description_a, ";
            $sql .= ":enrollment_overview_list_title_b, ";
            $sql .= ":enrollment_overview_list_description_b, ";
            $sql .= ":enrollment_overview_list_title_c, ";
            $sql .= ":enrollment_overview_list_description_c, ";
            $sql .= ":enrollment_overview_created, ";
            $sql .= ":enrollment_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_overview_list_title_a" => $this->enrollment_overview_list_title_a,
                "enrollment_overview_list_description_a" => $this->enrollment_overview_list_description_a,
                "enrollment_overview_list_title_b" => $this->enrollment_overview_list_title_b,
                "enrollment_overview_list_description_b" => $this->enrollment_overview_list_description_b,
                "enrollment_overview_list_title_c" => $this->enrollment_overview_list_title_c,
                "enrollment_overview_list_description_c" => $this->enrollment_overview_list_description_c,
                "enrollment_overview_created" => $this->enrollment_overview_created,
                "enrollment_overview_datetime" => $this->enrollment_overview_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateOverviewList()
    {
        try {
            $sql = "update {$this->tblEnrollmentOverview} set ";
            $sql .= "enrollment_overview_list_title_a = :enrollment_overview_list_title_a, ";
            $sql .= "enrollment_overview_list_description_a = :enrollment_overview_list_description_a, ";
            $sql .= "enrollment_overview_list_title_b = :enrollment_overview_list_title_b, ";
            $sql .= "enrollment_overview_list_description_b = :enrollment_overview_list_description_b, ";
            $sql .= "enrollment_overview_list_title_c = :enrollment_overview_list_title_c, ";
            $sql .= "enrollment_overview_list_description_c = :enrollment_overview_list_description_c, ";
            $sql .= "enrollment_overview_datetime = :enrollment_overview_datetime ";
            $sql .= "where enrollment_overview_aid = :enrollment_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "enrollment_overview_list_title_a" => $this->enrollment_overview_list_title_a,
                "enrollment_overview_list_description_a" => $this->enrollment_overview_list_description_a,
                "enrollment_overview_list_title_b" => $this->enrollment_overview_list_title_b,
                "enrollment_overview_list_description_b" => $this->enrollment_overview_list_description_b,
                "enrollment_overview_list_title_c" => $this->enrollment_overview_list_title_c,
                "enrollment_overview_list_description_c" => $this->enrollment_overview_list_description_c,
                "enrollment_overview_datetime" => $this->enrollment_overview_datetime,
                "enrollment_overview_aid" => $this->enrollment_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
