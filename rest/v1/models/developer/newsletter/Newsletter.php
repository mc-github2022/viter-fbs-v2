<?php

class Newsletter
{
    public $newsletter_aid;
    public $newsletter_is_active;
    public $newsletter_subject;
    public $newsletter_content;
    public $newsletter_created;
    public $newsletter_datetime;

    public $connection;
    public $lastInsertedId;

    public $newsletter_start;
    public $newsletter_total;
    public $newsletter_search;

    public $tblNewsletter;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNewsletter = "fbsv2_newsletter";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblNewsletter} ";
            $sql .= "order by newsletter_created desc ";
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
            $sql .= "{$this->tblNewsletter} ";
            $sql .= "order by newsletter_created desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->newsletter_start - 1,
                "total" => $this->newsletter_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblNewsletter} ";
            $sql .= "where ";
            $sql .= "newsletter_subject like :newsletter_subject ";
            $sql .= "order by newsletter_is_active desc, ";
            $sql .= "newsletter_subject asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_subject" => "%{$this->newsletter_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblNewsletter}";
            $sql .= "(newsletter_is_active, ";
            $sql .= "newsletter_subject, ";
            $sql .= "newsletter_content, ";
            $sql .= "newsletter_created, ";
            $sql .= "newsletter_datetime ) values ( ";
            $sql .= ":newsletter_is_active, ";
            $sql .= ":newsletter_subject, ";
            $sql .= ":newsletter_content, ";
            $sql .= ":newsletter_created, ";
            $sql .= ":newsletter_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_is_active" => $this->newsletter_is_active,
                "newsletter_subject" => $this->newsletter_subject,
                "newsletter_content" => $this->newsletter_content,
                "newsletter_created" => $this->newsletter_created,
                "newsletter_datetime" => $this->newsletter_datetime,
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
            $sql = "update {$this->tblNewsletter} set ";
            $sql .= "newsletter_subject = :newsletter_subject, ";
            $sql .= "newsletter_content = :newsletter_content, ";
            $sql .= "newsletter_datetime = :newsletter_datetime ";
            $sql .= "where newsletter_aid = :newsletter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_subject" => $this->newsletter_subject,
                "newsletter_content" => $this->newsletter_content,
                "newsletter_datetime" => $this->newsletter_datetime,
                "newsletter_aid" => $this->newsletter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblNewsletter} ";
            $sql .= "where newsletter_aid = :newsletter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_aid" => $this->newsletter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblNewsletter} set ";
            $sql .= "newsletter_is_active = :newsletter_is_active, ";
            $sql .= "newsletter_datetime = :newsletter_datetime ";
            $sql .= "where newsletter_aid = :newsletter_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "newsletter_is_active" => $this->newsletter_is_active,
                "newsletter_datetime" => $this->newsletter_datetime,
                "newsletter_aid" => $this->newsletter_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
