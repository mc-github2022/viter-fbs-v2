<?php

class Pricing
{
    public $pricing_aid;
    public $pricing_icon;
    public $pricing_title;
    public $pricing_rate;
    public $pricing_sub_title;
    public $pricing_button;
    public $pricing_active;
    public $pricing_category;
    public $pricing_created;
    public $pricing_datetime;

    public $connection;
    public $lastInsertedId;
    public $pricing_start;
    public $pricing_total;
    public $pricing_search;

    public $tblPricing;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPricing = "pricing";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPricing} ";
            $sql .= "order by pricing_aid asc ";
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
            $sql .= "{$this->tblPricing} ";
            $sql .= "order by pricing_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->pricing_start - 1,
                "total" => $this->pricing_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPricing} ";
            $sql .= "where pricing_title = pricing_title";
            $sql .= "and (pricing_title like :pricing_title ";
            $sql .= "or pricing_rate like :pricing_rate ";
            $sql .= "or pricing_button like :pricing_button ";
            $sql .= "or pricing_category like :pricing_category ";
            $sql .= "or pricing_sub_title like :pricing_sub_title) ";
            $sql .= "order by pricing_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_title" => "%{$this->pricing_search}%",
                "pricing_rate" => "%{$this->pricing_search}%",
                "pricing_button" => "%{$this->pricing_search}%",
                "pricing_category" => "%{$this->pricing_search}%",
                "pricing_sub_title" => "%{$this->pricing_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPricing}";
            $sql .= "(pricing_icon, ";
            $sql .= "pricing_title, ";
            $sql .= "pricing_rate, ";
            $sql .= "pricing_sub_title, ";
            $sql .= "pricing_button, ";
            $sql .= "pricing_active, ";
            $sql .= "pricing_category, ";
            $sql .= "pricing_created, ";
            $sql .= "pricing_datetime ) values ( ";
            $sql .= ":pricing_icon, ";
            $sql .= ":pricing_title, ";
            $sql .= ":pricing_rate, ";
            $sql .= ":pricing_sub_title, ";
            $sql .= ":pricing_button, ";
            $sql .= ":pricing_active, ";
            $sql .= ":pricing_category, ";
            $sql .= ":pricing_created, ";
            $sql .= ":pricing_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_icon" => $this->pricing_icon,
                "pricing_title" => $this->pricing_title,
                "pricing_rate" => $this->pricing_rate,
                "pricing_sub_title" => $this->pricing_sub_title,
                "pricing_button" => $this->pricing_button,
                "pricing_active" => $this->pricing_active,
                "pricing_category" => $this->pricing_category,
                "pricing_created" => $this->pricing_created,
                "pricing_datetime" => $this->pricing_datetime,
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
            $sql = "update {$this->tblPricing} set ";
            $sql .= "pricing_icon = :pricing_icon, ";
            $sql .= "pricing_title = :pricing_title, ";
            $sql .= "pricing_rate = :pricing_rate, ";
            $sql .= "pricing_sub_title = :pricing_sub_title, ";
            $sql .= "pricing_button = :pricing_button, ";
            $sql .= "pricing_active = :pricing_active, ";
            $sql .= "pricing_category = :pricing_category, ";
            $sql .= "pricing_created = :pricing_created ";
            $sql .= "where pricing_aid = :pricing_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_icon" => $this->pricing_icon,
                "pricing_title" => $this->pricing_title,
                "pricing_rate" => $this->pricing_rate,
                "pricing_sub_title" => $this->pricing_sub_title,
                "pricing_button" => $this->pricing_button,
                "pricing_active" => $this->pricing_active,
                "pricing_category" => $this->pricing_category,
                "pricing_created" => $this->pricing_created,
                "pricing_aid" => $this->pricing_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPricing} ";
            $sql .= "where pricing_aid = :pricing_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_aid" => $this->pricing_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
