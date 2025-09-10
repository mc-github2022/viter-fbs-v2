<?php

class Subscribe
{
    public $subscriber_aid;
    public $subscriber_email;
    public $subscriber_is_active;
    public $subscriber_key;
    public $subscriber_audience_id;
    public $subscriber_feedback;
    public $subscriber_is_agree;
    public $subscriber_created;
    public $subscriber_datetime;

    public $notification_purpose;
    public $subscriber_count;
    public $audience_code;

    public $connection;
    public $lastInsertedId;

    public $subscriber_start;
    public $subscriber_total;
    public $subscriber_search;

    public $tblSubscriber;
    public $tblNotification;
    public $tblAudience;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSubscriber = "fbsv2_subscriber_list";
        $this->tblNotification = "fbsv2_notification";
        $this->tblAudience = "fbsv2_audience";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} as subscriber, ";
            $sql .= "{$this->tblAudience} as audience ";
            $sql .= "where subscriber.subscriber_audience_id = audience.audience_aid ";
            $sql .= "order by subscriber.subscriber_created desc, ";
            $sql .= "subscriber.subscriber_email asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read audience
    public function readAudience()
    {
        try {
            $sql = "select * from {$this->tblAudience} ";
            $sql .= "where audience_is_active = 1 ";
            $sql .= "and audience_code != :audience_code ";
            $sql .= "order by audience_is_active desc, ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "audience_code" => $this->audience_code,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read audience Client only
    public function readAudienceByClient()
    {
        try {
            $sql = "select audience_aid, audience_code ";
            $sql .= "from ";
            $sql .= "{$this->tblAudience} ";
            $sql .= "WHERE audience_code = :code ";
            $sql .= "and audience_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "code" => "audience_is_client",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readLimit()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblSubscriber} as subscriber, ";
            $sql .= "{$this->tblAudience} as audience ";
            $sql .= "where subscriber.subscriber_audience_id = audience.audience_aid ";
            $sql .= "order by subscriber.subscriber_created desc, ";
            $sql .= "subscriber.subscriber_email asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->subscriber_start - 1,
                "total" => $this->subscriber_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_is_active = :subscriber_is_active, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_datetime" => $this->subscriber_datetime,
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // create from website subscribe
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSubscriber}";
            $sql .= "( subscriber_email, ";
            $sql .= "subscriber_is_active, ";
            $sql .= "subscriber_key, ";
            $sql .= "subscriber_audience_id, ";
            $sql .= "subscriber_is_agree, ";
            $sql .= "subscriber_created, ";
            $sql .= "subscriber_datetime ) values ( ";
            $sql .= ":subscriber_email, ";
            $sql .= ":subscriber_is_active, ";
            $sql .= ":subscriber_key, ";
            $sql .= ":subscriber_audience_id, ";
            $sql .= ":subscriber_is_agree, ";
            $sql .= ":subscriber_created, ";
            $sql .= ":subscriber_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_key" => $this->subscriber_key,
                "subscriber_audience_id" => $this->subscriber_audience_id,
                "subscriber_is_agree" => $this->subscriber_is_agree,
                "subscriber_created" => $this->subscriber_created,
                "subscriber_datetime" => $this->subscriber_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // create subscriber from subscriber list (add)
    public function createSubscriber()
    {
        try {
            $sql = "insert into {$this->tblSubscriber}";
            $sql .= "( subscriber_email, ";
            $sql .= "subscriber_is_active, ";
            $sql .= "subscriber_key, ";
            $sql .= "subscriber_audience_id, ";
            $sql .= "subscriber_is_agree, ";
            $sql .= "subscriber_created, ";
            $sql .= "subscriber_datetime ) values ( ";
            $sql .= ":subscriber_email, ";
            $sql .= ":subscriber_is_active, ";
            $sql .= ":subscriber_key, ";
            $sql .= ":subscriber_audience_id, ";
            $sql .= ":subscriber_is_agree, ";
            $sql .= ":subscriber_created, ";
            $sql .= ":subscriber_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_key" => $this->subscriber_key,
                "subscriber_audience_id" => $this->subscriber_audience_id,
                "subscriber_is_agree" => $this->subscriber_is_agree,
                "subscriber_created" => $this->subscriber_created,
                "subscriber_datetime" => $this->subscriber_datetime,
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
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_email = :subscriber_email, ";
            $sql .= "subscriber_audience_id = :subscriber_audience_id, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => $this->subscriber_email,
                "subscriber_audience_id" => $this->subscriber_audience_id,
                "subscriber_datetime" => $this->subscriber_datetime,
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSubscriber} as subscriber, ";
            $sql .= " {$this->tblAudience} as audience ";
            $sql .= "where ";
            $sql .= "subscriber.subscriber_audience_id = audience.audience_aid ";
            $sql .= "and (subscriber.subscriber_email like :subscriber_email ";
            $sql .= "or audience.audience_name like :audience_name) ";
            $sql .= "order by subscriber_created desc, ";
            $sql .= "subscriber_email asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "%{$this->subscriber_search}%",
                "audience_name" => "%{$this->subscriber_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSubscriber} ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // validator
    // email
    public function checkEmail()
    {
        try {
            $sql = "select subscriber_email from {$this->tblSubscriber} ";
            $sql .= "where subscriber_email = :subscriber_email ";
            $sql .= "and subscriber_audience_id = :subscriber_audience_id ";
            $sql .= "and subscriber_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_email" => "{$this->subscriber_email}",
                "subscriber_audience_id" => $this->subscriber_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
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



    // count the subscribers
    public function readSubscriberCount()
    {
        try {
            $sql = "SELECT COUNT(*) AS subscriber_count ";
            $sql .= "FROM {$this->tblSubscriber} ";
            $sql .= "where subscriber_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute();

            return (int)$query->fetchColumn() + 1;
        } catch (PDOException $ex) {
            return false;
        }
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select subscriber_key from {$this->tblSubscriber} ";
            $sql .= "where subscriber_key = :subscriber_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_key" => $this->subscriber_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update unsubscribe
    public function updateUnsubscribe()
    {
        try {
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_key = '', ";
            $sql .= "subscriber_feedback = :subscriber_feedback, ";
            $sql .= "subscriber_is_active = :subscriber_is_active, ";
            $sql .= "subscriber_datetime = :subscriber_datetime ";
            $sql .= "where subscriber_key  = :original_subscriber_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "original_subscriber_key" => $this->subscriber_key,
                "subscriber_feedback" => $this->subscriber_feedback,
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_datetime" => $this->subscriber_datetime,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    //create a key when restore
    public function createKeyRestore()
    {
        try {
            $sql = "update {$this->tblSubscriber} set ";
            $sql .= "subscriber_is_active = :subscriber_is_active, ";
            $sql .= "subscriber_key = :subscriber_key, ";
            $sql .= "subscriber_datetime = :subscriber_datetime, ";
            $sql .= "subscriber_email = :subscriber_email ";
            $sql .= "where subscriber_aid = :subscriber_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_is_active" => $this->subscriber_is_active,
                "subscriber_key" => $this->subscriber_key,
                "subscriber_datetime" => $this->subscriber_datetime,
                "subscriber_email" => $this->subscriber_email,
                "subscriber_aid" => $this->subscriber_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // filter by audience
    public function filterByAudience()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSubscriber} as subscriber, ";
            $sql .= "{$this->tblAudience} as audience ";
            $sql .= "where ";
            $sql .= "subscriber.subscriber_audience_id = audience.audience_aid "; // to get the audience_name
            $sql .= "and subscriber.subscriber_audience_id = :subscriber_audience_id ";
            $sql .= "order by subscriber_created desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_audience_id" => $this->subscriber_audience_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // filter by audience and search 
    public function filterByAudienceAndSearch()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSubscriber} as subscriber, ";
            $sql .= "{$this->tblAudience} as audience ";
            $sql .= "where ";
            $sql .= "subscriber.subscriber_audience_id = audience.audience_aid ";
            $sql .= "and subscriber.subscriber_audience_id = :subscriber_audience_id ";
            $sql .= "and subscriber.subscriber_email like :subscriber_email ";
            $sql .= "order by subscriber_created desc, ";
            $sql .= "subscriber_email desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "subscriber_audience_id" => $this->subscriber_audience_id,
                "subscriber_email" => "%{$this->subscriber_search}%",

            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // public function search()
    // {
    //     try {
    //         $sql = "select ";
    //         $sql .= "* ";
    //         $sql .= "from {$this->tblSubscriber} as subscriber, ";
    //         $sql .= " {$this->tblAudience} as audience ";
    //         $sql .= "where ";
    //         $sql .= "subscriber.subscriber_audience_id = audience.audience_aid ";
    //         $sql .= "and (subscriber.subscriber_email like :subscriber_email ";
    //         $sql .= "or audience.audience_name like :audience_name) ";
    //         $sql .= "order by subscriber_created desc, ";
    //         $sql .= "subscriber_email asc ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "subscriber_email" => "%{$this->subscriber_search}%",
    //             "audience_name" => "%{$this->subscriber_search}%",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }
}
