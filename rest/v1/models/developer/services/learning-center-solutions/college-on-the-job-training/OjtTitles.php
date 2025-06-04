<?php

class OjtTitles
{
    public $ojt_titles_aid;
    public $ojt_titles_partners_subtitle;
    public $ojt_titles_partners_title;
    public $ojt_titles_batches_subtitle;
    public $ojt_titles_batches_title;
    public $ojt_titles_vid_testimonial_subtitle;
    public $ojt_titles_vid_testimonial_title;
    public $ojt_titles_partnersays_subtitle;
    public $ojt_titles_partnersays_title;
    public $ojt_titles_created;
    public $ojt_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblOjtTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblOjtTitles = "fbsv2_services_ojt_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblOjtTitles} ";
            $sql .= "order by ojt_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblOjtTitles}";
            $sql .= "(ojt_titles_partners_subtitle, ";
            $sql .= "ojt_titles_partners_title, ";
            $sql .= "ojt_titles_created, ";
            $sql .= "ojt_titles_datetime ) values ( ";
            $sql .= ":ojt_titles_partners_subtitle, ";
            $sql .= ":ojt_titles_partners_title, ";
            $sql .= ":ojt_titles_created, ";
            $sql .= ":ojt_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_partners_subtitle" => $this->ojt_titles_partners_subtitle,
                "ojt_titles_partners_title" => $this->ojt_titles_partners_title,
                "ojt_titles_created" => $this->ojt_titles_created,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createBatchesTitle()
    {
        try {
            $sql = "insert into {$this->tblOjtTitles}";
            $sql .= "(ojt_titles_batches_subtitle, ";
            $sql .= "ojt_titles_batches_title, ";
            $sql .= "ojt_titles_created, ";
            $sql .= "ojt_titles_datetime ) values ( ";
            $sql .= ":ojt_titles_batches_subtitle, ";
            $sql .= ":ojt_titles_batches_title, ";
            $sql .= ":ojt_titles_created, ";
            $sql .= ":ojt_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_batches_subtitle" => $this->ojt_titles_batches_subtitle,
                "ojt_titles_batches_title" => $this->ojt_titles_batches_title,
                "ojt_titles_created" => $this->ojt_titles_created,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createVidTestimonialTitle()
    {
        try {
            $sql = "insert into {$this->tblOjtTitles}";
            $sql .= "(ojt_titles_vid_testimonial_subtitle, ";
            $sql .= "ojt_titles_vid_testimonial_title, ";
            $sql .= "ojt_titles_created, ";
            $sql .= "ojt_titles_datetime ) values ( ";
            $sql .= ":ojt_titles_vid_testimonial_subtitle, ";
            $sql .= ":ojt_titles_vid_testimonial_title, ";
            $sql .= ":ojt_titles_created, ";
            $sql .= ":ojt_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_vid_testimonial_subtitle" => $this->ojt_titles_vid_testimonial_subtitle,
                "ojt_titles_vid_testimonial_title" => $this->ojt_titles_vid_testimonial_title,
                "ojt_titles_created" => $this->ojt_titles_created,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createPartnerSaysTitle()
    {
        try {
            $sql = "insert into {$this->tblOjtTitles}";
            $sql .= "(ojt_titles_partnersays_subtitle, ";
            $sql .= "ojt_titles_partnersays_subtitle, ";
            $sql .= "ojt_titles_created, ";
            $sql .= "ojt_titles_datetime ) values ( ";
            $sql .= ":ojt_titles_partnersays_subtitle, ";
            $sql .= ":ojt_titles_partnersays_subtitle, ";
            $sql .= ":ojt_titles_created, ";
            $sql .= ":ojt_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_partnersays_subtitle" => $this->ojt_titles_partnersays_subtitle,
                "ojt_titles_partnersays_subtitle" => $this->ojt_titles_partnersays_subtitle,
                "ojt_titles_created" => $this->ojt_titles_created,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
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
            $sql = "update {$this->tblOjtTitles} set ";
            $sql .= "ojt_titles_partners_subtitle = :ojt_titles_partners_subtitle, ";
            $sql .= "ojt_titles_partners_title = :ojt_titles_partners_title, ";
            $sql .= "ojt_titles_datetime = :ojt_titles_datetime ";
            $sql .= "where ojt_titles_aid = :ojt_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_partners_subtitle" => $this->ojt_titles_partners_subtitle,
                "ojt_titles_partners_title" => $this->ojt_titles_partners_title,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
                "ojt_titles_aid" => $this->ojt_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateBatchesTitle()
    {
        try {
            $sql = "update {$this->tblOjtTitles} set ";
            $sql .= "ojt_titles_batches_subtitle = :ojt_titles_batches_subtitle, ";
            $sql .= "ojt_titles_batches_title = :ojt_titles_batches_title, ";
            $sql .= "ojt_titles_datetime = :ojt_titles_datetime ";
            $sql .= "where ojt_titles_aid = :ojt_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_batches_subtitle" => $this->ojt_titles_batches_subtitle,
                "ojt_titles_batches_title" => $this->ojt_titles_batches_title,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
                "ojt_titles_aid" => $this->ojt_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateVidTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblOjtTitles} set ";
            $sql .= "ojt_titles_vid_testimonial_subtitle = :ojt_titles_vid_testimonial_subtitle, ";
            $sql .= "ojt_titles_vid_testimonial_title = :ojt_titles_vid_testimonial_title, ";
            $sql .= "ojt_titles_datetime = :ojt_titles_datetime ";
            $sql .= "where ojt_titles_aid = :ojt_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_vid_testimonial_subtitle" => $this->ojt_titles_vid_testimonial_subtitle,
                "ojt_titles_vid_testimonial_title" => $this->ojt_titles_vid_testimonial_title,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
                "ojt_titles_aid" => $this->ojt_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnerSaysTitle()
    {
        try {
            $sql = "update {$this->tblOjtTitles} set ";
            $sql .= "ojt_titles_partnersays_subtitle = :ojt_titles_partnersays_subtitle, ";
            $sql .= "ojt_titles_partnersays_title = :ojt_titles_partnersays_title, ";
            $sql .= "ojt_titles_datetime = :ojt_titles_datetime ";
            $sql .= "where ojt_titles_aid = :ojt_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ojt_titles_partnersays_subtitle" => $this->ojt_titles_partnersays_subtitle,
                "ojt_titles_partnersays_title" => $this->ojt_titles_partnersays_title,
                "ojt_titles_datetime" => $this->ojt_titles_datetime,
                "ojt_titles_aid" => $this->ojt_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
