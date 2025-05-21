<?php

class Footer
{
    public $footer_aid;
    public $footer_quicklink_a;
    public $footer_quicklink_link_a;
    public $footer_quicklink_b;
    public $footer_quicklink_link_b;
    public $footer_quicklink_c;
    public $footer_quicklink_link_c;
    public $footer_quicklink_d;
    public $footer_quicklink_link_d;
    public $footer_quicklink_e;
    public $footer_quicklink_link_e;
    public $footer_copyright;
    public $footer_privacy_text;
    public $footer_privacy_link;
    public $footer_terms_text;
    public $footer_terms_link;
    public $footer_eula_text;
    public $footer_eula_link;
    public $footer_logo_img;
    public $footer_phone_a;
    public $footer_phone_b;
    public $footer_phone_c;
    public $footer_email;
    public $footer_subscriber_text;
    public $footer_created;
    public $footer_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblFooter;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblFooter = "fbsv2_footer";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblFooter} ";
            $sql .= "order by footer_aid asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblFooter}";
            $sql .= "(footer_quicklink_a, ";
            $sql .= "footer_quicklink_link_a, ";
            $sql .= "footer_quicklink_b, ";
            $sql .= "footer_quicklink_link_b, ";
            $sql .= "footer_quicklink_c, ";
            $sql .= "footer_quicklink_link_c, ";
            $sql .= "footer_quicklink_d, ";
            $sql .= "footer_quicklink_link_d, ";
            $sql .= "footer_quicklink_e, ";
            $sql .= "footer_quicklink_link_e, ";
            $sql .= "footer_created, ";
            $sql .= "footer_datetime ) values ( ";
            $sql .= ":footer_quicklink_a, ";
            $sql .= ":footer_quicklink_link_a, ";
            $sql .= ":footer_quicklink_b, ";
            $sql .= ":footer_quicklink_link_b, ";
            $sql .= ":footer_quicklink_c, ";
            $sql .= ":footer_quicklink_link_c, ";
            $sql .= ":footer_quicklink_d, ";
            $sql .= ":footer_quicklink_link_d, ";
            $sql .= ":footer_quicklink_e, ";
            $sql .= ":footer_quicklink_link_e, ";
            $sql .= ":footer_created, ";
            $sql .= ":footer_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_quicklink_a" => $this->footer_quicklink_a,
                "footer_quicklink_link_a" => $this->footer_quicklink_link_a,
                "footer_quicklink_b" => $this->footer_quicklink_b,
                "footer_quicklink_link_b" => $this->footer_quicklink_link_b,
                "footer_quicklink_c" => $this->footer_quicklink_c,
                "footer_quicklink_link_c" => $this->footer_quicklink_link_c,
                "footer_quicklink_d" => $this->footer_quicklink_d,
                "footer_quicklink_link_d" => $this->footer_quicklink_link_d,
                "footer_quicklink_e" => $this->footer_quicklink_e,
                "footer_quicklink_link_e" => $this->footer_quicklink_link_e,
                "footer_created" => $this->footer_created,
                "footer_datetime" => $this->footer_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createLogoImg()
    {
        try {
            $sql = "insert into {$this->tblFooter}";
            $sql .= "(footer_logo_img, ";
            $sql .= "footer_created, ";
            $sql .= "footer_datetime ) values ( ";
            $sql .= ":footer_logo_img, ";
            $sql .= ":footer_created, ";
            $sql .= ":footer_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_logo_img" => $this->footer_logo_img,
                "footer_created" => $this->footer_created,
                "footer_datetime" => $this->footer_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createContactUs()
    {
        try {
            $sql = "insert into {$this->tblFooter}";
            $sql .= "(footer_phone_a, ";
            $sql .= "footer_phone_b, ";
            $sql .= "footer_phone_c, ";
            $sql .= "footer_email, ";
            $sql .= "footer_subscriber_text, ";
            $sql .= "footer_created, ";
            $sql .= "footer_datetime ) values ( ";
            $sql .= ":footer_phone_a, ";
            $sql .= ":footer_phone_b, ";
            $sql .= ":footer_phone_c, ";
            $sql .= ":footer_email, ";
            $sql .= ":footer_subscriber_text, ";
            $sql .= ":footer_created, ";
            $sql .= ":footer_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_phone_a" => $this->footer_phone_a,
                "footer_phone_b" => $this->footer_phone_b,
                "footer_phone_c" => $this->footer_phone_c,
                "footer_email" => $this->footer_email,
                "footer_subscriber_text" => $this->footer_subscriber_text,
                "footer_created" => $this->footer_created,
                "footer_datetime" => $this->footer_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function createCopyright()
    {
        try {
            $sql = "insert into {$this->tblFooter}";
            $sql .= "(footer_copyright, ";
            $sql .= "footer_privacy_text, ";
            $sql .= "footer_privacy_link, ";
            $sql .= "footer_terms_text, ";
            $sql .= "footer_terms_link, ";
            $sql .= "footer_eula_text, ";
            $sql .= "footer_eula_link, ";
            $sql .= "footer_created, ";
            $sql .= "footer_datetime ) values ( ";
            $sql .= ":footer_copyright, ";
            $sql .= ":footer_privacy_text, ";
            $sql .= ":footer_privacy_link, ";
            $sql .= ":footer_terms_text, ";
            $sql .= ":footer_terms_link, ";
            $sql .= ":footer_eula_text, ";
            $sql .= ":footer_eula_link, ";
            $sql .= ":footer_created, ";
            $sql .= ":footer_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_copyright" => $this->footer_copyright,
                "footer_privacy_text" => $this->footer_privacy_text,
                "footer_privacy_link" => $this->footer_privacy_link,
                "footer_terms_text" => $this->footer_terms_text,
                "footer_terms_link" => $this->footer_terms_link,
                "footer_eula_text" => $this->footer_eula_text,
                "footer_eula_link" => $this->footer_eula_link,
                "footer_created" => $this->footer_created,
                "footer_datetime" => $this->footer_datetime,
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
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_quicklink_a = :footer_quicklink_a, ";
            $sql .= "footer_quicklink_link_a = :footer_quicklink_link_a, ";
            $sql .= "footer_quicklink_b = :footer_quicklink_b, ";
            $sql .= "footer_quicklink_link_b = :footer_quicklink_link_b, ";
            $sql .= "footer_quicklink_c = :footer_quicklink_c, ";
            $sql .= "footer_quicklink_link_c = :footer_quicklink_link_c, ";
            $sql .= "footer_quicklink_d = :footer_quicklink_d, ";
            $sql .= "footer_quicklink_link_d = :footer_quicklink_link_d, ";
            $sql .= "footer_quicklink_e = :footer_quicklink_e, ";
            $sql .= "footer_quicklink_link_e = :footer_quicklink_link_e, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_quicklink_a" => $this->footer_quicklink_a,
                "footer_quicklink_link_a" => $this->footer_quicklink_link_a,
                "footer_quicklink_b" => $this->footer_quicklink_b,
                "footer_quicklink_link_b" => $this->footer_quicklink_link_b,
                "footer_quicklink_c" => $this->footer_quicklink_c,
                "footer_quicklink_link_c" => $this->footer_quicklink_link_c,
                "footer_quicklink_d" => $this->footer_quicklink_d,
                "footer_quicklink_link_d" => $this->footer_quicklink_link_d,
                "footer_quicklink_e" => $this->footer_quicklink_e,
                "footer_quicklink_link_e" => $this->footer_quicklink_link_e,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateLogoImg()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_logo_img = :footer_logo_img, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_logo_img" => $this->footer_logo_img,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateContactUs()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_phone_a = :footer_phone_a, ";
            $sql .= "footer_phone_b = :footer_phone_b, ";
            $sql .= "footer_phone_c = :footer_phone_c, ";
            $sql .= "footer_email = :footer_email, ";
            $sql .= "footer_subscriber_text = :footer_subscriber_text, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_phone_a" => $this->footer_phone_a,
                "footer_phone_b" => $this->footer_phone_b,
                "footer_phone_c" => $this->footer_phone_c,
                "footer_email" => $this->footer_email,
                "footer_subscriber_text" => $this->footer_subscriber_text,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCopyright()
    {
        try {
            $sql = "update {$this->tblFooter} set ";
            $sql .= "footer_copyright = :footer_copyright, ";
            $sql .= "footer_privacy_text = :footer_privacy_text, ";
            $sql .= "footer_privacy_link = :footer_privacy_link, ";
            $sql .= "footer_terms_text = :footer_terms_text, ";
            $sql .= "footer_terms_link = :footer_terms_link, ";
            $sql .= "footer_eula_text = :footer_eula_text, ";
            $sql .= "footer_eula_link = :footer_eula_link, ";
            $sql .= "footer_datetime = :footer_datetime ";
            $sql .= "where footer_aid = :footer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "footer_copyright" => $this->footer_copyright,
                "footer_privacy_text" => $this->footer_privacy_text,
                "footer_privacy_link" => $this->footer_privacy_link,
                "footer_terms_text" => $this->footer_terms_text,
                "footer_terms_link" => $this->footer_terms_link,
                "footer_eula_text" => $this->footer_eula_text,
                "footer_eula_link" => $this->footer_eula_link,
                "footer_datetime" => $this->footer_datetime,
                "footer_aid" => $this->footer_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
