<?php

class Form
{
    public $form_aid;
    public $form_address;
    public $form_contacts;
    public $form_img;
    public $form_facebook_link;
    public $form_linkedin_link;
    public $form_youtube_link;
    public $form_instagram_link;
    public $form_tiktok_link;
    public $form_created;
    public $form_updated;

    public $connection;
    public $lastInsertedId;

    public $tblForm;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblForm = "fbsv2_contact_form";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblForm} ";
            $sql .= "order by form_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblForm}";
            $sql .= "(form_address, ";
            $sql .= "form_contacts, ";
            $sql .= "form_img, ";
            $sql .= "form_facebook_link, ";
            $sql .= "form_linkedin_link, ";
            $sql .= "form_youtube_link, ";
            $sql .= "form_instagram_link, ";
            $sql .= "form_tiktok_link, ";
            $sql .= "form_created, ";
            $sql .= "form_updated ) values ( ";
            $sql .= ":form_address, ";
            $sql .= ":form_contacts, ";
            $sql .= ":form_img, ";
            $sql .= ":form_facebook_link, ";
            $sql .= ":form_linkedin_link, ";
            $sql .= ":form_youtube_link, ";
            $sql .= ":form_instagram_link, ";
            $sql .= ":form_tiktok_link, ";
            $sql .= ":form_created, ";
            $sql .= ":form_updated )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_address" => $this->form_address,
                "form_contacts" => $this->form_contacts,
                "form_img" => $this->form_img,
                "form_facebook_link" => $this->form_facebook_link,
                "form_linkedin_link" => $this->form_linkedin_link,
                "form_youtube_link" => $this->form_youtube_link,
                "form_instagram_link" => $this->form_instagram_link,
                "form_tiktok_link" => $this->form_tiktok_link,
                "form_created" => $this->form_created,
                "form_updated" => $this->form_updated,
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
            $sql = "update {$this->tblForm} set ";
            $sql .= "form_address = :form_address, ";
            $sql .= "form_contacts = :form_contacts, ";
            $sql .= "form_img = :form_img, ";
            $sql .= "form_facebook_link = :form_facebook_link, ";
            $sql .= "form_linkedin_link = :form_linkedin_link, ";
            $sql .= "form_youtube_link = :form_youtube_link, ";
            $sql .= "form_instagram_link = :form_instagram_link, ";
            $sql .= "form_tiktok_link = :form_tiktok_link, ";
            $sql .= "form_updated = :form_updated ";
            $sql .= "where form_aid = :form_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_address" => $this->form_address,
                "form_contacts" => $this->form_contacts,
                "form_img" => $this->form_img,
                "form_facebook_link" => $this->form_facebook_link,
                "form_linkedin_link" => $this->form_linkedin_link,
                "form_youtube_link" => $this->form_youtube_link,
                "form_instagram_link" => $this->form_instagram_link,
                "form_tiktok_link" => $this->form_tiktok_link,
                "form_updated" => $this->form_updated,
                "form_aid" => $this->form_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblForm} ";
            $sql .= "where form_aid = :form_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_aid" => $this->form_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
