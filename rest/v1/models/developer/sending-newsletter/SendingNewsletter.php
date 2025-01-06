<?php

class SendingNewsletter
{
    public $subscriber_aid;
    public $subscriber_email;
    public $subscriber_is_active;
    public $subscriber_key;

    public $connection;
    public $lastInsertedId;
    public $subscriber_search;

    public $tblSubscriber;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSubscriber = "fbsv2_subscriber_list";
    }

    // read email to send newsletter
    public function readEmailNewsletter()
    {
        try {
            $sql = "select subscriber_email ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $sql .= "order by subscriber_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchSubcribers() // for Subscribers debounce
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSubscriber} ";
            $sql .= "where subscriber_email like :subscriber_email ";
            $sql .= "and subscriber_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "%{$this->subscriber_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
