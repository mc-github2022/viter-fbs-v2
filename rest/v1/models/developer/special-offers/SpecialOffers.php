<?php

class SpecialOffers
{
    public $special_offers_aid;
    public $special_offers_icons;
    public $special_offers_services;
    public $special_offers_price;
    public $special_offers_link;
    public $special_offers_created;
    public $special_offers_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblSpecialOffers;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSpecialOffers = "special_offers";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSpecialOffers} ";
            $sql .= "order by special_offers_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblSpecialOffers}";
            $sql .= "(special_offers_icons, ";
            $sql .= "special_offers_services, ";
            $sql .= "special_offers_price, ";
            $sql .= "special_offers_link, ";
            $sql .= "special_offers_created, ";
            $sql .= "special_offers_datetime ) values ( ";
            $sql .= ":special_offers_icons, ";
            $sql .= ":special_offers_services, ";
            $sql .= ":special_offers_price, ";
            $sql .= ":special_offers_link, ";
            $sql .= ":special_offers_created, ";
            $sql .= ":special_offers_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_offers_icons" => $this->special_offers_icons,
                "special_offers_services" => $this->special_offers_services,
                "special_offers_price" => $this->special_offers_price,
                "special_offers_link" => $this->special_offers_link,
                "special_offers_created" => $this->special_offers_created,
                "special_offers_datetime" => $this->special_offers_datetime,
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
            $sql = "update {$this->tblSpecialOffers} set ";
            $sql .= "special_offers_icons = :special_offers_icons, ";
            $sql .= "special_offers_services = :special_offers_services, ";
            $sql .= "special_offers_price = :special_offers_price, ";
            $sql .= "special_offers_link = :special_offers_link, ";
            $sql .= "special_offers_created = :special_offers_created ";
            $sql .= "where special_offers_aid = :special_offers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_offers_icons" => $this->special_offers_icons,
                "special_offers_services" => $this->special_offers_services,
                "special_offers_price" => $this->special_offers_price,
                "special_offers_link" => $this->special_offers_link,
                "special_offers_created" => $this->special_offers_created,
                "special_offers_aid" => $this->special_offers_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSpecialOffers} ";
            $sql .= "where special_offers_aid = :special_offers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_offers_aid" => $this->special_offers_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
