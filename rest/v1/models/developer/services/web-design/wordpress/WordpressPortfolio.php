<?php

class WordpressPortfolio
{
    public $wordpress_portfolio_aid;
    public $wordpress_portfolio_subtitle;
    public $wordpress_portfolio_title;
    public $wordpress_portfolio_url_a;
    public $wordpress_portfolio_website_a;
    public $wordpress_portfolio_img_a;
    public $wordpress_portfolio_url_b;
    public $wordpress_portfolio_website_b;
    public $wordpress_portfolio_img_b;
    public $wordpress_portfolio_url_c;
    public $wordpress_portfolio_website_c;
    public $wordpress_portfolio_img_c;
    public $wordpress_portfolio_url_d;
    public $wordpress_portfolio_website_d;
    public $wordpress_portfolio_img_d;
    public $wordpress_portfolio_url_e;
    public $wordpress_portfolio_website_e;
    public $wordpress_portfolio_img_e;
    public $wordpress_portfolio_url_f;
    public $wordpress_portfolio_website_f;
    public $wordpress_portfolio_img_f;
    public $wordpress_portfolio_url_g;
    public $wordpress_portfolio_website_g;
    public $wordpress_portfolio_img_g;
    public $wordpress_portfolio_url_h;
    public $wordpress_portfolio_website_h;
    public $wordpress_portfolio_img_h;
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
            $sql .= "(wordpress_portfolio_subtitle, ";
            $sql .= "wordpress_portfolio_title, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_subtitle, ";
            $sql .= ":wordpress_portfolio_title, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_subtitle" => $this->wordpress_portfolio_subtitle,
                "wordpress_portfolio_title" => $this->wordpress_portfolio_title,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioA()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_a, ";
            $sql .= "wordpress_portfolio_website_a, ";
            $sql .= "wordpress_portfolio_img_a, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_a, ";
            $sql .= ":wordpress_portfolio_website_a, ";
            $sql .= ":wordpress_portfolio_img_a, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_a" => $this->wordpress_portfolio_url_a,
                "wordpress_portfolio_website_a" => $this->wordpress_portfolio_website_a,
                "wordpress_portfolio_img_a" => $this->wordpress_portfolio_img_a,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioB()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_b, ";
            $sql .= "wordpress_portfolio_website_b, ";
            $sql .= "wordpress_portfolio_img_b, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_b, ";
            $sql .= ":wordpress_portfolio_website_b, ";
            $sql .= ":wordpress_portfolio_img_b, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_b" => $this->wordpress_portfolio_url_b,
                "wordpress_portfolio_website_b" => $this->wordpress_portfolio_website_b,
                "wordpress_portfolio_img_b" => $this->wordpress_portfolio_img_b,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioC()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_c, ";
            $sql .= "wordpress_portfolio_website_c, ";
            $sql .= "wordpress_portfolio_img_c, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_c, ";
            $sql .= ":wordpress_portfolio_website_c, ";
            $sql .= ":wordpress_portfolio_img_c, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_c" => $this->wordpress_portfolio_url_c,
                "wordpress_portfolio_website_c" => $this->wordpress_portfolio_website_c,
                "wordpress_portfolio_img_c" => $this->wordpress_portfolio_img_c,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioD()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_d, ";
            $sql .= "wordpress_portfolio_website_d, ";
            $sql .= "wordpress_portfolio_img_d, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_d, ";
            $sql .= ":wordpress_portfolio_website_d, ";
            $sql .= ":wordpress_portfolio_img_d, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_d" => $this->wordpress_portfolio_url_d,
                "wordpress_portfolio_website_d" => $this->wordpress_portfolio_website_d,
                "wordpress_portfolio_img_d" => $this->wordpress_portfolio_img_d,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioE()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_e, ";
            $sql .= "wordpress_portfolio_website_e, ";
            $sql .= "wordpress_portfolio_img_e, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_e, ";
            $sql .= ":wordpress_portfolio_website_e, ";
            $sql .= ":wordpress_portfolio_img_e, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_e" => $this->wordpress_portfolio_url_e,
                "wordpress_portfolio_website_e" => $this->wordpress_portfolio_website_e,
                "wordpress_portfolio_img_e" => $this->wordpress_portfolio_img_e,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioF()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_f, ";
            $sql .= "wordpress_portfolio_website_f, ";
            $sql .= "wordpress_portfolio_img_f, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_f, ";
            $sql .= ":wordpress_portfolio_website_f, ";
            $sql .= ":wordpress_portfolio_img_f, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_f" => $this->wordpress_portfolio_url_f,
                "wordpress_portfolio_website_f" => $this->wordpress_portfolio_website_f,
                "wordpress_portfolio_img_f" => $this->wordpress_portfolio_img_f,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioG()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_g, ";
            $sql .= "wordpress_portfolio_website_g, ";
            $sql .= "wordpress_portfolio_img_g, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_g, ";
            $sql .= ":wordpress_portfolio_website_g, ";
            $sql .= ":wordpress_portfolio_img_g, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_g" => $this->wordpress_portfolio_url_g,
                "wordpress_portfolio_website_g" => $this->wordpress_portfolio_website_g,
                "wordpress_portfolio_img_g" => $this->wordpress_portfolio_img_g,
                "wordpress_portfolio_created" => $this->wordpress_portfolio_created,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPorfolioH()
    {
        try {
            $sql = "insert into {$this->tblWordpressPortfolio}";
            $sql .= "(wordpress_portfolio_url_h, ";
            $sql .= "wordpress_portfolio_website_h, ";
            $sql .= "wordpress_portfolio_img_h, ";
            $sql .= "wordpress_portfolio_created, ";
            $sql .= "wordpress_portfolio_datetime ) values ( ";
            $sql .= ":wordpress_portfolio_url_h, ";
            $sql .= ":wordpress_portfolio_website_h, ";
            $sql .= ":wordpress_portfolio_img_h, ";
            $sql .= ":wordpress_portfolio_created, ";
            $sql .= ":wordpress_portfolio_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_h" => $this->wordpress_portfolio_url_h,
                "wordpress_portfolio_website_h" => $this->wordpress_portfolio_website_h,
                "wordpress_portfolio_img_h" => $this->wordpress_portfolio_img_h,
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
            $sql .= "wordpress_portfolio_subtitle = :wordpress_portfolio_subtitle, ";
            $sql .= "wordpress_portfolio_title = :wordpress_portfolio_title, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_subtitle" => $this->wordpress_portfolio_subtitle,
                "wordpress_portfolio_title" => $this->wordpress_portfolio_title,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioA()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_a = :wordpress_portfolio_url_a, ";
            $sql .= "wordpress_portfolio_website_a = :wordpress_portfolio_website_a, ";
            $sql .= "wordpress_portfolio_img_a = :wordpress_portfolio_img_a, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_a" => $this->wordpress_portfolio_url_a,
                "wordpress_portfolio_website_a" => $this->wordpress_portfolio_website_a,
                "wordpress_portfolio_img_a" => $this->wordpress_portfolio_img_a,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioB()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_b = :wordpress_portfolio_url_b, ";
            $sql .= "wordpress_portfolio_website_b = :wordpress_portfolio_website_b, ";
            $sql .= "wordpress_portfolio_img_b = :wordpress_portfolio_img_b, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_b" => $this->wordpress_portfolio_url_b,
                "wordpress_portfolio_website_b" => $this->wordpress_portfolio_website_b,
                "wordpress_portfolio_img_b" => $this->wordpress_portfolio_img_b,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioC()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_c = :wordpress_portfolio_url_c, ";
            $sql .= "wordpress_portfolio_website_c = :wordpress_portfolio_website_c, ";
            $sql .= "wordpress_portfolio_img_c = :wordpress_portfolio_img_c, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_c" => $this->wordpress_portfolio_url_c,
                "wordpress_portfolio_website_c" => $this->wordpress_portfolio_website_c,
                "wordpress_portfolio_img_c" => $this->wordpress_portfolio_img_c,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioD()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_d = :wordpress_portfolio_url_d, ";
            $sql .= "wordpress_portfolio_website_d = :wordpress_portfolio_website_d, ";
            $sql .= "wordpress_portfolio_img_d = :wordpress_portfolio_img_d, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_d" => $this->wordpress_portfolio_url_d,
                "wordpress_portfolio_website_d" => $this->wordpress_portfolio_website_d,
                "wordpress_portfolio_img_d" => $this->wordpress_portfolio_img_d,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioE()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_e = :wordpress_portfolio_url_e, ";
            $sql .= "wordpress_portfolio_website_e = :wordpress_portfolio_website_e, ";
            $sql .= "wordpress_portfolio_img_e = :wordpress_portfolio_img_e, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_e" => $this->wordpress_portfolio_url_e,
                "wordpress_portfolio_website_e" => $this->wordpress_portfolio_website_e,
                "wordpress_portfolio_img_e" => $this->wordpress_portfolio_img_e,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioF()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_f = :wordpress_portfolio_url_f, ";
            $sql .= "wordpress_portfolio_website_f = :wordpress_portfolio_website_f, ";
            $sql .= "wordpress_portfolio_img_f = :wordpress_portfolio_img_f, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_f" => $this->wordpress_portfolio_url_f,
                "wordpress_portfolio_website_f" => $this->wordpress_portfolio_website_f,
                "wordpress_portfolio_img_f" => $this->wordpress_portfolio_img_f,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioG()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_g = :wordpress_portfolio_url_g, ";
            $sql .= "wordpress_portfolio_website_g = :wordpress_portfolio_website_g, ";
            $sql .= "wordpress_portfolio_img_g = :wordpress_portfolio_img_g, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_g" => $this->wordpress_portfolio_url_g,
                "wordpress_portfolio_website_g" => $this->wordpress_portfolio_website_g,
                "wordpress_portfolio_img_g" => $this->wordpress_portfolio_img_g,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePortfolioH()
    {
        try {
            $sql = "update {$this->tblWordpressPortfolio} set ";
            $sql .= "wordpress_portfolio_url_h = :wordpress_portfolio_url_h, ";
            $sql .= "wordpress_portfolio_website_h = :wordpress_portfolio_website_h, ";
            $sql .= "wordpress_portfolio_img_h = :wordpress_portfolio_img_h, ";
            $sql .= "wordpress_portfolio_datetime = :wordpress_portfolio_datetime ";
            $sql .= "where wordpress_portfolio_aid = :wordpress_portfolio_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "wordpress_portfolio_url_h" => $this->wordpress_portfolio_url_h,
                "wordpress_portfolio_website_h" => $this->wordpress_portfolio_website_h,
                "wordpress_portfolio_img_h" => $this->wordpress_portfolio_img_h,
                "wordpress_portfolio_datetime" => $this->wordpress_portfolio_datetime,
                "wordpress_portfolio_aid" => $this->wordpress_portfolio_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
