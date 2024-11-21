<?php

class SendingEmail
{
    public $notification_purpose;

    public $connection;
    public $lastInsertedId;

    public $tblNotification;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblNotification = "fbsv2_notification";
    }

    public function readEmailsByPurpose()
    {
        try {
            $sql = "select notification_email ";
            $sql .= "from ";
            $sql .= "{$this->tblNotification} ";
            $sql .= "where notification_purpose = :notification_purpose ";
            $sql .= "order by notification_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "notification_purpose" => $this->notification_purpose,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
