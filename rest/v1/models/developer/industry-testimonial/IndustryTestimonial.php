<?php

class IndustryTestimonial
{
    public $industry_testimonial_aid;
    public $industry_testimonial_img;
    public $industry_testimonial_logo;
    public $industry_testimonial_name;
    public $industry_testimonial_position;
    public $industry_testimonial_message;
    public $industry_testimonial_category;
    public $industry_testimonial_company;
    public $industry_testimonial_created;
    public $industry_testimonial_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblIndustryTestimonial;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblIndustryTestimonial = "industry_testimonial";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblIndustryTestimonial} ";
            $sql .= "order by industry_testimonial_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblIndustryTestimonial}";
            $sql .= "(industry_testimonial_img, ";
            $sql .= "industry_testimonial_logo, ";
            $sql .= "industry_testimonial_name, ";
            $sql .= "industry_testimonial_position, ";
            $sql .= "industry_testimonial_message, ";
            $sql .= "industry_testimonial_category, ";
            $sql .= "industry_testimonial_company, ";
            $sql .= "industry_testimonial_created, ";
            $sql .= "industry_testimonial_datetime ) values ( ";
            $sql .= ":industry_testimonial_img, ";
            $sql .= ":industry_testimonial_logo, ";
            $sql .= ":industry_testimonial_name, ";
            $sql .= ":industry_testimonial_position, ";
            $sql .= ":industry_testimonial_message, ";
            $sql .= ":industry_testimonial_category, ";
            $sql .= ":industry_testimonial_company, ";
            $sql .= ":industry_testimonial_created, ";
            $sql .= ":industry_testimonial_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "industry_testimonial_img" => $this->industry_testimonial_img,
                "industry_testimonial_logo" => $this->industry_testimonial_logo,
                "industry_testimonial_name" => $this->industry_testimonial_name,
                "industry_testimonial_position" => $this->industry_testimonial_position,
                "industry_testimonial_message" => $this->industry_testimonial_message,
                "industry_testimonial_category" => $this->industry_testimonial_category,
                "industry_testimonial_company" => $this->industry_testimonial_company,
                "industry_testimonial_created" => $this->industry_testimonial_created,
                "industry_testimonial_datetime" => $this->industry_testimonial_datetime,
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
            $sql = "update {$this->tblIndustryTestimonial} set ";
            $sql .= "industry_testimonial_img = :industry_testimonial_img, ";
            $sql .= "industry_testimonial_logo = :industry_testimonial_logo, ";
            $sql .= "industry_testimonial_name = :industry_testimonial_name, ";
            $sql .= "industry_testimonial_position = :industry_testimonial_position, ";
            $sql .= "industry_testimonial_message = :industry_testimonial_message, ";
            $sql .= "industry_testimonial_category = :industry_testimonial_category, ";
            $sql .= "industry_testimonial_company = :industry_testimonial_company, ";
            $sql .= "industry_testimonial_created = :industry_testimonial_created ";
            $sql .= "where industry_testimonial_aid = :industry_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "industry_testimonial_img" => $this->industry_testimonial_img,
                "industry_testimonial_logo" => $this->industry_testimonial_logo,
                "industry_testimonial_name" => $this->industry_testimonial_name,
                "industry_testimonial_position" => $this->industry_testimonial_position,
                "industry_testimonial_message" => $this->industry_testimonial_message,
                "industry_testimonial_category" => $this->industry_testimonial_category,
                "industry_testimonial_company" => $this->industry_testimonial_company,
                "industry_testimonial_created" => $this->industry_testimonial_created,
                "industry_testimonial_aid" => $this->industry_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblIndustryTestimonial} ";
            $sql .= "where industry_testimonial_aid = :industry_testimonial_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "industry_testimonial_aid" => $this->industry_testimonial_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
