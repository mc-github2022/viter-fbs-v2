<?php

class PackagesCategory
{
    public $packages_category_aid;
    public $packages_category_is_active;
    public $packages_category_name;
    public $packages_category_list_name;
    public $packages_category_url;
    public $packages_category_created;
    public $packages_category_datetime;

    public $connection;
    public $lastInsertedId;

    public $packages_category_start;
    public $packages_category_total;
    public $packages_category_search;

    public $tblPackagesCategory;
    public $tblPackagesList;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPackagesCategory = "fbsv2_packages_category";
        $this->tblPackagesList = "fbsv2_packages_list";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPackagesCategory} ";
            $sql .= "order by packages_category_is_active desc, ";
            $sql .= "packages_category_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPackagesCategory} ";
            $sql .= "order by packages_category_is_active desc, ";
            $sql .= "packages_category_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->packages_category_start - 1,
                "total" => $this->packages_category_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesCategory} ";
            $sql .= "where ";
            $sql .= "packages_category_name like :packages_category_name ";
            $sql .= "order by packages_category_is_active desc, ";
            $sql .= "packages_category_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => "%{$this->packages_category_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPackagesCategory}";
            $sql .= "(packages_category_is_active, ";
            $sql .= "packages_category_name, ";
            $sql .= "packages_category_list_name, ";
            $sql .= "packages_category_url, ";
            $sql .= "packages_category_created, ";
            $sql .= "packages_category_datetime ) values ( ";
            $sql .= ":packages_category_is_active, ";
            $sql .= ":packages_category_name, ";
            $sql .= ":packages_category_list_name, ";
            $sql .= ":packages_category_url, ";
            $sql .= ":packages_category_created, ";
            $sql .= ":packages_category_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_is_active" => $this->packages_category_is_active,
                "packages_category_name" => $this->packages_category_name,
                "packages_category_list_name" => $this->packages_category_list_name,
                "packages_category_url" => $this->packages_category_url,
                "packages_category_created" => $this->packages_category_created,
                "packages_category_datetime" => $this->packages_category_datetime,
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
            $sql = "update {$this->tblPackagesCategory} set ";
            $sql .= "packages_category_list_name = :packages_category_list_name, ";
            $sql .= "packages_category_name = :packages_category_name, ";
            $sql .= "packages_category_url = :packages_category_url, ";
            $sql .= "packages_category_datetime = :packages_category_datetime ";
            $sql .= "where packages_category_aid = :packages_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_list_name" => $this->packages_category_list_name,
                "packages_category_name" => $this->packages_category_name,
                "packages_category_url" => $this->packages_category_url,
                "packages_category_datetime" => $this->packages_category_datetime,
                "packages_category_aid" => $this->packages_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPackagesCategory} ";
            $sql .= "where packages_category_aid = :packages_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_aid" => $this->packages_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPackagesCategory} set ";
            $sql .= "packages_category_is_active = :packages_category_is_active, ";
            $sql .= "packages_category_datetime = :packages_category_datetime ";
            $sql .= "where packages_category_aid = :packages_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_is_active" => $this->packages_category_is_active,
                "packages_category_datetime" => $this->packages_category_datetime,
                "packages_category_aid" => $this->packages_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkName()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPackagesCategory} ";
            $sql .= "where packages_category_name = :packages_category_name ";
            $sql .= "and packages_category_url = :packages_category_url ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => $this->packages_category_name,
                "packages_category_url" => $this->packages_category_url,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkAssociationListCategory()
    {
        try {
            $sql = "select packages_list_category_name_id from {$this->tblPackagesList} ";
            $sql .= "where packages_list_category_name_id = :packages_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_aid" => $this->packages_category_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
