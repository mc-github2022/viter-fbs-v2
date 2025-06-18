<?php

class ContactFormWordpress
{
    public $form_wordpress_aid;
    public $form_wordpress_file;
    public $form_wordpress_created;
    public $form_wordpress_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactFormWordpress;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactFormWordpress = "fbsv2_contact_form_wordpress";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactFormWordpress} ";
            $sql .= "order by form_wordpress_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactFormWordpress}";
            $sql .= "(form_wordpress_file, ";
            $sql .= "form_wordpress_created, ";
            $sql .= "form_wordpress_datetime ) values ( ";
            $sql .= ":form_wordpress_file, ";
            $sql .= ":form_wordpress_created, ";
            $sql .= ":form_wordpress_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_wordpress_file" => $this->form_wordpress_file,
                "form_wordpress_created" => $this->form_wordpress_created,
                "form_wordpress_datetime" => $this->form_wordpress_datetime,
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
            $sql = "update {$this->tblContactFormWordpress} set ";
            $sql .= "form_wordpress_file = :form_wordpress_file, ";
            $sql .= "form_wordpress_datetime = :form_wordpress_datetime ";
            $sql .= "where form_wordpress_aid = :form_wordpress_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_wordpress_file" => $this->form_wordpress_file,
                "form_wordpress_datetime" => $this->form_wordpress_datetime,
                "form_wordpress_aid" => $this->form_wordpress_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
