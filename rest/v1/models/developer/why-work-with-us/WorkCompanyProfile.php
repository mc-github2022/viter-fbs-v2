<?php

class WorkCompanyProfile
{
    public $work_profile_aid;
    public $work_profile_desc;
    public $work_profile_subtitle;
    public $work_profile_title;
    public $work_profile_img;
    public $work_profile_file;
    public $work_profile_button_text;
    public $work_profile_list_title_bold_a;
    public $work_profile_list_title_a;
    public $work_profile_list_description_a;
    public $work_profile_list_title_bold_b;
    public $work_profile_list_title_b;
    public $work_profile_list_description_b;
    public $work_profile_list_title_bold_c;
    public $work_profile_list_title_c;
    public $work_profile_list_description_c;
    public $work_profile_list_title_bold_d;
    public $work_profile_list_title_d;
    public $work_profile_list_description_d;
    public $work_profile_created;
    public $work_profile_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWorkCompanyProfile;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorkCompanyProfile = "fbsv2_work_profile";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWorkCompanyProfile} ";
            $sql .= "order by work_profile_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblWorkCompanyProfile}";
            $sql .= "(work_profile_title, ";
            $sql .= "work_profile_subtitle, ";
            $sql .= "work_profile_img, ";
            $sql .= "work_profile_file, ";
            $sql .= "work_profile_button_text, ";
            $sql .= "work_profile_created, ";
            $sql .= "work_profile_datetime ) values ( ";
            $sql .= ":work_profile_title, ";
            $sql .= ":work_profile_subtitle, ";
            $sql .= ":work_profile_img, ";
            $sql .= ":work_profile_file, ";
            $sql .= ":work_profile_button_text, ";
            $sql .= ":work_profile_created, ";
            $sql .= ":work_profile_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_title" => $this->work_profile_title,
                "work_profile_subtitle" => $this->work_profile_subtitle,
                "work_profile_img" => $this->work_profile_img,
                "work_profile_file" => $this->work_profile_file,
                "work_profile_button_text" => $this->work_profile_button_text,
                "work_profile_created" => $this->work_profile_created,
                "work_profile_datetime" => $this->work_profile_datetime,
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
            $sql = "update {$this->tblWorkCompanyProfile} set ";
            $sql .= "work_profile_title = :work_profile_title, ";
            $sql .= "work_profile_subtitle = :work_profile_subtitle, ";
            $sql .= "work_profile_img = :work_profile_img, ";
            $sql .= "work_profile_file = :work_profile_file, ";
            $sql .= "work_profile_button_text = :work_profile_button_text, ";
            $sql .= "work_profile_datetime = :work_profile_datetime ";
            $sql .= "where work_profile_aid = :work_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_title" => $this->work_profile_title,
                "work_profile_subtitle" => $this->work_profile_subtitle,
                "work_profile_img" => $this->work_profile_img,
                "work_profile_file" => $this->work_profile_file,
                "work_profile_button_text" => $this->work_profile_button_text,
                "work_profile_datetime" => $this->work_profile_datetime,
                "work_profile_aid" => $this->work_profile_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCompanyProfileList()
    {
        try {
            $sql = "insert into {$this->tblWorkCompanyProfile}";
            $sql .= "(work_profile_list_title_bold_a, ";
            $sql .= "work_profile_list_title_a, ";
            $sql .= "work_profile_list_description_a, ";
            $sql .= "work_profile_list_title_bold_b, ";
            $sql .= "work_profile_list_title_b, ";
            $sql .= "work_profile_list_description_b, ";
            $sql .= "work_profile_list_title_bold_c, ";
            $sql .= "work_profile_list_title_c, ";
            $sql .= "work_profile_list_description_c, ";
            $sql .= "work_profile_list_title_bold_d, ";
            $sql .= "work_profile_list_title_d, ";
            $sql .= "work_profile_list_description_d, ";
            $sql .= "work_profile_created, ";
            $sql .= "work_profile_datetime ) values ( ";
            $sql .= ":work_profile_list_title_bold_a, ";
            $sql .= ":work_profile_list_title_a, ";
            $sql .= ":work_profile_list_description_a, ";
            $sql .= ":work_profile_list_title_bold_b, ";
            $sql .= ":work_profile_list_title_b, ";
            $sql .= ":work_profile_list_description_b, ";
            $sql .= ":work_profile_list_title_bold_c, ";
            $sql .= ":work_profile_list_title_c, ";
            $sql .= ":work_profile_list_description_c, ";
            $sql .= ":work_profile_list_title_bold_d, ";
            $sql .= ":work_profile_list_title_d, ";
            $sql .= ":work_profile_list_description_d, ";
            $sql .= ":work_profile_created, ";
            $sql .= ":work_profile_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_list_title_bold_a" => $this->work_profile_list_title_bold_a,
                "work_profile_list_title_a" => $this->work_profile_list_title_a,
                "work_profile_list_description_a" => $this->work_profile_list_description_a,
                "work_profile_list_title_bold_b" => $this->work_profile_list_title_bold_b,
                "work_profile_list_title_b" => $this->work_profile_list_title_b,
                "work_profile_list_description_b" => $this->work_profile_list_description_b,
                "work_profile_list_title_bold_c" => $this->work_profile_list_title_bold_c,
                "work_profile_list_title_c" => $this->work_profile_list_title_c,
                "work_profile_list_description_c" => $this->work_profile_list_description_c,
                "work_profile_list_title_bold_d" => $this->work_profile_list_title_bold_d,
                "work_profile_list_title_d" => $this->work_profile_list_title_d,
                "work_profile_list_description_d" => $this->work_profile_list_description_d,
                "work_profile_created" => $this->work_profile_created,
                "work_profile_datetime" => $this->work_profile_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCompanyProfileList()
    {
        try {
            $sql = "update {$this->tblWorkCompanyProfile} set ";
            $sql .= "work_profile_list_title_bold_a = :work_profile_list_title_bold_a, ";
            $sql .= "work_profile_list_title_a = :work_profile_list_title_a, ";
            $sql .= "work_profile_list_description_a = :work_profile_list_description_a, ";
            $sql .= "work_profile_list_title_bold_b = :work_profile_list_title_bold_b, ";
            $sql .= "work_profile_list_title_b = :work_profile_list_title_b, ";
            $sql .= "work_profile_list_description_b = :work_profile_list_description_b, ";
            $sql .= "work_profile_list_title_bold_c = :work_profile_list_title_bold_c, ";
            $sql .= "work_profile_list_title_c = :work_profile_list_title_c, ";
            $sql .= "work_profile_list_description_c = :work_profile_list_description_c, ";
            $sql .= "work_profile_list_title_bold_d = :work_profile_list_title_bold_d, ";
            $sql .= "work_profile_list_title_d = :work_profile_list_title_d, ";
            $sql .= "work_profile_list_description_d = :work_profile_list_description_d, ";
            $sql .= "work_profile_datetime = :work_profile_datetime ";
            $sql .= "where work_profile_aid = :work_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_list_title_bold_a" => $this->work_profile_list_title_bold_a,
                "work_profile_list_title_a" => $this->work_profile_list_title_a,
                "work_profile_list_description_a" => $this->work_profile_list_description_a,
                "work_profile_list_title_bold_b" => $this->work_profile_list_title_bold_b,
                "work_profile_list_title_b" => $this->work_profile_list_title_b,
                "work_profile_list_description_b" => $this->work_profile_list_description_b,
                "work_profile_list_title_bold_c" => $this->work_profile_list_title_bold_c,
                "work_profile_list_title_c" => $this->work_profile_list_title_c,
                "work_profile_list_description_c" => $this->work_profile_list_description_c,
                "work_profile_list_title_bold_d" => $this->work_profile_list_title_bold_d,
                "work_profile_list_title_d" => $this->work_profile_list_title_d,
                "work_profile_list_description_d" => $this->work_profile_list_description_d,
                "work_profile_datetime" => $this->work_profile_datetime,
                "work_profile_aid" => $this->work_profile_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCompanyDescription()
    {
        try {
            $sql = "insert into {$this->tblWorkCompanyProfile}";
            $sql .= "(work_profile_desc, ";
            $sql .= "work_profile_created, ";
            $sql .= "work_profile_datetime ) values ( ";
            $sql .= ":work_profile_desc, ";
            $sql .= ":work_profile_created, ";
            $sql .= ":work_profile_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_desc" => $this->work_profile_desc,
                "work_profile_created" => $this->work_profile_created,
                "work_profile_datetime" => $this->work_profile_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCompanyDescription()
    {
        try {
            $sql = "update {$this->tblWorkCompanyProfile} set ";
            $sql .= "work_profile_desc = :work_profile_desc, ";
            $sql .= "work_profile_datetime = :work_profile_datetime ";
            $sql .= "where work_profile_aid = :work_profile_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "work_profile_desc" => $this->work_profile_desc,
                "work_profile_datetime" => $this->work_profile_datetime,
                "work_profile_aid" => $this->work_profile_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
