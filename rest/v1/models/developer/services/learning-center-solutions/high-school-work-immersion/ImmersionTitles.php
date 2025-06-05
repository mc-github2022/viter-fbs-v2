<?php

class ImmersionTitles
{
    public $immersion_titles_aid;
    public $immersion_titles_partners_subtitle;
    public $immersion_titles_partners_title;
    public $immersion_titles_batches_subtitle;
    public $immersion_titles_batches_title;
    public $immersion_titles_vid_testimonial_subtitle;
    public $immersion_titles_vid_testimonial_title;
    public $immersion_titles_partnersays_subtitle;
    public $immersion_titles_partnersays_title;
    public $immersion_titles_created;
    public $immersion_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblImmersionTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblImmersionTitles = "fbsv2_services_immersion_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblImmersionTitles} ";
            $sql .= "order by immersion_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblImmersionTitles}";
            $sql .= "(immersion_titles_partners_subtitle, ";
            $sql .= "immersion_titles_partners_title, ";
            $sql .= "immersion_titles_created, ";
            $sql .= "immersion_titles_datetime ) values ( ";
            $sql .= ":immersion_titles_partners_subtitle, ";
            $sql .= ":immersion_titles_partners_title, ";
            $sql .= ":immersion_titles_created, ";
            $sql .= ":immersion_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_partners_subtitle" => $this->immersion_titles_partners_subtitle,
                "immersion_titles_partners_title" => $this->immersion_titles_partners_title,
                "immersion_titles_created" => $this->immersion_titles_created,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
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
            $sql = "insert into {$this->tblImmersionTitles}";
            $sql .= "(immersion_titles_batches_subtitle, ";
            $sql .= "immersion_titles_batches_title, ";
            $sql .= "immersion_titles_created, ";
            $sql .= "immersion_titles_datetime ) values ( ";
            $sql .= ":immersion_titles_batches_subtitle, ";
            $sql .= ":immersion_titles_batches_title, ";
            $sql .= ":immersion_titles_created, ";
            $sql .= ":immersion_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_batches_subtitle" => $this->immersion_titles_batches_subtitle,
                "immersion_titles_batches_title" => $this->immersion_titles_batches_title,
                "immersion_titles_created" => $this->immersion_titles_created,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
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
            $sql = "insert into {$this->tblImmersionTitles}";
            $sql .= "(immersion_titles_vid_testimonial_subtitle, ";
            $sql .= "immersion_titles_vid_testimonial_title, ";
            $sql .= "immersion_titles_created, ";
            $sql .= "immersion_titles_datetime ) values ( ";
            $sql .= ":immersion_titles_vid_testimonial_subtitle, ";
            $sql .= ":immersion_titles_vid_testimonial_title, ";
            $sql .= ":immersion_titles_created, ";
            $sql .= ":immersion_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_vid_testimonial_subtitle" => $this->immersion_titles_vid_testimonial_subtitle,
                "immersion_titles_vid_testimonial_title" => $this->immersion_titles_vid_testimonial_title,
                "immersion_titles_created" => $this->immersion_titles_created,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
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
            $sql = "insert into {$this->tblImmersionTitles}";
            $sql .= "(immersion_titles_partnersays_subtitle, ";
            $sql .= "immersion_titles_partnersays_subtitle, ";
            $sql .= "immersion_titles_created, ";
            $sql .= "immersion_titles_datetime ) values ( ";
            $sql .= ":immersion_titles_partnersays_subtitle, ";
            $sql .= ":immersion_titles_partnersays_subtitle, ";
            $sql .= ":immersion_titles_created, ";
            $sql .= ":immersion_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_partnersays_subtitle" => $this->immersion_titles_partnersays_subtitle,
                "immersion_titles_partnersays_subtitle" => $this->immersion_titles_partnersays_subtitle,
                "immersion_titles_created" => $this->immersion_titles_created,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
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
            $sql = "update {$this->tblImmersionTitles} set ";
            $sql .= "immersion_titles_partners_subtitle = :immersion_titles_partners_subtitle, ";
            $sql .= "immersion_titles_partners_title = :immersion_titles_partners_title, ";
            $sql .= "immersion_titles_datetime = :immersion_titles_datetime ";
            $sql .= "where immersion_titles_aid = :immersion_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_partners_subtitle" => $this->immersion_titles_partners_subtitle,
                "immersion_titles_partners_title" => $this->immersion_titles_partners_title,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
                "immersion_titles_aid" => $this->immersion_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateBatchesTitle()
    {
        try {
            $sql = "update {$this->tblImmersionTitles} set ";
            $sql .= "immersion_titles_batches_subtitle = :immersion_titles_batches_subtitle, ";
            $sql .= "immersion_titles_batches_title = :immersion_titles_batches_title, ";
            $sql .= "immersion_titles_datetime = :immersion_titles_datetime ";
            $sql .= "where immersion_titles_aid = :immersion_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_batches_subtitle" => $this->immersion_titles_batches_subtitle,
                "immersion_titles_batches_title" => $this->immersion_titles_batches_title,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
                "immersion_titles_aid" => $this->immersion_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateVidTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblImmersionTitles} set ";
            $sql .= "immersion_titles_vid_testimonial_subtitle = :immersion_titles_vid_testimonial_subtitle, ";
            $sql .= "immersion_titles_vid_testimonial_title = :immersion_titles_vid_testimonial_title, ";
            $sql .= "immersion_titles_datetime = :immersion_titles_datetime ";
            $sql .= "where immersion_titles_aid = :immersion_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_vid_testimonial_subtitle" => $this->immersion_titles_vid_testimonial_subtitle,
                "immersion_titles_vid_testimonial_title" => $this->immersion_titles_vid_testimonial_title,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
                "immersion_titles_aid" => $this->immersion_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnerSaysTitle()
    {
        try {
            $sql = "update {$this->tblImmersionTitles} set ";
            $sql .= "immersion_titles_partnersays_subtitle = :immersion_titles_partnersays_subtitle, ";
            $sql .= "immersion_titles_partnersays_title = :immersion_titles_partnersays_title, ";
            $sql .= "immersion_titles_datetime = :immersion_titles_datetime ";
            $sql .= "where immersion_titles_aid = :immersion_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "immersion_titles_partnersays_subtitle" => $this->immersion_titles_partnersays_subtitle,
                "immersion_titles_partnersays_title" => $this->immersion_titles_partnersays_title,
                "immersion_titles_datetime" => $this->immersion_titles_datetime,
                "immersion_titles_aid" => $this->immersion_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
