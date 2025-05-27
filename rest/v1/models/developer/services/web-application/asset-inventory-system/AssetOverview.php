<?php

class AssetOverview
{
    public $asset_overview_aid;
    public $asset_overview_subtitle;
    public $asset_overview_title;
    public $asset_overview_img;
    public $asset_overview_button_text;
    public $asset_overview_list_title_a;
    public $asset_overview_list_description_a;
    public $asset_overview_list_title_b;
    public $asset_overview_list_description_b;
    public $asset_overview_list_title_c;
    public $asset_overview_list_description_c;
    public $asset_overview_created;
    public $asset_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAssetOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAssetOverview = "fbsv2_services_asset_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAssetOverview} ";
            $sql .= "order by asset_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAssetOverview}";
            $sql .= "(asset_overview_title, ";
            $sql .= "asset_overview_subtitle, ";
            $sql .= "asset_overview_img, ";
            $sql .= "asset_overview_button_text, ";
            $sql .= "asset_overview_created, ";
            $sql .= "asset_overview_datetime ) values ( ";
            $sql .= ":asset_overview_title, ";
            $sql .= ":asset_overview_subtitle, ";
            $sql .= ":asset_overview_img, ";
            $sql .= ":asset_overview_button_text, ";
            $sql .= ":asset_overview_created, ";
            $sql .= ":asset_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_overview_title" => $this->asset_overview_title,
                "asset_overview_subtitle" => $this->asset_overview_subtitle,
                "asset_overview_img" => $this->asset_overview_img,
                "asset_overview_button_text" => $this->asset_overview_button_text,
                "asset_overview_created" => $this->asset_overview_created,
                "asset_overview_datetime" => $this->asset_overview_datetime,
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
            $sql = "update {$this->tblAssetOverview} set ";
            $sql .= "asset_overview_title = :asset_overview_title, ";
            $sql .= "asset_overview_subtitle = :asset_overview_subtitle, ";
            $sql .= "asset_overview_img = :asset_overview_img, ";
            $sql .= "asset_overview_button_text = :asset_overview_button_text, ";
            $sql .= "asset_overview_datetime = :asset_overview_datetime ";
            $sql .= "where asset_overview_aid = :asset_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_overview_title" => $this->asset_overview_title,
                "asset_overview_subtitle" => $this->asset_overview_subtitle,
                "asset_overview_img" => $this->asset_overview_img,
                "asset_overview_button_text" => $this->asset_overview_button_text,
                "asset_overview_datetime" => $this->asset_overview_datetime,
                "asset_overview_aid" => $this->asset_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblAssetOverview}";
            $sql .= "(asset_overview_list_title_a, ";
            $sql .= "asset_overview_list_description_a, ";
            $sql .= "asset_overview_list_title_b, ";
            $sql .= "asset_overview_list_description_b, ";
            $sql .= "asset_overview_list_title_c, ";
            $sql .= "asset_overview_list_description_c, ";
            $sql .= "asset_overview_created, ";
            $sql .= "asset_overview_datetime ) values ( ";
            $sql .= ":asset_overview_list_title_a, ";
            $sql .= ":asset_overview_list_description_a, ";
            $sql .= ":asset_overview_list_title_b, ";
            $sql .= ":asset_overview_list_description_b, ";
            $sql .= ":asset_overview_list_title_c, ";
            $sql .= ":asset_overview_list_description_c, ";
            $sql .= ":asset_overview_created, ";
            $sql .= ":asset_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_overview_list_title_a" => $this->asset_overview_list_title_a,
                "asset_overview_list_description_a" => $this->asset_overview_list_description_a,
                "asset_overview_list_title_b" => $this->asset_overview_list_title_b,
                "asset_overview_list_description_b" => $this->asset_overview_list_description_b,
                "asset_overview_list_title_c" => $this->asset_overview_list_title_c,
                "asset_overview_list_description_c" => $this->asset_overview_list_description_c,
                "asset_overview_created" => $this->asset_overview_created,
                "asset_overview_datetime" => $this->asset_overview_datetime,
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
            $sql = "update {$this->tblAssetOverview} set ";
            $sql .= "asset_overview_list_title_a = :asset_overview_list_title_a, ";
            $sql .= "asset_overview_list_description_a = :asset_overview_list_description_a, ";
            $sql .= "asset_overview_list_title_b = :asset_overview_list_title_b, ";
            $sql .= "asset_overview_list_description_b = :asset_overview_list_description_b, ";
            $sql .= "asset_overview_list_title_c = :asset_overview_list_title_c, ";
            $sql .= "asset_overview_list_description_c = :asset_overview_list_description_c, ";
            $sql .= "asset_overview_datetime = :asset_overview_datetime ";
            $sql .= "where asset_overview_aid = :asset_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_overview_list_title_a" => $this->asset_overview_list_title_a,
                "asset_overview_list_description_a" => $this->asset_overview_list_description_a,
                "asset_overview_list_title_b" => $this->asset_overview_list_title_b,
                "asset_overview_list_description_b" => $this->asset_overview_list_description_b,
                "asset_overview_list_title_c" => $this->asset_overview_list_title_c,
                "asset_overview_list_description_c" => $this->asset_overview_list_description_c,
                "asset_overview_datetime" => $this->asset_overview_datetime,
                "asset_overview_aid" => $this->asset_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
