<?php

class ContactFormCareers
{
    public $form_careers_aid;
    public $form_careers_subtitle;
    public $form_careers_title;
    public $form_careers_telephone;
    public $form_careers_phone;
    public $form_careers_position_a;
    public $form_careers_name_a;
    public $form_careers_email_a;
    public $form_careers_position_b;
    public $form_careers_name_b;
    public $form_careers_email_b;
    public $form_careers_created;
    public $form_careers_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactFormCareers;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactFormCareers = "fbsv2_contact_form_careers";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactFormCareers} ";
            $sql .= "order by form_careers_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactFormCareers}";
            $sql .= "(form_careers_subtitle, ";
            $sql .= "form_careers_title, ";
            $sql .= "form_careers_telephone, ";
            $sql .= "form_careers_phone, ";
            $sql .= "form_careers_position_a, ";
            $sql .= "form_careers_name_a, ";
            $sql .= "form_careers_email_a, ";
            $sql .= "form_careers_name_b, ";
            $sql .= "form_careers_position_b, ";
            $sql .= "form_careers_email_b, ";
            $sql .= "form_careers_created, ";
            $sql .= "form_careers_datetime ) values ( ";
            $sql .= ":form_careers_subtitle, ";
            $sql .= ":form_careers_title, ";
            $sql .= ":form_careers_telephone, ";
            $sql .= ":form_careers_phone, ";
            $sql .= ":form_careers_position_a, ";
            $sql .= ":form_careers_name_a, ";
            $sql .= ":form_careers_email_a, ";
            $sql .= ":form_careers_name_b, ";
            $sql .= ":form_careers_position_b, ";
            $sql .= ":form_careers_email_b, ";
            $sql .= ":form_careers_created, ";
            $sql .= ":form_careers_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_careers_subtitle" => $this->form_careers_subtitle,
                "form_careers_title" => $this->form_careers_title,
                "form_careers_telephone" => $this->form_careers_telephone,
                "form_careers_phone" => $this->form_careers_phone,
                "form_careers_position_a" => $this->form_careers_position_a,
                "form_careers_name_a" => $this->form_careers_name_a,
                "form_careers_email_a" => $this->form_careers_email_a,
                "form_careers_name_b" => $this->form_careers_name_b,
                "form_careers_position_b" => $this->form_careers_position_b,
                "form_careers_email_b" => $this->form_careers_email_b,
                "form_careers_created" => $this->form_careers_created,
                "form_careers_datetime" => $this->form_careers_datetime,
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
            $sql = "update {$this->tblContactFormCareers} set ";
            $sql .= "form_careers_subtitle = :form_careers_subtitle, ";
            $sql .= "form_careers_title = :form_careers_title, ";
            $sql .= "form_careers_telephone = :form_careers_telephone, ";
            $sql .= "form_careers_phone = :form_careers_phone, ";
            $sql .= "form_careers_position_a = :form_careers_position_a, ";
            $sql .= "form_careers_name_a = :form_careers_name_a, ";
            $sql .= "form_careers_email_a = :form_careers_email_a, ";
            $sql .= "form_careers_name_b = :form_careers_name_b, ";
            $sql .= "form_careers_position_b = :form_careers_position_b, ";
            $sql .= "form_careers_email_b = :form_careers_email_b, ";
            $sql .= "form_careers_datetime = :form_careers_datetime ";
            $sql .= "where form_careers_aid = :form_careers_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_careers_subtitle" => $this->form_careers_subtitle,
                "form_careers_title" => $this->form_careers_title,
                "form_careers_telephone" => $this->form_careers_telephone,
                "form_careers_phone" => $this->form_careers_phone,
                "form_careers_position_a" => $this->form_careers_position_a,
                "form_careers_name_a" => $this->form_careers_name_a,
                "form_careers_email_a" => $this->form_careers_email_a,
                "form_careers_name_b" => $this->form_careers_name_b,
                "form_careers_position_b" => $this->form_careers_position_b,
                "form_careers_email_b" => $this->form_careers_email_b,
                "form_careers_datetime" => $this->form_careers_datetime,
                "form_careers_aid" => $this->form_careers_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
