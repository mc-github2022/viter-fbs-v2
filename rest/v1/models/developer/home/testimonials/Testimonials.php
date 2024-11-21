<?php

class Testimonials
{
    public $home_testimonial_aid;
    public $home_testimonial_message;
    public $home_testimonial_name;
    public $home_testimonial_position;
    public $home_testimonial_client_img;
    public $home_testimonial_logo_img;
    public $home_testimonial_created;
    public $home_testimonial_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblTestimonials;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTestimonials = "home_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblTestimonials} ";
            $sql .= "order by home_testimonial_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblTestimonials}";
            $sql .= "(home_testimonial_message, ";
            $sql .= "home_testimonial_name, ";
            $sql .= "home_testimonial_position, ";
            $sql .= "home_testimonial_client_img, ";
            $sql .= "home_testimonial_logo_img, ";
            $sql .= "home_testimonial_created, ";
            $sql .= "home_testimonial_datetime ) values ( ";
            $sql .= ":home_testimonial_message, ";
            $sql .= ":home_testimonial_name, ";
            $sql .= ":home_testimonial_position, ";
            $sql .= ":home_testimonial_client_img, ";
            $sql .= ":home_testimonial_logo_img, ";
            $sql .= ":home_testimonial_created, ";
            $sql .= ":home_testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_testimonial_message" => $this->home_testimonial_message,
                "home_testimonial_name" => $this->home_testimonial_name,
                "home_testimonial_position" => $this->home_testimonial_position,
                "home_testimonial_client_img" => $this->home_testimonial_client_img,
                "home_testimonial_logo_img" => $this->home_testimonial_logo_img,
                "home_testimonial_created" => $this->home_testimonial_created,
                "home_testimonial_datetime" => $this->home_testimonial_datetime,
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
            $sql = "update {$this->tblTestimonials} set ";
            $sql .= "home_testimonial_message = :home_testimonial_message, ";
            $sql .= "home_testimonial_name = :home_testimonial_name, ";
            $sql .= "home_testimonial_position = :home_testimonial_position, ";
            $sql .= "home_testimonial_client_img = :home_testimonial_client_img, ";
            $sql .= "home_testimonial_logo_img = :home_testimonial_logo_img, ";
            $sql .= "home_testimonial_datetime = :home_testimonial_datetime ";
            $sql .= "where home_testimonial_aid = :home_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_testimonial_message" => $this->home_testimonial_message,
                "home_testimonial_name" => $this->home_testimonial_name,
                "home_testimonial_position" => $this->home_testimonial_position,
                "home_testimonial_client_img" => $this->home_testimonial_client_img,
                "home_testimonial_logo_img" => $this->home_testimonial_logo_img,
                "home_testimonial_datetime" => $this->home_testimonial_datetime,
                "home_testimonial_aid" => $this->home_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblTestimonials} ";
            $sql .= "where home_testimonial_aid = :home_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "home_testimonial_aid" => $this->home_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
