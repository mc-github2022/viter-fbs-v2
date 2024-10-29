<?php

class EventsAndActivities
{
    public $events_activities_aid;
    public $events_activities_img;
    public $events_activities_category;
    public $events_activities_title;
    public $events_activities_slug;
    public $events_activities_date;
    public $events_activities_description;
    public $events_activities_created;
    public $events_activities_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEventsAndActivities;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEventsAndActivities = "events_activities";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEventsAndActivities} ";
            $sql .= "order by events_activities_aid asc ";
            $query = $this->connection->query($sql);
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
            $sql .= "events_activities_category, ";
            $sql .= "events_activities_title, ";
            $sql .= "events_activities_slug, ";
            $sql .= "events_activities_date, ";
            $sql .= "events_activities_description, ";
            $sql .= "events_activities_created, ";
            $sql .= "events_activities_datetime ) values ( ";
            $sql .= ":events_activities_img, ";
            $sql .= ":events_activities_category, ";
            $sql .= ":events_activities_title, ";
            $sql .= ":events_activities_slug, ";
            $sql .= ":events_activities_date, ";
            $sql .= ":events_activities_description, ";
            $sql .= ":events_activities_created, ";
            $sql .= ":events_activities_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_img" => $this->events_activities_img,
                "events_activities_category" => $this->events_activities_category,
                "events_activities_title" => $this->events_activities_title,
                "events_activities_slug" => $this->events_activities_slug,
                "events_activities_date" => $this->events_activities_date,
                "events_activities_description" => $this->events_activities_description,
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
            $sql .= "events_activities_img = :events_activities_img, ";
            $sql .= "events_activities_category = :events_activities_category, ";
            $sql .= "events_activities_title = :events_activities_title, ";
            $sql .= "events_activities_slug = :events_activities_slug, ";
            $sql .= "events_activities_date = :events_activities_date, ";
            $sql .= "events_activities_description = :events_activities_description, ";
            $sql .= "events_activities_created = :events_activities_created ";
            $sql .= "where events_activities_aid = :events_activities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_activities_img" => $this->events_activities_img,
                "events_activities_category" => $this->events_activities_category,
                "events_activities_title" => $this->events_activities_title,
                "events_activities_slug" => $this->events_activities_slug,
                "events_activities_date" => $this->events_activities_date,
                "events_activities_description" => $this->events_activities_description,
                "events_activities_created" => $this->events_activities_created,
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
