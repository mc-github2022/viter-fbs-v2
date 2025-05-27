<?php

class AssetTitles
{
    public $asset_titles_aid;
    public $asset_titles_overview_subtitle;
    public $asset_titles_overview_title;
    public $asset_titles_packages_subtitle;
    public $asset_titles_packages_title;
    public $asset_titles_created;
    public $asset_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAssetTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAssetTitles = "fbsv2_services_asset_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAssetTitles} ";
            $sql .= "order by asset_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAssetTitles}";
            $sql .= "(asset_titles_overview_subtitle, ";
            $sql .= "asset_titles_overview_title, ";
            $sql .= "asset_titles_created, ";
            $sql .= "asset_titles_datetime ) values ( ";
            $sql .= ":asset_titles_overview_subtitle, ";
            $sql .= ":asset_titles_overview_title, ";
            $sql .= ":asset_titles_created, ";
            $sql .= ":asset_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_titles_overview_subtitle" => $this->asset_titles_overview_subtitle,
                "asset_titles_overview_title" => $this->asset_titles_overview_title,
                "asset_titles_created" => $this->asset_titles_created,
                "asset_titles_datetime" => $this->asset_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPackagesTitle()
    {
        try {
            $sql = "insert into {$this->tblAssetTitles}";
            $sql .= "(asset_titles_packages_subtitle, ";
            $sql .= "asset_titles_packages_title, ";
            $sql .= "asset_titles_created, ";
            $sql .= "asset_titles_datetime ) values ( ";
            $sql .= ":asset_titles_packages_subtitle, ";
            $sql .= ":asset_titles_packages_title, ";
            $sql .= ":asset_titles_created, ";
            $sql .= ":asset_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_titles_packages_subtitle" => $this->asset_titles_packages_subtitle,
                "asset_titles_packages_title" => $this->asset_titles_packages_title,
                "asset_titles_created" => $this->asset_titles_created,
                "asset_titles_datetime" => $this->asset_titles_datetime,
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
            $sql = "update {$this->tblAssetTitles} set ";
            $sql .= "asset_titles_overview_subtitle = :asset_titles_overview_subtitle, ";
            $sql .= "asset_titles_overview_title = :asset_titles_overview_title, ";
            $sql .= "asset_titles_datetime = :asset_titles_datetime ";
            $sql .= "where asset_titles_aid = :asset_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_titles_overview_subtitle" => $this->asset_titles_overview_subtitle,
                "asset_titles_overview_title" => $this->asset_titles_overview_title,
                "asset_titles_datetime" => $this->asset_titles_datetime,
                "asset_titles_aid" => $this->asset_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePackagesTitle()
    {
        try {
            $sql = "update {$this->tblAssetTitles} set ";
            $sql .= "asset_titles_packages_subtitle = :asset_titles_packages_subtitle, ";
            $sql .= "asset_titles_packages_title = :asset_titles_packages_title, ";
            $sql .= "asset_titles_datetime = :asset_titles_datetime ";
            $sql .= "where asset_titles_aid = :asset_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_titles_packages_subtitle" => $this->asset_titles_packages_subtitle,
                "asset_titles_packages_title" => $this->asset_titles_packages_title,
                "asset_titles_datetime" => $this->asset_titles_datetime,
                "asset_titles_aid" => $this->asset_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
