<?php

class BookkeepingPackageTitle
{
    public $bookkeeping_title_aid;
    public $bookkeeping_title_packages_subtitle;
    public $bookkeeping_title_packages_title;
    public $bookkeeping_scope_title;
    public $bookkeeping_services_title_a;
    public $bookkeeping_services_list_a;
    public $bookkeeping_services_title_b;
    public $bookkeeping_services_list_b;
    public $bookkeeping_services_title_c;
    public $bookkeeping_services_list_c;
    public $bookkeeping_title_created;
    public $bookkeeping_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblBookkeepingPackageTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBookkeepingPackageTitle = "fbsv2_services_bookkeeping_pricing_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblBookkeepingPackageTitle} ";
            $sql .= "order by bookkeeping_title_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblBookkeepingPackageTitle}";
            $sql .= "(bookkeeping_title_packages_subtitle, ";
            $sql .= "bookkeeping_title_packages_title, ";
            $sql .= "bookkeeping_title_created, ";
            $sql .= "bookkeeping_title_datetime ) values ( ";
            $sql .= ":bookkeeping_title_packages_subtitle, ";
            $sql .= ":bookkeeping_title_packages_title, ";
            $sql .= ":bookkeeping_title_created, ";
            $sql .= ":bookkeeping_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_title_packages_subtitle" => $this->bookkeeping_title_packages_subtitle,
                "bookkeeping_title_packages_title" => $this->bookkeeping_title_packages_title,
                "bookkeeping_title_created" => $this->bookkeeping_title_created,
                "bookkeeping_title_datetime" => $this->bookkeeping_title_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPackagesList()
    {
        try {
            $sql = "insert into {$this->tblBookkeepingPackageTitle}";
            $sql .= "(bookkeeping_scope_title, ";
            $sql .= "bookkeeping_services_title_a, ";
            $sql .= "bookkeeping_services_list_a, ";
            $sql .= "bookkeeping_services_title_b, ";
            $sql .= "bookkeeping_services_list_b, ";
            $sql .= "bookkeeping_services_title_c, ";
            $sql .= "bookkeeping_services_list_c, ";
            $sql .= "bookkeeping_title_created, ";
            $sql .= "bookkeeping_title_datetime ) values ( ";
            $sql .= ":bookkeeping_scope_title, ";
            $sql .= ":bookkeeping_services_title_a, ";
            $sql .= ":bookkeeping_services_list_a, ";
            $sql .= ":bookkeeping_services_title_b, ";
            $sql .= ":bookkeeping_services_list_b, ";
            $sql .= ":bookkeeping_services_title_c, ";
            $sql .= ":bookkeeping_services_list_c, ";
            $sql .= ":bookkeeping_title_created, ";
            $sql .= ":bookkeeping_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_scope_title" => $this->bookkeeping_scope_title,
                "bookkeeping_services_title_a" => $this->bookkeeping_services_title_a,
                "bookkeeping_services_list_a" => $this->bookkeeping_services_list_a,
                "bookkeeping_services_title_b" => $this->bookkeeping_services_title_b,
                "bookkeeping_services_list_b" => $this->bookkeeping_services_list_b,
                "bookkeeping_services_title_c" => $this->bookkeeping_services_title_c,
                "bookkeeping_services_list_c" => $this->bookkeeping_services_list_c,
                "bookkeeping_title_created" => $this->bookkeeping_title_created,
                "bookkeeping_title_datetime" => $this->bookkeeping_title_datetime,
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
            $sql = "update {$this->tblBookkeepingPackageTitle} set ";
            $sql .= "bookkeeping_title_packages_subtitle = :bookkeeping_title_packages_subtitle, ";
            $sql .= "bookkeeping_title_packages_title = :bookkeeping_title_packages_title, ";
            $sql .= "bookkeeping_title_datetime = :bookkeeping_title_datetime ";
            $sql .= "where bookkeeping_title_aid = :bookkeeping_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_title_packages_subtitle" => $this->bookkeeping_title_packages_subtitle,
                "bookkeeping_title_packages_title" => $this->bookkeeping_title_packages_title,
                "bookkeeping_title_datetime" => $this->bookkeeping_title_datetime,
                "bookkeeping_title_aid" => $this->bookkeeping_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesList()
    {
        try {
            $sql = "update {$this->tblBookkeepingPackageTitle} set ";
            $sql .= "bookkeeping_scope_title = :bookkeeping_scope_title, ";
            $sql .= "bookkeeping_services_title_a = :bookkeeping_services_title_a, ";
            $sql .= "bookkeeping_services_list_a = :bookkeeping_services_list_a, ";
            $sql .= "bookkeeping_services_title_b = :bookkeeping_services_title_b, ";
            $sql .= "bookkeeping_services_list_b = :bookkeeping_services_list_b, ";
            $sql .= "bookkeeping_services_title_c = :bookkeeping_services_title_c, ";
            $sql .= "bookkeeping_services_list_c = :bookkeeping_services_list_c, ";
            $sql .= "bookkeeping_title_datetime = :bookkeeping_title_datetime ";
            $sql .= "where bookkeeping_title_aid = :bookkeeping_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "bookkeeping_scope_title" => $this->bookkeeping_scope_title,
                "bookkeeping_services_title_a" => $this->bookkeeping_services_title_a,
                "bookkeeping_services_list_a" => $this->bookkeeping_services_list_a,
                "bookkeeping_services_title_b" => $this->bookkeeping_services_title_b,
                "bookkeeping_services_list_b" => $this->bookkeeping_services_list_b,
                "bookkeeping_services_title_c" => $this->bookkeeping_services_title_c,
                "bookkeeping_services_list_c" => $this->bookkeeping_services_list_c,
                "bookkeeping_title_datetime" => $this->bookkeeping_title_datetime,
                "bookkeeping_title_aid" => $this->bookkeeping_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
