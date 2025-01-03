<?php

class EventsAndActivities
{
    public $events_activities_aid;
    public $events_activities_is_active;
    public $events_activities_img;
    public $events_activities_img_list;
    public $events_activities_category;
    public $events_activities_title;
    public $events_activities_slug;
    public $events_activities_date;
    public $events_activities_description;
    public $events_activities_created;
    public $events_activities_datetime;

    public $connection;
    public $lastInsertedId;
    public $events_activities_start;
    public $events_activities_total;
    public $events_activities_search;

    public $tblEventsAndActivities;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEventsAndActivities = "fbsv2_events_activities";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEventsAndActivities} ";
            $sql .= "order by events_activities_is_active desc, ";
            $sql .= "events_activities_date desc ";
            $query = $this->connection->query($sql);
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
            $sql .= "{$this->tblEventsAndActivities} ";
            $sql .= "order by events_activities_is_active desc, ";
            $sql .= "events_activities_date desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->events_activities_start - 1,
                "total" => $this->events_activities_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblEventsAndActivities} set ";
            $sql .= "events_activities_is_active = :events_activities_is_active, ";
            $sql .= "events_activities_datetime = :events_activities_datetime ";
            $sql .= "where events_activities_aid = :events_activities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_is_active" => $this->events_activities_is_active,
                "events_activities_datetime" => $this->events_activities_datetime,
                "events_activities_aid" => $this->events_activities_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEventsAndActivities} ";
            $sql .= "where events_activities_img = events_activities_img ";
            $sql .= "and (events_activities_img like :events_activities_img ";
            $sql .= "or events_activities_category like :events_activities_category ";
            $sql .= "or events_activities_title like :events_activities_title ";
            $sql .= "or events_activities_slug like :events_activities_slug ";
            $sql .= "or DATE_FORMAT(events_activities_date, '%M %e, %Y') like :events_activities_date ";
            $sql .= "or events_activities_img_list like :events_activities_img_list ";
            $sql .= "or events_activities_description like :events_activities_description) ";
            $sql .= "order by events_activities_is_active desc, ";
            $sql .= "events_activities_date desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_img" => "%{$this->events_activities_search}%",
                "events_activities_category" => "%{$this->events_activities_search}%",
                "events_activities_title" => "%{$this->events_activities_search}%",
                "events_activities_slug" => "%{$this->events_activities_search}%",
                "events_activities_date" => "%{$this->events_activities_search}%",
                "events_activities_img_list" => "%{$this->events_activities_search}%",
                "events_activities_description" => "%{$this->events_activities_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEventsAndActivities}";
            $sql .= "(events_activities_img, ";
            $sql .= "events_activities_is_active, ";
            $sql .= "events_activities_category, ";
            $sql .= "events_activities_title, ";
            $sql .= "events_activities_slug, ";
            $sql .= "events_activities_date, ";
            $sql .= "events_activities_description, ";
            $sql .= "events_activities_img_list, ";
            $sql .= "events_activities_created, ";
            $sql .= "events_activities_datetime ) values ( ";
            $sql .= ":events_activities_img, ";
            $sql .= ":events_activities_is_active, ";
            $sql .= ":events_activities_category, ";
            $sql .= ":events_activities_title, ";
            $sql .= ":events_activities_slug, ";
            $sql .= ":events_activities_date, ";
            $sql .= ":events_activities_description, ";
            $sql .= ":events_activities_img_list, ";
            $sql .= ":events_activities_created, ";
            $sql .= ":events_activities_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_img" => $this->events_activities_img,
                "events_activities_is_active" => $this->events_activities_is_active,
                "events_activities_category" => $this->events_activities_category,
                "events_activities_title" => $this->events_activities_title,
                "events_activities_slug" => $this->events_activities_slug,
                "events_activities_date" => $this->events_activities_date,
                "events_activities_description" => $this->events_activities_description,
                "events_activities_img_list" => $this->events_activities_img_list,
                "events_activities_created" => $this->events_activities_created,
                "events_activities_datetime" => $this->events_activities_datetime,
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
            $sql = "update {$this->tblEventsAndActivities} set ";
            $sql .= "events_activities_is_active = :events_activities_is_active, ";
            $sql .= "events_activities_img = :events_activities_img, ";
            $sql .= "events_activities_category = :events_activities_category, ";
            $sql .= "events_activities_title = :events_activities_title, ";
            $sql .= "events_activities_slug = :events_activities_slug, ";
            $sql .= "events_activities_date = :events_activities_date, ";
            $sql .= "events_activities_description = :events_activities_description, ";
            $sql .= "events_activities_img_list = :events_activities_img_list, ";
            $sql .= "events_activities_datetime = :events_activities_datetime ";
            $sql .= "where events_activities_aid = :events_activities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_is_active" => $this->events_activities_is_active,
                "events_activities_img" => $this->events_activities_img,
                "events_activities_category" => $this->events_activities_category,
                "events_activities_title" => $this->events_activities_title,
                "events_activities_slug" => $this->events_activities_slug,
                "events_activities_date" => $this->events_activities_date,
                "events_activities_description" => $this->events_activities_description,
                "events_activities_img_list" => $this->events_activities_img_list,
                "events_activities_datetime" => $this->events_activities_datetime,
                "events_activities_aid" => $this->events_activities_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblEventsAndActivities} ";
            $sql .= "where events_activities_aid = :events_activities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_aid" => $this->events_activities_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
