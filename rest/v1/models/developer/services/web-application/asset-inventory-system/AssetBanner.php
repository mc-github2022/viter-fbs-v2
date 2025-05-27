<?php

class AssetBanner
{
    public $asset_banner_aid;
    public $asset_banner_title;
    public $asset_banner_title_bold;
    public $asset_banner_description;
    public $asset_banner_button_text;
    public $asset_banner_button_link;
    public $asset_banner_img;
    public $asset_banner_created;
    public $asset_banner_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAssetBanner;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAssetBanner = "fbsv2_services_asset_banner";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAssetBanner} ";
            $sql .= "order by asset_banner_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAssetBanner}";
            $sql .= "(asset_banner_title, ";
            $sql .= "asset_banner_title_bold, ";
            $sql .= "asset_banner_description, ";
            $sql .= "asset_banner_button_text, ";
            $sql .= "asset_banner_button_link, ";
            $sql .= "asset_banner_img, ";
            $sql .= "asset_banner_created, ";
            $sql .= "asset_banner_datetime ) values ( ";
            $sql .= ":asset_banner_title, ";
            $sql .= ":asset_banner_title_bold, ";
            $sql .= ":asset_banner_description, ";
            $sql .= ":asset_banner_button_text, ";
            $sql .= ":asset_banner_button_link, ";
            $sql .= ":asset_banner_img, ";
            $sql .= ":asset_banner_created, ";
            $sql .= ":asset_banner_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_banner_title" => $this->asset_banner_title,
                "asset_banner_title_bold" => $this->asset_banner_title_bold,
                "asset_banner_description" => $this->asset_banner_description,
                "asset_banner_button_text" => $this->asset_banner_button_text,
                "asset_banner_button_link" => $this->asset_banner_button_link,
                "asset_banner_img" => $this->asset_banner_img,
                "asset_banner_created" => $this->asset_banner_created,
                "asset_banner_datetime" => $this->asset_banner_datetime,
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
            $sql = "update {$this->tblAssetBanner} set ";
            $sql .= "asset_banner_title = :asset_banner_title, ";
            $sql .= "asset_banner_title_bold = :asset_banner_title_bold, ";
            $sql .= "asset_banner_description = :asset_banner_description, ";
            $sql .= "asset_banner_button_text = :asset_banner_button_text, ";
            $sql .= "asset_banner_button_link = :asset_banner_button_link, ";
            $sql .= "asset_banner_img = :asset_banner_img, ";
            $sql .= "asset_banner_datetime = :asset_banner_datetime ";
            $sql .= "where asset_banner_aid = :asset_banner_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_banner_title" => $this->asset_banner_title,
                "asset_banner_title_bold" => $this->asset_banner_title_bold,
                "asset_banner_description" => $this->asset_banner_description,
                "asset_banner_button_text" => $this->asset_banner_button_text,
                "asset_banner_button_link" => $this->asset_banner_button_link,
                "asset_banner_img" => $this->asset_banner_img,
                "asset_banner_datetime" => $this->asset_banner_datetime,
                "asset_banner_aid" => $this->asset_banner_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
