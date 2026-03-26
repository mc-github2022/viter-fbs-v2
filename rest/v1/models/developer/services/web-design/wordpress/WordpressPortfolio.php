<?php

class WordpressPortfolio
{
    public $wordpress_portfolio_aid;
    public $wordpress_portfolio_url;
    public $wordpress_portfolio_website;
    public $wordpress_portfolio_img;
    public $wordpress_portfolio_created;
    public $wordpress_portfolio_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblWordpressPortfolio;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWordpressPortfolio = "fbsv2_services_wordpress_portfolio";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblWordpressPortfolio} ";
            $sql .= "order by wordpress_portfolio_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function create()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url, ";
            $sql .= "wordpress_portfolio_website, ";
            $sql .= "wordpress_portfolio_img, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url, ";
            $sql .= ":wordpress_portfolio_website, ";
            $sql .= ":wordpress_portfolio_img, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url" => $this->wordpress_portfolio_url,
                "wordpress_portfolio_website" => $this->wordpress_portfolio_website,
                "wordpress_portfolio_img" => $this->wordpress_portfolio_img,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
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
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url = :wordpress_portfolio_url, ";
            $sql .= "wordpress_portfolio_website = :wordpress_portfolio_website, ";
            $sql .= "wordpress_portfolio_img = :wordpress_portfolio_img, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url" => $this->wordpress_portfolio_url,
                "wordpress_portfolio_website" => $this->wordpress_portfolio_website,
                "wordpress_portfolio_img" => $this->wordpress_portfolio_img,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblWordpressPortfolio} ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
