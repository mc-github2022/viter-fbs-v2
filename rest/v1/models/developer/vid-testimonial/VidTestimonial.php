<?php

class VidTestimonial
{
    public $vid_testimonial_aid;
    public $vid_testimonial_category;
    public $vid_testimonial_vid_link;
    public $vid_testimonial_logo_img;
    public $vid_testimonial_name;
    public $vid_testimonial_course;
    public $vid_testimonial_school;
    public $vid_testimonial_message;
    public $vid_testimonial_created;
    public $vid_testimonial_datetime;

    public $connection;
    public $lastInsertedId;
    public $vid_testimonial_start;
    public $vid_testimonial_total;
    public $vid_testimonial_search;

    public $tblVidTestimonial;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblVidTestimonial = "vid_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblVidTestimonial} ";
            $sql .= "order by vid_testimonial_aid desc ";
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
            $sql .= "{$this->tblVidTestimonial} ";
            $sql .= "order by vid_testimonial_aid desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->vid_testimonial_start - 1,
                "total" => $this->vid_testimonial_total,
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
            $sql .= "{$this->tblVidTestimonial} ";
            $sql .= "where vid_testimonial_vid_link = vid_testimonial_vid_link ";
            $sql .= "and (vid_testimonial_vid_link like :vid_testimonial_vid_link ";
            $sql .= "or vid_testimonial_logo_img like :vid_testimonial_logo_img ";
            $sql .= "or vid_testimonial_course like :vid_testimonial_course ";
            $sql .= "or vid_testimonial_message like :vid_testimonial_message ";
            $sql .= "or vid_testimonial_category like :vid_testimonial_category ";
            $sql .= "or vid_testimonial_name like :vid_testimonial_name) ";
            $sql .= "order by vid_testimonial_aid desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "vid_testimonial_vid_link" => "%{$this->vid_testimonial_search}%",
                "vid_testimonial_logo_img" => "%{$this->vid_testimonial_search}%",
                "vid_testimonial_course" => "%{$this->vid_testimonial_search}%",
                "vid_testimonial_message" => "%{$this->vid_testimonial_search}%",
                "vid_testimonial_category" => "%{$this->vid_testimonial_search}%",
                "vid_testimonial_name" => "%{$this->vid_testimonial_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblVidTestimonial}";
            $sql .= "(vid_testimonial_category, ";
            $sql .= "vid_testimonial_vid_link, ";
            $sql .= "vid_testimonial_logo_img, ";
            $sql .= "vid_testimonial_name, ";
            $sql .= "vid_testimonial_course, ";
            $sql .= "vid_testimonial_school, ";
            $sql .= "vid_testimonial_message, ";
            $sql .= "vid_testimonial_created, ";
            $sql .= "vid_testimonial_datetime ) values ( ";
            $sql .= ":vid_testimonial_category, ";
            $sql .= ":vid_testimonial_vid_link, ";
            $sql .= ":vid_testimonial_logo_img, ";
            $sql .= ":vid_testimonial_name, ";
            $sql .= ":vid_testimonial_course, ";
            $sql .= ":vid_testimonial_school, ";
            $sql .= ":vid_testimonial_message, ";
            $sql .= ":vid_testimonial_created, ";
            $sql .= ":vid_testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "vid_testimonial_category" => $this->vid_testimonial_category,
                "vid_testimonial_vid_link" => $this->vid_testimonial_vid_link,
                "vid_testimonial_logo_img" => $this->vid_testimonial_logo_img,
                "vid_testimonial_name" => $this->vid_testimonial_name,
                "vid_testimonial_course" => $this->vid_testimonial_course,
                "vid_testimonial_school" => $this->vid_testimonial_school,
                "vid_testimonial_message" => $this->vid_testimonial_message,
                "vid_testimonial_created" => $this->vid_testimonial_created,
                "vid_testimonial_datetime" => $this->vid_testimonial_datetime,
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
            $sql = "update {$this->tblVidTestimonial} set ";
            $sql .= "vid_testimonial_category = :vid_testimonial_category, ";
            $sql .= "vid_testimonial_vid_link = :vid_testimonial_vid_link, ";
            $sql .= "vid_testimonial_logo_img = :vid_testimonial_logo_img, ";
            $sql .= "vid_testimonial_name = :vid_testimonial_name, ";
            $sql .= "vid_testimonial_course = :vid_testimonial_course, ";
            $sql .= "vid_testimonial_school = :vid_testimonial_school, ";
            $sql .= "vid_testimonial_message = :vid_testimonial_message, ";
            $sql .= "vid_testimonial_datetime = :vid_testimonial_datetime ";
            $sql .= "where vid_testimonial_aid = :vid_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "vid_testimonial_category" => $this->vid_testimonial_category,
                "vid_testimonial_vid_link" => $this->vid_testimonial_vid_link,
                "vid_testimonial_logo_img" => $this->vid_testimonial_logo_img,
                "vid_testimonial_name" => $this->vid_testimonial_name,
                "vid_testimonial_course" => $this->vid_testimonial_course,
                "vid_testimonial_school" => $this->vid_testimonial_school,
                "vid_testimonial_message" => $this->vid_testimonial_message,
                "vid_testimonial_datetime" => $this->vid_testimonial_datetime,
                "vid_testimonial_aid" => $this->vid_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblVidTestimonial} ";
            $sql .= "where vid_testimonial_aid = :vid_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "vid_testimonial_aid" => $this->vid_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
