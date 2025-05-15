<?php

class PackagesDetails
{
    public $packages_details_aid;
    public $packages_details_is_active;
    public $packages_details_title;
    public $packages_details_list;
    public $packages_details_is_highlighted;
    public $packages_details_list_id;
    public $packages_details_created;
    public $packages_details_datetime;

    public $connection;
    public $lastInsertedId;

    public $packages_details_start;
    public $packages_details_total;
    public $packages_details_search;

    public $tblPackagesDetails;
    public $tblPackagesList;
    public $tblPackagesCategory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPackagesDetails = "fbsv2_packages_details";
        $this->tblPackagesList = "fbsv2_packages_list";
        $this->tblPackagesCategory = "fbsv2_packages_category";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPackagesDetails} as details, ";
            $sql .= "{$this->tblPackagesList} as list ";
            $sql .= "where details.packages_details_list_id = list.packages_list_aid ";
            $sql .= "order by details.packages_details_is_active desc, ";
            $sql .= "details.packages_details_aid asc ";
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
            $sql .= "{$this->tblPackagesDetails} as details, ";
            $sql .= "{$this->tblPackagesList} as list ";
            $sql .= "where details.packages_details_list_id = list.packages_list_aid ";
            $sql .= "order by details.packages_details_is_active desc, ";
            $sql .= "details.packages_details_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->packages_details_start - 1,
                "total" => $this->packages_details_total,
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
            $sql .= "from {$this->tblPackagesDetails} as details, ";
            $sql .= "{$this->tblPackagesList} as list ";
            $sql .= "where ";
            $sql .= "details.packages_details_list_id = list.packages_list_aid ";
            $sql .= "and (list.packages_list_title like :packages_list_title ";
            $sql .= "or details.packages_details_title like :packages_details_title) ";
            $sql .= "order by details.packages_details_is_active desc, ";
            $sql .= "details.packages_details_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_title" => "%{$this->packages_details_search}%",
                "packages_details_title" => "%{$this->packages_details_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPackagesDetails}";
            $sql .= "(packages_details_is_active, ";
            $sql .= "packages_details_list_id, ";
            $sql .= "packages_details_title, ";
            $sql .= "packages_details_list, ";
            $sql .= "packages_details_is_highlighted, ";
            $sql .= "packages_details_created, ";
            $sql .= "packages_details_datetime ) values ( ";
            $sql .= ":packages_details_is_active, ";
            $sql .= ":packages_details_list_id, ";
            $sql .= ":packages_details_title, ";
            $sql .= ":packages_details_list, ";
            $sql .= ":packages_details_is_highlighted, ";
            $sql .= ":packages_details_created, ";
            $sql .= ":packages_details_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_details_is_active" => $this->packages_details_is_active,
                "packages_details_list_id" => $this->packages_details_list_id,
                "packages_details_title" => $this->packages_details_title,
                "packages_details_list" => $this->packages_details_list,
                "packages_details_is_highlighted" => $this->packages_details_is_highlighted,
                "packages_details_created" => $this->packages_details_created,
                "packages_details_datetime" => $this->packages_details_datetime,
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
            $sql = "update {$this->tblPackagesDetails} set ";
            $sql .= "packages_details_list_id = :packages_details_list_id, ";
            $sql .= "packages_details_list = :packages_details_list, ";
            $sql .= "packages_details_title = :packages_details_title, ";
            $sql .= "packages_details_is_highlighted = :packages_details_is_highlighted, ";
            $sql .= "packages_details_datetime = :packages_details_datetime ";
            $sql .= "where packages_details_aid = :packages_details_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_details_list_id" => $this->packages_details_list_id,
                "packages_details_list" => $this->packages_details_list,
                "packages_details_title" => $this->packages_details_title,
                "packages_details_is_highlighted" => $this->packages_details_is_highlighted,
                "packages_details_datetime" => $this->packages_details_datetime,
                "packages_details_aid" => $this->packages_details_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPackagesDetails} ";
            $sql .= "where packages_details_aid = :packages_details_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_details_aid" => $this->packages_details_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPackagesDetails} set ";
            $sql .= "packages_details_is_active = :packages_details_is_active, ";
            $sql .= "packages_details_datetime = :packages_details_datetime ";
            $sql .= "where packages_details_aid = :packages_details_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_details_is_active" => $this->packages_details_is_active,
                "packages_details_datetime" => $this->packages_details_datetime,
                "packages_details_aid" => $this->packages_details_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    //  search for packages list
    public function searchPackagesList()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPackagesList} ";
            $sql .= "where packages_list_title like :packages_list_title ";
            $sql .= "and packages_list_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "packages_list_aid desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_title" => "%{$this->packages_details_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
