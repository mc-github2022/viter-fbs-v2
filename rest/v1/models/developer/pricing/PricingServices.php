<?php

class PricingServices
{
    public $pricing_services_aid;
    public $pricing_services_pricing_id;
    public $pricing_services_icon;
    public $pricing_services_list;
    public $pricing_services_sub_services;
    public $pricing_services_created;
    public $pricing_services_datetime;

    public $connection;
    public $lastInsertedId;
    public $pricing_services_start;
    public $pricing_services_total;
    public $pricing_services_search;

    public $tblPricingServices;
    public $tblPricing;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPricingServices = "pricing_services";
        $this->tblPricing = "pricing";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblPricingServices} as pricingServices, ";
            $sql .= "{$this->tblPricing} as pricing ";
            $sql .= "where pricingServices.pricing_services_pricing_id = pricing.pricing_aid ";
            $sql .= "order by pricingServices.pricing_services_aid asc ";
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
            $sql .= "{$this->tblPricingServices} as pricingServices, ";
            $sql .= "{$this->tblPricing} as pricing ";
            $sql .= "where pricingServices.pricing_services_pricing_id = pricing.pricing_aid ";
            $sql .= "order by pricingServices.pricing_services_aid asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->pricing_services_start - 1,
                "total" => $this->pricing_services_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblPricingServices}";
            $sql .= "(pricing_services_pricing_id, ";
            $sql .= "pricing_services_icon, ";
            $sql .= "pricing_services_list, ";
            $sql .= "pricing_services_sub_services, ";
            $sql .= "pricing_services_created, ";
            $sql .= "pricing_services_datetime ) values ( ";
            $sql .= ":pricing_services_pricing_id, ";
            $sql .= ":pricing_services_icon, ";
            $sql .= ":pricing_services_list, ";
            $sql .= ":pricing_services_sub_services, ";
            $sql .= ":pricing_services_created, ";
            $sql .= ":pricing_services_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_services_pricing_id" => $this->pricing_services_pricing_id,
                "pricing_services_icon" => $this->pricing_services_icon,
                "pricing_services_list" => $this->pricing_services_list,
                "pricing_services_sub_services" => $this->pricing_services_sub_services,
                "pricing_services_created" => $this->pricing_services_created,
                "pricing_services_datetime" => $this->pricing_services_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
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
            $sql .= "{$this->tblPricingServices} as pricingServices, ";
            $sql .= "{$this->tblPricing} as pricing ";
            $sql .= "where pricingServices.pricing_services_pricing_id = pricing.pricing_aid ";
            $sql .= "and pricingServices.pricing_services_pricing_id = pricing.pricing_aid ";
            $sql .= "and (pricingServices.pricing_services_list like :pricing_services_list ";
            $sql .= "or pricing.pricing_title like :pricing_title) ";
            $sql .= "order by pricingServices.pricing_services_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_services_pricing_id" => "%{$this->pricing_services_search}%",
                "pricing_services_list" => "%{$this->pricing_services_search}%",
                "pricing_title" => "%{$this->pricing_services_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblPricingServices} set ";
            $sql .= "pricing_services_pricing_id = :pricing_services_pricing_id, ";
            $sql .= "pricing_services_icon = :pricing_services_icon, ";
            $sql .= "pricing_services_list = :pricing_services_list, ";
            $sql .= "pricing_services_sub_services = :pricing_services_sub_services, ";
            $sql .= "pricing_services_datetime = :pricing_services_datetime ";
            $sql .= "where pricing_services_aid = :pricing_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_services_pricing_id" => $this->pricing_services_pricing_id,
                "pricing_services_icon" => $this->pricing_services_icon,
                "pricing_services_list" => $this->pricing_services_list,
                "pricing_services_sub_services" => $this->pricing_services_sub_services,
                "pricing_services_datetime" => $this->pricing_services_datetime,
                "pricing_services_aid" => $this->pricing_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblPricingServices} ";
            $sql .= "where pricing_services_aid = :pricing_services_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_services_aid" => $this->pricing_services_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchPricing() // for pricing debounce
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblPricing} ";
            $sql .= "where pricing_title like :pricing_title ";
            $sql .= "order by ";
            $sql .= "pricing_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "pricing_title" => "%{$this->pricing_services_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
