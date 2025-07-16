<?php

class PackagesList
{
    public $packages_list_aid;
    public $packages_list_is_active;
    public $packages_list_title;
    public $packages_list_title_desc;
    public $packages_list_price;
    public $packages_list_price_desc;
    public $packages_list_foreign_price;
    public $packages_list_foreign_price_desc;
    public $packages_list_other_details;
    public $packages_list_button_text;
    public $packages_list_is_highlighted;
    public $packages_list_category_name_id;
    public $packages_list_category_name;
    public $packages_list_created;
    public $packages_list_datetime;

    public $connection;
    public $lastInsertedId;

    public $packages_list_start;
    public $packages_list_total;
    public $packages_list_search;

    public $tblPackagesList;
    public $tblPackagesCategory;
    public $tblPackagesDetails;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPackagesList = "fbsv2_packages_list";
        $this->tblPackagesCategory = "fbsv2_packages_category";
        $this->tblPackagesDetails = "fbsv2_packages_details";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
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
            $sql .= "{$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->packages_list_start - 1,
                "total" => $this->packages_list_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // public function readById()
    // {
    //     try {
    //         $sql = "select * ";
    //         $sql .= "from ";
    //         $sql .= "{$this->tblPackagesList} as list, ";
    //         $sql .= "{$this->tblPackagesCategory} as category ";
    //         $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
    //         $sql .= "and list.packages_list_aid = :packages_list_aid ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "packages_list_aid" => $this->packages_list_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where ";
            $sql .= "list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and (category.packages_category_name like :packages_category_name ";
            $sql .= "or list.packages_list_title like :packages_list_title ";
            $sql .= "or list.packages_list_price like :packages_list_price ";
            $sql .= "or list.packages_list_foreign_price like :packages_list_foreign_price) ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => "%{$this->packages_list_search}%",
                "packages_list_title" => "%{$this->packages_list_search}%",
                "packages_list_price" => "%{$this->packages_list_search}%",
                "packages_list_foreign_price" => "%{$this->packages_list_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPackagesList}";
            $sql .= "(packages_list_is_active, ";
            $sql .= "packages_list_category_name_id, ";
            $sql .= "packages_list_category_name, ";
            $sql .= "packages_list_title, ";
            $sql .= "packages_list_title_desc, ";
            $sql .= "packages_list_price, ";
            $sql .= "packages_list_price_desc, ";
            $sql .= "packages_list_foreign_price, ";
            $sql .= "packages_list_foreign_price_desc, ";
            $sql .= "packages_list_other_details, ";
            $sql .= "packages_list_button_text, ";
            $sql .= "packages_list_is_highlighted, ";
            $sql .= "packages_list_created, ";
            $sql .= "packages_list_datetime ) values ( ";
            $sql .= ":packages_list_is_active, ";
            $sql .= ":packages_list_category_name_id, ";
            $sql .= ":packages_list_category_name, ";
            $sql .= ":packages_list_title, ";
            $sql .= ":packages_list_title_desc, ";
            $sql .= ":packages_list_price, ";
            $sql .= ":packages_list_price_desc, ";
            $sql .= ":packages_list_foreign_price, ";
            $sql .= ":packages_list_foreign_price_desc, ";
            $sql .= ":packages_list_other_details, ";
            $sql .= ":packages_list_button_text, ";
            $sql .= ":packages_list_is_highlighted, ";
            $sql .= ":packages_list_created, ";
            $sql .= ":packages_list_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_is_active" => $this->packages_list_is_active,
                "packages_list_category_name_id" => $this->packages_list_category_name_id,
                "packages_list_category_name" => $this->packages_list_category_name,
                "packages_list_title" => $this->packages_list_title,
                "packages_list_title_desc" => $this->packages_list_title_desc,
                "packages_list_price" => $this->packages_list_price,
                "packages_list_price_desc" => $this->packages_list_price_desc,
                "packages_list_foreign_price" => $this->packages_list_foreign_price,
                "packages_list_foreign_price_desc" => $this->packages_list_foreign_price_desc,
                "packages_list_other_details" => $this->packages_list_other_details,
                "packages_list_button_text" => $this->packages_list_button_text,
                "packages_list_is_highlighted" => $this->packages_list_is_highlighted,
                "packages_list_created" => $this->packages_list_created,
                "packages_list_datetime" => $this->packages_list_datetime,
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
            $sql = "update {$this->tblPackagesList} set ";
            $sql .= "packages_list_category_name_id = :packages_list_category_name_id, ";
            $sql .= "packages_list_category_name = :packages_list_category_name, ";
            $sql .= "packages_list_title_desc = :packages_list_title_desc, ";
            $sql .= "packages_list_title = :packages_list_title, ";
            $sql .= "packages_list_price = :packages_list_price, ";
            $sql .= "packages_list_price_desc = :packages_list_price_desc, ";
            $sql .= "packages_list_foreign_price = :packages_list_foreign_price, ";
            $sql .= "packages_list_foreign_price_desc = :packages_list_foreign_price_desc, ";
            $sql .= "packages_list_other_details = :packages_list_other_details, ";
            $sql .= "packages_list_button_text = :packages_list_button_text, ";
            $sql .= "packages_list_is_highlighted = :packages_list_is_highlighted, ";
            $sql .= "packages_list_datetime = :packages_list_datetime ";
            $sql .= "where packages_list_aid = :packages_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_category_name_id" => $this->packages_list_category_name_id,
                "packages_list_category_name" => $this->packages_list_category_name,
                "packages_list_title_desc" => $this->packages_list_title_desc,
                "packages_list_title" => $this->packages_list_title,
                "packages_list_price" => $this->packages_list_price,
                "packages_list_price_desc" => $this->packages_list_price_desc,
                "packages_list_foreign_price" => $this->packages_list_foreign_price,
                "packages_list_foreign_price_desc" => $this->packages_list_foreign_price_desc,
                "packages_list_other_details" => $this->packages_list_other_details,
                "packages_list_button_text" => $this->packages_list_button_text,
                "packages_list_is_highlighted" => $this->packages_list_is_highlighted,
                "packages_list_datetime" => $this->packages_list_datetime,
                "packages_list_aid" => $this->packages_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPackagesList} ";
            $sql .= "where packages_list_aid = :packages_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_aid" => $this->packages_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblPackagesList} set ";
            $sql .= "packages_list_is_active = :packages_list_is_active, ";
            $sql .= "packages_list_datetime = :packages_list_datetime ";
            $sql .= "where packages_list_aid = :packages_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_is_active" => $this->packages_list_is_active,
                "packages_list_datetime" => $this->packages_list_datetime,
                "packages_list_aid" => $this->packages_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // public function checkEmail()
    // {
    //     try {
    //         $sql = "select * ";
    //         $sql .= "from ";
    //         $sql .= "{$this->tblPackagesList} ";
    //         $sql .= "where packages_list_title = :packages_list_title ";
    //         $sql .= "and packages_list_category_name_id = :packages_list_category_name_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "packages_list_title" => $this->packages_list_title,
    //             "packages_list_category_name_id" => $this->packages_list_category_name_id,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    //  search for packages category
    public function searchPackagesCategory()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPackagesCategory} ";
            $sql .= "where packages_category_name like :packages_category_name ";
            $sql .= "and packages_category_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "packages_category_name desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => "%{$this->packages_list_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and list.packages_list_is_active = :packages_list_is_active ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_is_active" => $this->packages_list_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where ";
            $sql .= "list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and list.packages_list_is_active = :packages_list_is_active ";
            $sql .= "and (category.packages_category_name like :packages_category_name ";
            $sql .= "or list.packages_list_title like :packages_list_title ";
            $sql .= "or list.packages_list_price like :packages_list_price ";
            $sql .= "or list.packages_list_foreign_price like :packages_list_foreign_price) ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => "%{$this->packages_list_search}%",
                "packages_list_title" => "%{$this->packages_list_search}%",
                "packages_list_price" => "%{$this->packages_list_search}%",
                "packages_list_foreign_price" => "%{$this->packages_list_search}%",
                "packages_list_is_active" => $this->packages_list_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByCategory()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and list.packages_list_category_name_id = :packages_list_category_name_id ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_category_name_id" => $this->packages_list_category_name_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByCategoryAndStatus()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and (list.packages_list_is_active = :packages_list_is_active ";
            $sql .= "or list.packages_list_category_name_id = :packages_list_category_name_id) ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_category_name_id" => $this->packages_list_category_name_id,
                "packages_list_is_active" => $this->packages_list_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByCategoryAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPackagesList} as list, ";
            $sql .= "{$this->tblPackagesCategory} as category ";
            $sql .= "where ";
            $sql .= "list.packages_list_category_name_id = category.packages_category_aid ";
            $sql .= "and list.packages_list_category_name_id = :packages_list_category_name_id ";
            $sql .= "and (category.packages_category_name like :packages_category_name ";
            $sql .= "or list.packages_list_title like :packages_list_title ";
            $sql .= "or list.packages_list_price like :packages_list_price ";
            $sql .= "or list.packages_list_foreign_price like :packages_list_foreign_price) ";
            $sql .= "order by list.packages_list_is_active desc, ";
            $sql .= "list.packages_list_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_category_name" => "%{$this->packages_list_search}%",
                "packages_list_title" => "%{$this->packages_list_search}%",
                "packages_list_price" => "%{$this->packages_list_search}%",
                "packages_list_foreign_price" => "%{$this->packages_list_search}%",
                "packages_list_category_name_id" => $this->packages_list_category_name_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkAssociationPackageDetails()
    {
        try {
            $sql = "select packages_details_list_id from {$this->tblPackagesDetails} ";
            $sql .= "where packages_details_list_id = :packages_list_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "packages_list_aid" => $this->packages_list_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
