<?php

class AssetScope
{
    public $asset_scope_aid;
    public $asset_scope_title;
    public $asset_scope_desc;
    public $asset_scope_img;
    public $asset_scope_button_text;
    public $asset_scope_created;
    public $asset_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblAssetScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAssetScope = "fbsv2_services_asset_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblAssetScope} ";
            $sql .= "order by asset_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblAssetScope}";
            $sql .= "(asset_scope_title, ";
            $sql .= "asset_scope_desc, ";
            $sql .= "asset_scope_img, ";
            $sql .= "asset_scope_button_text, ";
            $sql .= "asset_scope_created, ";
            $sql .= "asset_scope_datetime ) values ( ";
            $sql .= ":asset_scope_title, ";
            $sql .= ":asset_scope_desc, ";
            $sql .= ":asset_scope_img, ";
            $sql .= ":asset_scope_button_text, ";
            $sql .= ":asset_scope_created, ";
            $sql .= ":asset_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_scope_title" => $this->asset_scope_title,
                "asset_scope_desc" => $this->asset_scope_desc,
                "asset_scope_img" => $this->asset_scope_img,
                "asset_scope_button_text" => $this->asset_scope_button_text,
                "asset_scope_created" => $this->asset_scope_created,
                "asset_scope_datetime" => $this->asset_scope_datetime,
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
            $sql = "update {$this->tblAssetScope} set ";
            $sql .= "asset_scope_title = :asset_scope_title, ";
            $sql .= "asset_scope_desc = :asset_scope_desc, ";
            $sql .= "asset_scope_img = :asset_scope_img, ";
            $sql .= "asset_scope_button_text = :asset_scope_button_text, ";
            $sql .= "asset_scope_datetime = :asset_scope_datetime ";
            $sql .= "where asset_scope_aid = :asset_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_scope_title" => $this->asset_scope_title,
                "asset_scope_desc" => $this->asset_scope_desc,
                "asset_scope_img" => $this->asset_scope_img,
                "asset_scope_button_text" => $this->asset_scope_button_text,
                "asset_scope_datetime" => $this->asset_scope_datetime,
                "asset_scope_aid" => $this->asset_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblAssetScope} ";
            $sql .= "where asset_scope_aid = :asset_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "asset_scope_aid" => $this->asset_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
