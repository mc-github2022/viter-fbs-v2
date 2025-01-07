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
    public function readAllEmailNewsletter()
    {
        try {
            $sql = "select subscriber_email, subscriber_key ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} ";
            $sql .= "where subscriber_is_active = 1 ";
            $sql .= "order by subscriber_email ";
            $query = $this->connection->query($sql);
            $query->execute([]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readEmailNewsletter()
    {
        try {
            $sql = "select subscriber_email, subscriber_key ";
            $sql .= "from {$this->tblSubscriber} ";
            $sql .= "where subscriber_email = :subscriber_email ";
            $sql .= "and subscriber_is_active = 1 ";
            $sql .= "order by ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
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
