<?php

class HomeServices
{
    public $services_aid;
    public $services_sub_title_a;
    public $services_title;
    public $services_sub_title_b;
    public $services_title_a;
    public $services_title_b;
    public $services_title_c;
    public $services_title_d;
    public $services_description_a;
    public $services_description_b;
    public $services_description_c;
    public $services_description_d;
    public $services_button_text_a;
    public $services_button_text_b;
    public $services_button_text_c;
    public $services_button_text_d;
    public $services_button_link_a;
    public $services_button_link_b;
    public $services_button_link_c;
    public $services_button_link_d;
    public $services_created;
    public $services_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHomeServices;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHomeServices = "fbsv2_home_services";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHomeServices} ";
            $sql .= "order by services_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHomeServices}";
            $sql .= "(services_sub_title_a, ";
            $sql .= "services_title, ";
            $sql .= "services_sub_title_b, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_sub_title_a, ";
            $sql .= ":services_title, ";
            $sql .= ":services_sub_title_b, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_sub_title_a" => $this->services_sub_title_a,
                "services_title" => $this->services_title,
                "services_sub_title_b" => $this->services_sub_title_b,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createServicesA()
    {
        try {
            $sql = "insert into {$this->tblHomeServices}";
            $sql .= "(services_title_a, ";
            $sql .= "services_description_a, ";
            $sql .= "services_button_text_a, ";
            $sql .= "services_button_link_a, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_title_a, ";
            $sql .= ":services_description_a, ";
            $sql .= ":services_button_text_a, ";
            $sql .= ":services_button_link_a, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_a" => $this->services_title_a,
                "services_description_a" => $this->services_description_a,
                "services_button_text_a" => $this->services_button_text_a,
                "services_button_link_a" => $this->services_button_link_a,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createServicesB()
    {
        try {
            $sql = "insert into {$this->tblHomeServices}";
            $sql .= "(services_title_b, ";
            $sql .= "services_description_b, ";
            $sql .= "services_button_text_b, ";
            $sql .= "services_button_link_b, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_title_b, ";
            $sql .= ":services_description_b, ";
            $sql .= ":services_button_text_b, ";
            $sql .= ":services_button_link_b, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_b" => $this->services_title_b,
                "services_description_b" => $this->services_description_b,
                "services_button_text_b" => $this->services_button_text_b,
                "services_button_link_b" => $this->services_button_link_b,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createServicesC()
    {
        try {
            $sql = "insert into {$this->tblHomeServices}";
            $sql .= "(services_title_c, ";
            $sql .= "services_description_c, ";
            $sql .= "services_button_text_c, ";
            $sql .= "services_button_link_c, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_title_c, ";
            $sql .= ":services_description_c, ";
            $sql .= ":services_button_text_c, ";
            $sql .= ":services_button_link_c, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_c" => $this->services_title_c,
                "services_description_c" => $this->services_description_c,
                "services_button_text_c" => $this->services_button_text_c,
                "services_button_link_c" => $this->services_button_link_c,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createServicesD()
    {
        try {
            $sql = "insert into {$this->tblHomeServices}";
            $sql .= "(services_title_d, ";
            $sql .= "services_description_d, ";
            $sql .= "services_button_text_d, ";
            $sql .= "services_button_link_d, ";
            $sql .= "services_created, ";
            $sql .= "services_datetime ) values ( ";
            $sql .= ":services_title_d, ";
            $sql .= ":services_description_d, ";
            $sql .= ":services_button_text_d, ";
            $sql .= ":services_button_link_d, ";
            $sql .= ":services_created, ";
            $sql .= ":services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_d" => $this->services_title_d,
                "services_description_d" => $this->services_description_d,
                "services_button_text_d" => $this->services_button_text_d,
                "services_button_link_d" => $this->services_button_link_d,
                "services_created" => $this->services_created,
                "services_datetime" => $this->services_datetime,
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
            $sql = "update {$this->tblHomeServices} set ";
            $sql .= "services_sub_title_a = :services_sub_title_a, ";
            $sql .= "services_title = :services_title, ";
            $sql .= "services_sub_title_b = :services_sub_title_b, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_sub_title_a" => $this->services_sub_title_a,
                "services_title" => $this->services_title,
                "services_sub_title_b" => $this->services_sub_title_b,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateServicesA()
    {
        try {
            $sql = "update {$this->tblHomeServices} set ";
            $sql .= "services_title_a = :services_title_a, ";
            $sql .= "services_description_a = :services_description_a, ";
            $sql .= "services_button_text_a = :services_button_text_a, ";
            $sql .= "services_button_link_a = :services_button_link_a, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_a" => $this->services_title_a,
                "services_description_a" => $this->services_description_a,
                "services_button_text_a" => $this->services_button_text_a,
                "services_button_link_a" => $this->services_button_link_a,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateServicesB()
    {
        try {
            $sql = "update {$this->tblHomeServices} set ";
            $sql .= "services_title_b = :services_title_b, ";
            $sql .= "services_description_b = :services_description_b, ";
            $sql .= "services_button_text_b = :services_button_text_b, ";
            $sql .= "services_button_link_b = :services_button_link_b, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_b" => $this->services_title_b,
                "services_description_b" => $this->services_description_b,
                "services_button_text_b" => $this->services_button_text_b,
                "services_button_link_b" => $this->services_button_link_b,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateServicesC()
    {
        try {
            $sql = "update {$this->tblHomeServices} set ";
            $sql .= "services_title_c = :services_title_c, ";
            $sql .= "services_description_c = :services_description_c, ";
            $sql .= "services_button_text_c = :services_button_text_c, ";
            $sql .= "services_button_link_c = :services_button_link_c, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_c" => $this->services_title_c,
                "services_description_c" => $this->services_description_c,
                "services_button_text_c" => $this->services_button_text_c,
                "services_button_link_c" => $this->services_button_link_c,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateServicesD()
    {
        try {
            $sql = "update {$this->tblHomeServices} set ";
            $sql .= "services_title_d = :services_title_d, ";
            $sql .= "services_description_d = :services_description_d, ";
            $sql .= "services_button_text_d = :services_button_text_d, ";
            $sql .= "services_button_link_d = :services_button_link_d, ";
            $sql .= "services_datetime = :services_datetime ";
            $sql .= "where services_aid = :services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "services_title_d" => $this->services_title_d,
                "services_description_d" => $this->services_description_d,
                "services_button_text_d" => $this->services_button_text_d,
                "services_button_link_d" => $this->services_button_link_d,
                "services_datetime" => $this->services_datetime,
                "services_aid" => $this->services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
