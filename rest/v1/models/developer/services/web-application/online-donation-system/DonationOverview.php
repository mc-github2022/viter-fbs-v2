<?php

class DonationOverview
{
    public $donation_overview_aid;
    public $donation_overview_subtitle;
    public $donation_overview_title;
    public $donation_overview_img;
    public $donation_overview_button_text;
    public $donation_overview_list_title_a;
    public $donation_overview_list_description_a;
    public $donation_overview_list_title_b;
    public $donation_overview_list_description_b;
    public $donation_overview_list_title_c;
    public $donation_overview_list_description_c;
    public $donation_overview_created;
    public $donation_overview_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblDonationOverview;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblDonationOverview = "fbsv2_services_donation_overview";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblDonationOverview} ";
            $sql .= "order by donation_overview_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblDonationOverview}";
            $sql .= "(donation_overview_title, ";
            $sql .= "donation_overview_subtitle, ";
            $sql .= "donation_overview_img, ";
            $sql .= "donation_overview_button_text, ";
            $sql .= "donation_overview_created, ";
            $sql .= "donation_overview_datetime ) values ( ";
            $sql .= ":donation_overview_title, ";
            $sql .= ":donation_overview_subtitle, ";
            $sql .= ":donation_overview_img, ";
            $sql .= ":donation_overview_button_text, ";
            $sql .= ":donation_overview_created, ";
            $sql .= ":donation_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_overview_title" => $this->donation_overview_title,
                "donation_overview_subtitle" => $this->donation_overview_subtitle,
                "donation_overview_img" => $this->donation_overview_img,
                "donation_overview_button_text" => $this->donation_overview_button_text,
                "donation_overview_created" => $this->donation_overview_created,
                "donation_overview_datetime" => $this->donation_overview_datetime,
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
            $sql = "update {$this->tblDonationOverview} set ";
            $sql .= "donation_overview_title = :donation_overview_title, ";
            $sql .= "donation_overview_subtitle = :donation_overview_subtitle, ";
            $sql .= "donation_overview_img = :donation_overview_img, ";
            $sql .= "donation_overview_button_text = :donation_overview_button_text, ";
            $sql .= "donation_overview_datetime = :donation_overview_datetime ";
            $sql .= "where donation_overview_aid = :donation_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_overview_title" => $this->donation_overview_title,
                "donation_overview_subtitle" => $this->donation_overview_subtitle,
                "donation_overview_img" => $this->donation_overview_img,
                "donation_overview_button_text" => $this->donation_overview_button_text,
                "donation_overview_datetime" => $this->donation_overview_datetime,
                "donation_overview_aid" => $this->donation_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createOverviewList()
    {
        try {
            $sql = "insert into {$this->tblDonationOverview}";
            $sql .= "(donation_overview_list_title_a, ";
            $sql .= "donation_overview_list_description_a, ";
            $sql .= "donation_overview_list_title_b, ";
            $sql .= "donation_overview_list_description_b, ";
            $sql .= "donation_overview_list_title_c, ";
            $sql .= "donation_overview_list_description_c, ";
            $sql .= "donation_overview_created, ";
            $sql .= "donation_overview_datetime ) values ( ";
            $sql .= ":donation_overview_list_title_a, ";
            $sql .= ":donation_overview_list_description_a, ";
            $sql .= ":donation_overview_list_title_b, ";
            $sql .= ":donation_overview_list_description_b, ";
            $sql .= ":donation_overview_list_title_c, ";
            $sql .= ":donation_overview_list_description_c, ";
            $sql .= ":donation_overview_created, ";
            $sql .= ":donation_overview_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_overview_list_title_a" => $this->donation_overview_list_title_a,
                "donation_overview_list_description_a" => $this->donation_overview_list_description_a,
                "donation_overview_list_title_b" => $this->donation_overview_list_title_b,
                "donation_overview_list_description_b" => $this->donation_overview_list_description_b,
                "donation_overview_list_title_c" => $this->donation_overview_list_title_c,
                "donation_overview_list_description_c" => $this->donation_overview_list_description_c,
                "donation_overview_created" => $this->donation_overview_created,
                "donation_overview_datetime" => $this->donation_overview_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateOverviewList()
    {
        try {
            $sql = "update {$this->tblDonationOverview} set ";
            $sql .= "donation_overview_list_title_a = :donation_overview_list_title_a, ";
            $sql .= "donation_overview_list_description_a = :donation_overview_list_description_a, ";
            $sql .= "donation_overview_list_title_b = :donation_overview_list_title_b, ";
            $sql .= "donation_overview_list_description_b = :donation_overview_list_description_b, ";
            $sql .= "donation_overview_list_title_c = :donation_overview_list_title_c, ";
            $sql .= "donation_overview_list_description_c = :donation_overview_list_description_c, ";
            $sql .= "donation_overview_datetime = :donation_overview_datetime ";
            $sql .= "where donation_overview_aid = :donation_overview_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "donation_overview_list_title_a" => $this->donation_overview_list_title_a,
                "donation_overview_list_description_a" => $this->donation_overview_list_description_a,
                "donation_overview_list_title_b" => $this->donation_overview_list_title_b,
                "donation_overview_list_description_b" => $this->donation_overview_list_description_b,
                "donation_overview_list_title_c" => $this->donation_overview_list_title_c,
                "donation_overview_list_description_c" => $this->donation_overview_list_description_c,
                "donation_overview_datetime" => $this->donation_overview_datetime,
                "donation_overview_aid" => $this->donation_overview_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
