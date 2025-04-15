<?php

class ContactFormDefault
{
    public $form_default_aid;
    public $form_default_subtitle;
    public $form_default_title;
    public $form_default_address;
    public $form_default_telephone;
    public $form_default_phone;
    public $form_default_email;
    public $form_default_img;
    public $form_default_file;
    public $form_default_facebook_link;
    public $form_default_linkedin_link;
    public $form_default_youtube_link;
    public $form_default_instagram_link;
    public $form_default_tiktok_link;
    public $form_default_created;
    public $form_default_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHomePartnerWithUs;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHomePartnerWithUs = "fbsv2_home_partner_with_us";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHomePartnerWithUs} ";
            $sql .= "order by form_default_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblHomePartnerWithUs}";
            $sql .= "(form_default_subtitle, ";
            $sql .= "form_default_title, ";
            $sql .= "form_default_address, ";
            $sql .= "form_default_telephone, ";
            $sql .= "form_default_phone, ";
            $sql .= "form_default_email, ";
            $sql .= "form_default_img, ";
            $sql .= "form_default_file, ";
            $sql .= "form_default_facebook_link, ";
            $sql .= "form_default_linkedin_link, ";
            $sql .= "form_default_youtube_link, ";
            $sql .= "form_default_instagram_link, ";
            $sql .= "form_default_tiktok_link, ";
            $sql .= "form_default_created, ";
            $sql .= "form_default_datetime ) values ( ";
            $sql .= ":form_default_subtitle, ";
            $sql .= ":form_default_title, ";
            $sql .= ":form_default_address, ";
            $sql .= ":form_default_telephone, ";
            $sql .= ":form_default_phone, ";
            $sql .= ":form_default_email, ";
            $sql .= ":form_default_img, ";
            $sql .= ":form_default_file, ";
            $sql .= ":form_default_facebook_link, ";
            $sql .= ":form_default_linkedin_link, ";
            $sql .= ":form_default_youtube_link, ";
            $sql .= ":form_default_instagram_link, ";
            $sql .= ":form_default_tiktok_link, ";
            $sql .= ":form_default_created, ";
            $sql .= ":form_default_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_default_subtitle" => $this->form_default_subtitle,
                "form_default_title" => $this->form_default_title,
                "form_default_address" => $this->form_default_address,
                "form_default_telephone" => $this->form_default_telephone,
                "form_default_phone" => $this->form_default_phone,
                "form_default_email" => $this->form_default_email,
                "form_default_img" => $this->form_default_img,
                "form_default_file" => $this->form_default_file,
                "form_default_facebook_link" => $this->form_default_facebook_link,
                "form_default_linkedin_link" => $this->form_default_linkedin_link,
                "form_default_youtube_link" => $this->form_default_youtube_link,
                "form_default_instagram_link" => $this->form_default_instagram_link,
                "form_default_tiktok_link" => $this->form_default_tiktok_link,
                "form_default_created" => $this->form_default_created,
                "form_default_datetime" => $this->form_default_datetime,
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
            $sql = "update {$this->tblHomePartnerWithUs} set ";
            $sql .= "form_default_subtitle = :form_default_subtitle, ";
            $sql .= "form_default_title = :form_default_title, ";
            $sql .= "form_default_address = :form_default_address, ";
            $sql .= "form_default_telephone = :form_default_telephone, ";
            $sql .= "form_default_phone = :form_default_phone, ";
            $sql .= "form_default_email = :form_default_email, ";
            $sql .= "form_default_img = :form_default_img, ";
            $sql .= "form_default_file = :form_default_file, ";
            $sql .= "form_default_facebook_link = :form_default_facebook_link, ";
            $sql .= "form_default_linkedin_link = :form_default_linkedin_link, ";
            $sql .= "form_default_youtube_link = :form_default_youtube_link, ";
            $sql .= "form_default_instagram_link = :form_default_instagram_link, ";
            $sql .= "form_default_tiktok_link = :form_default_tiktok_link, ";
            $sql .= "form_default_datetime = :form_default_datetime ";
            $sql .= "where form_default_aid = :form_default_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_default_subtitle" => $this->form_default_subtitle,
                "form_default_title" => $this->form_default_title,
                "form_default_address" => $this->form_default_address,
                "form_default_telephone" => $this->form_default_telephone,
                "form_default_phone" => $this->form_default_phone,
                "form_default_email" => $this->form_default_email,
                "form_default_img" => $this->form_default_img,
                "form_default_file" => $this->form_default_file,
                "form_default_facebook_link" => $this->form_default_facebook_link,
                "form_default_linkedin_link" => $this->form_default_linkedin_link,
                "form_default_youtube_link" => $this->form_default_youtube_link,
                "form_default_instagram_link" => $this->form_default_instagram_link,
                "form_default_tiktok_link" => $this->form_default_tiktok_link,
                "form_default_datetime" => $this->form_default_datetime,
                "form_default_aid" => $this->form_default_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
