<?php

class DonationScope
{
    public $donation_scope_aid;
    public $donation_scope_title;
    public $donation_scope_desc;
    public $donation_scope_img;
    public $donation_scope_button_text;
    public $donation_scope_created;
    public $donation_scope_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblDonationScope;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDonationScope = "fbsv2_services_donation_scope";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblDonationScope} ";
            $sql .= "order by donation_scope_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblDonationScope}";
            $sql .= "(donation_scope_title, ";
            $sql .= "donation_scope_desc, ";
            $sql .= "donation_scope_img, ";
            $sql .= "donation_scope_button_text, ";
            $sql .= "donation_scope_created, ";
            $sql .= "donation_scope_datetime ) values ( ";
            $sql .= ":donation_scope_title, ";
            $sql .= ":donation_scope_desc, ";
            $sql .= ":donation_scope_img, ";
            $sql .= ":donation_scope_button_text, ";
            $sql .= ":donation_scope_created, ";
            $sql .= ":donation_scope_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_scope_title" => $this->donation_scope_title,
                "donation_scope_desc" => $this->donation_scope_desc,
                "donation_scope_img" => $this->donation_scope_img,
                "donation_scope_button_text" => $this->donation_scope_button_text,
                "donation_scope_created" => $this->donation_scope_created,
                "donation_scope_datetime" => $this->donation_scope_datetime,
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
            $sql = "update {$this->tblDonationScope} set ";
            $sql .= "donation_scope_title = :donation_scope_title, ";
            $sql .= "donation_scope_desc = :donation_scope_desc, ";
            $sql .= "donation_scope_img = :donation_scope_img, ";
            $sql .= "donation_scope_button_text = :donation_scope_button_text, ";
            $sql .= "donation_scope_datetime = :donation_scope_datetime ";
            $sql .= "where donation_scope_aid = :donation_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_scope_title" => $this->donation_scope_title,
                "donation_scope_desc" => $this->donation_scope_desc,
                "donation_scope_img" => $this->donation_scope_img,
                "donation_scope_button_text" => $this->donation_scope_button_text,
                "donation_scope_datetime" => $this->donation_scope_datetime,
                "donation_scope_aid" => $this->donation_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblDonationScope} ";
            $sql .= "where donation_scope_aid = :donation_scope_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_scope_aid" => $this->donation_scope_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
