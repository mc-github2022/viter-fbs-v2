<?php

class ContinuingTitles
{
    public $continuing_titles_aid;
    public $continuing_titles_batches_subtitle;
    public $continuing_titles_batches_title;
    public $continuing_titles_vid_testimonial_subtitle;
    public $continuing_titles_vid_testimonial_title;
    public $continuing_titles_partnersays_subtitle;
    public $continuing_titles_partnersays_title;
    public $continuing_titles_created;
    public $continuing_titles_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContinuingTitles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContinuingTitles = "fbsv2_services_continuing_titles";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContinuingTitles} ";
            $sql .= "order by continuing_titles_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function createBatchesTitle()
    {
        try {
            $sql = "insert into {$this->tblContinuingTitles}";
            $sql .= "(continuing_titles_batches_subtitle, ";
            $sql .= "continuing_titles_batches_title, ";
            $sql .= "continuing_titles_created, ";
            $sql .= "continuing_titles_datetime ) values ( ";
            $sql .= ":continuing_titles_batches_subtitle, ";
            $sql .= ":continuing_titles_batches_title, ";
            $sql .= ":continuing_titles_created, ";
            $sql .= ":continuing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_batches_subtitle" => $this->continuing_titles_batches_subtitle,
                "continuing_titles_batches_title" => $this->continuing_titles_batches_title,
                "continuing_titles_created" => $this->continuing_titles_created,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
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
            $sql = "insert into {$this->tblContinuingTitles}";
            $sql .= "(continuing_titles_vid_testimonial_subtitle, ";
            $sql .= "continuing_titles_vid_testimonial_title, ";
            $sql .= "continuing_titles_created, ";
            $sql .= "continuing_titles_datetime ) values ( ";
            $sql .= ":continuing_titles_vid_testimonial_subtitle, ";
            $sql .= ":continuing_titles_vid_testimonial_title, ";
            $sql .= ":continuing_titles_created, ";
            $sql .= ":continuing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_vid_testimonial_subtitle" => $this->continuing_titles_vid_testimonial_subtitle,
                "continuing_titles_vid_testimonial_title" => $this->continuing_titles_vid_testimonial_title,
                "continuing_titles_created" => $this->continuing_titles_created,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
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
            $sql = "insert into {$this->tblContinuingTitles}";
            $sql .= "(continuing_titles_partnersays_subtitle, ";
            $sql .= "continuing_titles_partnersays_subtitle, ";
            $sql .= "continuing_titles_created, ";
            $sql .= "continuing_titles_datetime ) values ( ";
            $sql .= ":continuing_titles_partnersays_subtitle, ";
            $sql .= ":continuing_titles_partnersays_subtitle, ";
            $sql .= ":continuing_titles_created, ";
            $sql .= ":continuing_titles_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_partnersays_subtitle" => $this->continuing_titles_partnersays_subtitle,
                "continuing_titles_partnersays_subtitle" => $this->continuing_titles_partnersays_subtitle,
                "continuing_titles_created" => $this->continuing_titles_created,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateBatchesTitle()
    {
        try {
            $sql = "update {$this->tblContinuingTitles} set ";
            $sql .= "continuing_titles_batches_subtitle = :continuing_titles_batches_subtitle, ";
            $sql .= "continuing_titles_batches_title = :continuing_titles_batches_title, ";
            $sql .= "continuing_titles_datetime = :continuing_titles_datetime ";
            $sql .= "where continuing_titles_aid = :continuing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_batches_subtitle" => $this->continuing_titles_batches_subtitle,
                "continuing_titles_batches_title" => $this->continuing_titles_batches_title,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
                "continuing_titles_aid" => $this->continuing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateVidTestimonialTitle()
    {
        try {
            $sql = "update {$this->tblContinuingTitles} set ";
            $sql .= "continuing_titles_vid_testimonial_subtitle = :continuing_titles_vid_testimonial_subtitle, ";
            $sql .= "continuing_titles_vid_testimonial_title = :continuing_titles_vid_testimonial_title, ";
            $sql .= "continuing_titles_datetime = :continuing_titles_datetime ";
            $sql .= "where continuing_titles_aid = :continuing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_vid_testimonial_subtitle" => $this->continuing_titles_vid_testimonial_subtitle,
                "continuing_titles_vid_testimonial_title" => $this->continuing_titles_vid_testimonial_title,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
                "continuing_titles_aid" => $this->continuing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updatePartnerSaysTitle()
    {
        try {
            $sql = "update {$this->tblContinuingTitles} set ";
            $sql .= "continuing_titles_partnersays_subtitle = :continuing_titles_partnersays_subtitle, ";
            $sql .= "continuing_titles_partnersays_title = :continuing_titles_partnersays_title, ";
            $sql .= "continuing_titles_datetime = :continuing_titles_datetime ";
            $sql .= "where continuing_titles_aid = :continuing_titles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "continuing_titles_partnersays_subtitle" => $this->continuing_titles_partnersays_subtitle,
                "continuing_titles_partnersays_title" => $this->continuing_titles_partnersays_title,
                "continuing_titles_datetime" => $this->continuing_titles_datetime,
                "continuing_titles_aid" => $this->continuing_titles_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
