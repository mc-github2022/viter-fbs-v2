<?php

class Gallery
{
    public $gallery_aid;
    public $gallery_img;
    public $gallery_created;
    public $gallery_datetime;

    public $connection;
    public $lastInsertedId;
    public $gallery_start;
    public $gallery_total;

    public $tblGallery;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGallery = "fbsv2_gallery";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblGallery} ";
            $sql .= "order by gallery_created desc ";
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
            $sql .= "{$this->tblGallery} ";
            $sql .= "order by gallery_created desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->gallery_start - 1,
                "total" => $this->gallery_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblGallery}";
            $sql .= "(gallery_img, ";
            $sql .= "gallery_created, ";
            $sql .= "gallery_datetime ) values ( ";
            $sql .= ":gallery_img, ";
            $sql .= ":gallery_created, ";
            $sql .= ":gallery_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "gallery_img" => $this->gallery_img,
                "gallery_created" => $this->gallery_created,
                "gallery_datetime" => $this->gallery_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function delete()
    {
        try {
            $sql = "delete from {$this->tblGallery} ";
            $sql .= "where gallery_aid = :gallery_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "gallery_aid" => $this->gallery_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
