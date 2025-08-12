<?php

class ContactFormSettings
{
    public $form_aid;
    public $form_name;
    public $form_title;
    public $form_subtitle;
    public $form_address;
    public $form_accounting_no;
    public $form_company_no;
    public $form_web_no;
    public $form_services;
    public $form_img;
    public $form_fbs_brochure;
    public $form_ojt_proposal;
    public $form_work_immersion;
    public $form_website_design;
    public $form_graphic_design;
    public $form_facebook_link;
    public $form_linkedin_link;
    public $form_youtube_link;
    public $form_instagram_link;
    public $form_tiktok_link;
    public $form_is_upload_file;
    public $form_is_upload_input;
    public $form_default_email;
    public $form_web_role;
    public $form_web_name;
    public $form_web_email;
    public $form_computer_role;
    public $form_computer_name;
    public $form_computer_email;
    public $form_accounting_role;
    public $form_accounting_name;
    public $form_accounting_email;
    public $form_hr_manager_role;
    public $form_hr_manager_name;
    public $form_hr_manager_email;
    public $form_hr_staff_role;
    public $form_hr_staff_name;
    public $form_hr_staff_email;
    public $form_created;
    public $form_updated;

    public $connection;
    public $lastInsertedId;

    public $tblContactFormSettings;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContactFormSettings = "fbsv2_contact_form";
    }


    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblContactFormSettings} ";
            $sql .= "order by form_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblContactFormSettings} ";
            $sql .= "where form_aid = :form_aid ";
            $sql .= "order by form_aid asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_aid" => $this->form_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblContactFormSettings}";
            $sql .= "(form_name, ";
            $sql .= "form_title, ";
            $sql .= "form_subtitle, ";
            $sql .= "form_address, ";
            $sql .= "form_accounting_no, ";
            $sql .= "form_company_no, ";
            $sql .= "form_web_no, ";
            $sql .= "form_services, ";
            $sql .= "form_img, ";
            $sql .= "form_fbs_brochure, ";
            $sql .= "form_ojt_proposal, ";
            $sql .= "form_work_immersion, ";
            $sql .= "form_website_design, ";
            $sql .= "form_graphic_design, ";
            $sql .= "form_facebook_link, ";
            $sql .= "form_linkedin_link, ";
            $sql .= "form_youtube_link, ";
            $sql .= "form_instagram_link, ";
            $sql .= "form_tiktok_link, ";
            $sql .= "form_is_upload_file, ";
            $sql .= "form_is_upload_input, ";
            $sql .= "form_default_email, ";
            $sql .= "form_web_role, ";
            $sql .= "form_web_name, ";
            $sql .= "form_web_email, ";
            $sql .= "form_computer_role, ";
            $sql .= "form_computer_name, ";
            $sql .= "form_computer_email, ";
            $sql .= "form_accounting_role, ";
            $sql .= "form_accounting_name, ";
            $sql .= "form_accounting_email, ";
            $sql .= "form_hr_manager_role, ";
            $sql .= "form_hr_manager_name, ";
            $sql .= "form_hr_manager_email, ";
            $sql .= "form_hr_staff_role, ";
            $sql .= "form_hr_staff_name, ";
            $sql .= "form_hr_staff_email, ";
            $sql .= "form_created, ";
            $sql .= "form_updated ) values ( ";
            $sql .= ":form_name, ";
            $sql .= ":form_title, ";
            $sql .= ":form_subtitle, ";
            $sql .= ":form_address, ";
            $sql .= ":form_accounting_no, ";
            $sql .= ":form_company_no, ";
            $sql .= ":form_web_no, ";
            $sql .= ":form_services, ";
            $sql .= ":form_img, ";
            $sql .= ":form_fbs_brochure, ";
            $sql .= ":form_ojt_proposal, ";
            $sql .= ":form_work_immersion, ";
            $sql .= ":form_website_design, ";
            $sql .= ":form_graphic_design, ";
            $sql .= ":form_facebook_link, ";
            $sql .= ":form_linkedin_link, ";
            $sql .= ":form_youtube_link, ";
            $sql .= ":form_instagram_link, ";
            $sql .= ":form_tiktok_link, ";
            $sql .= ":form_is_upload_file, ";
            $sql .= ":form_is_upload_input, ";
            $sql .= ":form_default_email, ";
            $sql .= ":form_web_role, ";
            $sql .= ":form_web_name, ";
            $sql .= ":form_web_email, ";
            $sql .= ":form_computer_role, ";
            $sql .= ":form_computer_name, ";
            $sql .= ":form_computer_email, ";
            $sql .= ":form_accounting_role, ";
            $sql .= ":form_accounting_name, ";
            $sql .= ":form_accounting_email, ";
            $sql .= ":form_hr_manager_role, ";
            $sql .= ":form_hr_manager_name, ";
            $sql .= ":form_hr_manager_email, ";
            $sql .= ":form_hr_staff_role, ";
            $sql .= ":form_hr_staff_name, ";
            $sql .= ":form_hr_staff_email, ";
            $sql .= ":form_created, ";
            $sql .= ":form_updated )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_name" => $this->form_name,
                "form_title" => $this->form_title,
                "form_subtitle" => $this->form_subtitle,
                "form_address" => $this->form_address,
                "form_accounting_no" => $this->form_accounting_no,
                "form_company_no" => $this->form_company_no,
                "form_web_no" => $this->form_web_no,
                "form_services" => $this->form_services,
                "form_img" => $this->form_img,
                "form_fbs_brochure" => $this->form_fbs_brochure,
                "form_ojt_proposal" => $this->form_ojt_proposal,
                "form_work_immersion" => $this->form_work_immersion,
                "form_website_design" => $this->form_website_design,
                "form_graphic_design" => $this->form_graphic_design,
                "form_facebook_link" => $this->form_facebook_link,
                "form_linkedin_link" => $this->form_linkedin_link,
                "form_youtube_link" => $this->form_youtube_link,
                "form_instagram_link" => $this->form_instagram_link,
                "form_tiktok_link" => $this->form_tiktok_link,
                "form_is_upload_file" => $this->form_is_upload_file,
                "form_is_upload_input" => $this->form_is_upload_input,
                "form_default_email" => $this->form_default_email,
                "form_web_role" => $this->form_web_role,
                "form_web_name" => $this->form_web_name,
                "form_web_email" => $this->form_web_email,
                "form_computer_role" => $this->form_computer_role,
                "form_computer_name" => $this->form_computer_name,
                "form_computer_email" => $this->form_computer_email,
                "form_accounting_role" => $this->form_accounting_role,
                "form_accounting_name" => $this->form_accounting_name,
                "form_accounting_email" => $this->form_accounting_email,
                "form_hr_manager_role" => $this->form_hr_manager_role,
                "form_hr_manager_name" => $this->form_hr_manager_name,
                "form_hr_manager_email" => $this->form_hr_manager_email,
                "form_hr_staff_role" => $this->form_hr_staff_role,
                "form_hr_staff_name" => $this->form_hr_staff_name,
                "form_hr_staff_email" => $this->form_hr_staff_email,
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
            $sql = "update {$this->tblContactFormSettings} set ";
            $sql .= "form_name = :form_name, ";
            $sql .= "form_title = :form_title, ";
            $sql .= "form_subtitle = :form_subtitle, ";
            $sql .= "form_address = :form_address, ";
            $sql .= "form_accounting_no = :form_accounting_no, ";
            $sql .= "form_company_no = :form_company_no, ";
            $sql .= "form_web_no = :form_web_no, ";
            $sql .= "form_services = :form_services, ";
            $sql .= "form_img = :form_img, ";
            $sql .= "form_fbs_brochure = :form_fbs_brochure, ";
            $sql .= "form_ojt_proposal = :form_ojt_proposal, ";
            $sql .= "form_work_immersion = :form_work_immersion, ";
            $sql .= "form_website_design = :form_website_design, ";
            $sql .= "form_graphic_design = :form_graphic_design, ";
            $sql .= "form_facebook_link = :form_facebook_link, ";
            $sql .= "form_linkedin_link = :form_linkedin_link, ";
            $sql .= "form_youtube_link = :form_youtube_link, ";
            $sql .= "form_instagram_link = :form_instagram_link, ";
            $sql .= "form_tiktok_link = :form_tiktok_link, ";
            $sql .= "form_is_upload_file = :form_is_upload_file, ";
            $sql .= "form_is_upload_input = :form_is_upload_input, ";
            $sql .= "form_default_email = :form_default_email, ";
            $sql .= "form_web_role = :form_web_role, ";
            $sql .= "form_web_name = :form_web_name, ";
            $sql .= "form_web_email = :form_web_email, ";
            $sql .= "form_computer_role = :form_computer_role, ";
            $sql .= "form_computer_name = :form_computer_name, ";
            $sql .= "form_computer_email = :form_computer_email, ";
            $sql .= "form_accounting_role = :form_accounting_role, ";
            $sql .= "form_accounting_name = :form_accounting_name, ";
            $sql .= "form_accounting_email = :form_accounting_email, ";
            $sql .= "form_hr_manager_role = :form_hr_manager_role, ";
            $sql .= "form_hr_manager_name = :form_hr_manager_name, ";
            $sql .= "form_hr_manager_email = :form_hr_manager_email, ";
            $sql .= "form_hr_staff_role = :form_hr_staff_role, ";
            $sql .= "form_hr_staff_name = :form_hr_staff_name, ";
            $sql .= "form_hr_staff_email = :form_hr_staff_email, ";
            $sql .= "form_updated = :form_updated ";
            $sql .= "where form_aid = :form_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "form_name" => $this->form_name,
                "form_title" => $this->form_title,
                "form_subtitle" => $this->form_subtitle,
                "form_address" => $this->form_address,
                "form_accounting_no" => $this->form_accounting_no,
                "form_company_no" => $this->form_company_no,
                "form_web_no" => $this->form_web_no,
                "form_services" => $this->form_services,
                "form_img" => $this->form_img,
                "form_fbs_brochure" => $this->form_fbs_brochure,
                "form_ojt_proposal" => $this->form_ojt_proposal,
                "form_work_immersion" => $this->form_work_immersion,
                "form_website_design" => $this->form_website_design,
                "form_graphic_design" => $this->form_graphic_design,
                "form_facebook_link" => $this->form_facebook_link,
                "form_linkedin_link" => $this->form_linkedin_link,
                "form_youtube_link" => $this->form_youtube_link,
                "form_instagram_link" => $this->form_instagram_link,
                "form_tiktok_link" => $this->form_tiktok_link,
                "form_is_upload_file" => $this->form_is_upload_file,
                "form_is_upload_input" => $this->form_is_upload_input,
                "form_default_email" => $this->form_default_email,
                "form_web_role" => $this->form_web_role,
                "form_web_name" => $this->form_web_name,
                "form_web_email" => $this->form_web_email,
                "form_computer_role" => $this->form_computer_role,
                "form_computer_name" => $this->form_computer_name,
                "form_computer_email" => $this->form_computer_email,
                "form_accounting_role" => $this->form_accounting_role,
                "form_accounting_name" => $this->form_accounting_name,
                "form_accounting_email" => $this->form_accounting_email,
                "form_hr_manager_role" => $this->form_hr_manager_role,
                "form_hr_manager_name" => $this->form_hr_manager_name,
                "form_hr_manager_email" => $this->form_hr_manager_email,
                "form_hr_staff_role" => $this->form_hr_staff_role,
                "form_hr_staff_name" => $this->form_hr_staff_name,
                "form_hr_staff_email" => $this->form_hr_staff_email,
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
            $sql = "delete from {$this->tblContactFormSettings} ";
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
