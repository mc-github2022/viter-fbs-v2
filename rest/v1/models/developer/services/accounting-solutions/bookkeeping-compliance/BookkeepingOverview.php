<?php

class BookkeepingOverview
{
    public $bookkeeping_overview_aid;
    public $bookkeeping_overview_subtitle;
    public $bookkeeping_overview_title;
    public $bookkeeping_overview_img;
    public $bookkeeping_overview_list_title_a;
    public $bookkeeping_overview_list_description_a;
    public $bookkeeping_overview_list_title_b;
    public $bookkeeping_overview_list_description_b;
    public $bookkeeping_overview_list_title_c;
    public $bookkeeping_overview_list_description_c;
    public $bookkeeping_overview_created;
    public $bookkeeping_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookkeepingOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookkeepingOverview = "fbsv2_services_bookkeeping_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookkeepingOverview} ";
            $sql .= "order by bookkeeping_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookkeepingOverview}";
            $sql .= "(bookkeeping_overview_title, ";
            $sql .= "bookkeeping_overview_subtitle, ";
            $sql .= "bookkeeping_overview_img, ";
            $sql .= "bookkeeping_overview_created, ";
            $sql .= "bookkeeping_overview_datetime ) values ( ";
            $sql .= ":bookkeeping_overview_title, ";
            $sql .= ":bookkeeping_overview_subtitle, ";
            $sql .= ":bookkeeping_overview_img, ";
            $sql .= ":bookkeeping_overview_created, ";
            $sql .= ":bookkeeping_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_overview_title" => $this->bookkeeping_overview_title,
                "bookkeeping_overview_subtitle" => $this->bookkeeping_overview_subtitle,
                "bookkeeping_overview_img" => $this->bookkeeping_overview_img,
                "bookkeeping_overview_created" => $this->bookkeeping_overview_created,
                "bookkeeping_overview_datetime" => $this->bookkeeping_overview_datetime,
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
            $sql = "update {$this->tblBookkeepingOverview} set ";
            $sql .= "bookkeeping_overview_title = :bookkeeping_overview_title, ";
            $sql .= "bookkeeping_overview_subtitle = :bookkeeping_overview_subtitle, ";
            $sql .= "bookkeeping_overview_img = :bookkeeping_overview_img, ";
            $sql .= "bookkeeping_overview_datetime = :bookkeeping_overview_datetime ";
            $sql .= "where bookkeeping_overview_aid = :bookkeeping_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_overview_title" => $this->bookkeeping_overview_title,
                "bookkeeping_overview_subtitle" => $this->bookkeeping_overview_subtitle,
                "bookkeeping_overview_img" => $this->bookkeeping_overview_img,
                "bookkeeping_overview_datetime" => $this->bookkeeping_overview_datetime,
                "bookkeeping_overview_aid" => $this->bookkeeping_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblBookkeepingOverview}";
            $sql .= "(bookkeeping_overview_list_title_a, ";
            $sql .= "bookkeeping_overview_list_description_a, ";
            $sql .= "bookkeeping_overview_list_title_b, ";
            $sql .= "bookkeeping_overview_list_description_b, ";
            $sql .= "bookkeeping_overview_list_title_c, ";
            $sql .= "bookkeeping_overview_list_description_c, ";
            $sql .= "bookkeeping_overview_created, ";
            $sql .= "bookkeeping_overview_datetime ) values ( ";
            $sql .= ":bookkeeping_overview_list_title_a, ";
            $sql .= ":bookkeeping_overview_list_description_a, ";
            $sql .= ":bookkeeping_overview_list_title_b, ";
            $sql .= ":bookkeeping_overview_list_description_b, ";
            $sql .= ":bookkeeping_overview_list_title_c, ";
            $sql .= ":bookkeeping_overview_list_description_c, ";
            $sql .= ":bookkeeping_overview_created, ";
            $sql .= ":bookkeeping_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_overview_list_title_a" => $this->bookkeeping_overview_list_title_a,
                "bookkeeping_overview_list_description_a" => $this->bookkeeping_overview_list_description_a,
                "bookkeeping_overview_list_title_b" => $this->bookkeeping_overview_list_title_b,
                "bookkeeping_overview_list_description_b" => $this->bookkeeping_overview_list_description_b,
                "bookkeeping_overview_list_title_c" => $this->bookkeeping_overview_list_title_c,
                "bookkeeping_overview_list_description_c" => $this->bookkeeping_overview_list_description_c,
                "bookkeeping_overview_created" => $this->bookkeeping_overview_created,
                "bookkeeping_overview_datetime" => $this->bookkeeping_overview_datetime,
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
            $sql = "update {$this->tblBookkeepingOverview} set ";
            $sql .= "bookkeeping_overview_list_title_a = :bookkeeping_overview_list_title_a, ";
            $sql .= "bookkeeping_overview_list_description_a = :bookkeeping_overview_list_description_a, ";
            $sql .= "bookkeeping_overview_list_title_b = :bookkeeping_overview_list_title_b, ";
            $sql .= "bookkeeping_overview_list_description_b = :bookkeeping_overview_list_description_b, ";
            $sql .= "bookkeeping_overview_list_title_c = :bookkeeping_overview_list_title_c, ";
            $sql .= "bookkeeping_overview_list_description_c = :bookkeeping_overview_list_description_c, ";
            $sql .= "bookkeeping_overview_datetime = :bookkeeping_overview_datetime ";
            $sql .= "where bookkeeping_overview_aid = :bookkeeping_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_overview_list_title_a" => $this->bookkeeping_overview_list_title_a,
                "bookkeeping_overview_list_description_a" => $this->bookkeeping_overview_list_description_a,
                "bookkeeping_overview_list_title_b" => $this->bookkeeping_overview_list_title_b,
                "bookkeeping_overview_list_description_b" => $this->bookkeeping_overview_list_description_b,
                "bookkeeping_overview_list_title_c" => $this->bookkeeping_overview_list_title_c,
                "bookkeeping_overview_list_description_c" => $this->bookkeeping_overview_list_description_c,
                "bookkeeping_overview_datetime" => $this->bookkeeping_overview_datetime,
                "bookkeeping_overview_aid" => $this->bookkeeping_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
