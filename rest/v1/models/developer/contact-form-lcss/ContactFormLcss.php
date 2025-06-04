<?php

class ContactFormLcss
{
    public $form_lcss_aid;
    public $form_lcss_subtitle;
    public $form_lcss_title;
    public $form_lcss_telephone;
    public $form_lcss_phone;
    public $form_lcss_file;
    public $form_lcss_computer_title;
    public $form_lcss_computer_name;
    public $form_lcss_accounting_title;
    public $form_lcss_computer_email;
    public $form_lcss_accounting_name;
    public $form_lcss_accounting_email;
    public $form_lcss_created;
    public $form_lcss_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblContactFormLcss;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactFormLcss = "fbsv2_contact_form_lcss";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactFormLcss} ";
            $sql .= "order by form_lcss_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactFormLcss}";
            $sql .= "(form_lcss_subtitle, ";
            $sql .= "form_lcss_title, ";
            $sql .= "form_lcss_telephone, ";
            $sql .= "form_lcss_phone, ";
            $sql .= "form_lcss_file, ";
            $sql .= "form_lcss_computer_title, ";
            $sql .= "form_lcss_computer_name, ";
            $sql .= "form_lcss_computer_email, ";
            $sql .= "form_lcss_accounting_title, ";
            $sql .= "form_lcss_accounting_name, ";
            $sql .= "form_lcss_accounting_email, ";
            $sql .= "form_lcss_created, ";
            $sql .= "form_lcss_datetime ) values ( ";
            $sql .= ":form_lcss_subtitle, ";
            $sql .= ":form_lcss_title, ";
            $sql .= ":form_lcss_telephone, ";
            $sql .= ":form_lcss_phone, ";
            $sql .= ":form_lcss_file, ";
            $sql .= ":form_lcss_computer_title, ";
            $sql .= ":form_lcss_computer_name, ";
            $sql .= ":form_lcss_computer_email, ";
            $sql .= ":form_lcss_accounting_title, ";
            $sql .= ":form_lcss_accounting_name, ";
            $sql .= ":form_lcss_accounting_email, ";
            $sql .= ":form_lcss_created, ";
            $sql .= ":form_lcss_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_lcss_subtitle" => $this->form_lcss_subtitle,
                "form_lcss_title" => $this->form_lcss_title,
                "form_lcss_telephone" => $this->form_lcss_telephone,
                "form_lcss_phone" => $this->form_lcss_phone,
                "form_lcss_file" => $this->form_lcss_file,
                "form_lcss_computer_title" => $this->form_lcss_computer_title,
                "form_lcss_computer_name" => $this->form_lcss_computer_name,
                "form_lcss_computer_email" => $this->form_lcss_computer_email,
                "form_lcss_accounting_title" => $this->form_lcss_accounting_title,
                "form_lcss_accounting_name" => $this->form_lcss_accounting_name,
                "form_lcss_accounting_email" => $this->form_lcss_accounting_email,
                "form_lcss_created" => $this->form_lcss_created,
                "form_lcss_datetime" => $this->form_lcss_datetime,
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
            $sql = "update {$this->tblContactFormLcss} set ";
            $sql .= "form_lcss_subtitle = :form_lcss_subtitle, ";
            $sql .= "form_lcss_title = :form_lcss_title, ";
            $sql .= "form_lcss_telephone = :form_lcss_telephone, ";
            $sql .= "form_lcss_phone = :form_lcss_phone, ";
            $sql .= "form_lcss_file = :form_lcss_file, ";
            $sql .= "form_lcss_computer_title = :form_lcss_computer_title, ";
            $sql .= "form_lcss_computer_name = :form_lcss_computer_name, ";
            $sql .= "form_lcss_computer_email = :form_lcss_computer_email, ";
            $sql .= "form_lcss_accounting_title = :form_lcss_accounting_title, ";
            $sql .= "form_lcss_accounting_name = :form_lcss_accounting_name, ";
            $sql .= "form_lcss_accounting_email = :form_lcss_accounting_email, ";
            $sql .= "form_lcss_datetime = :form_lcss_datetime ";
            $sql .= "where form_lcss_aid = :form_lcss_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_lcss_subtitle" => $this->form_lcss_subtitle,
                "form_lcss_title" => $this->form_lcss_title,
                "form_lcss_telephone" => $this->form_lcss_telephone,
                "form_lcss_phone" => $this->form_lcss_phone,
                "form_lcss_file" => $this->form_lcss_file,
                "form_lcss_computer_title" => $this->form_lcss_computer_title,
                "form_lcss_computer_name" => $this->form_lcss_computer_name,
                "form_lcss_computer_email" => $this->form_lcss_computer_email,
                "form_lcss_accounting_title" => $this->form_lcss_accounting_title,
                "form_lcss_accounting_name" => $this->form_lcss_accounting_name,
                "form_lcss_accounting_email" => $this->form_lcss_accounting_email,
                "form_lcss_datetime" => $this->form_lcss_datetime,
                "form_lcss_aid" => $this->form_lcss_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
