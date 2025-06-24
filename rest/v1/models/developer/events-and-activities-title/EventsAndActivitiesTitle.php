<?php

class EventsAndActivitiesTitle
{
    public $events_title_aid;
    public $events_title_subtitle_a;
    public $events_title_title;
    public $events_title_subtitle_b;
    public $events_title_created;
    public $events_title_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblEventsAndActivitiesTitle;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEventsAndActivitiesTitle = "fbsv2_events_activities_title";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblEventsAndActivitiesTitle} ";
            $sql .= "order by events_title_aid desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function create()
    {
        try {
            $sql = "insert into {$this->tblEventsAndActivitiesTitle}";
            $sql .= "(events_title_subtitle_a, ";
            $sql .= "events_title_title, ";
            $sql .= "events_title_subtitle_b, ";
            $sql .= "events_title_created, ";
            $sql .= "events_title_datetime ) values ( ";
            $sql .= ":events_title_subtitle_a, ";
            $sql .= ":events_title_title, ";
            $sql .= ":events_title_subtitle_b, ";
            $sql .= ":events_title_created, ";
            $sql .= ":events_title_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_title_subtitle_a" => $this->events_title_subtitle_a,
                "events_title_title" => $this->events_title_title,
                "events_title_subtitle_b" => $this->events_title_subtitle_b,
                "events_title_created" => $this->events_title_created,
                "events_title_datetime" => $this->events_title_datetime,
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
            $sql = "update {$this->tblEventsAndActivitiesTitle} set ";
            $sql .= "events_title_subtitle_a = :events_title_subtitle_a, ";
            $sql .= "events_title_title = :events_title_title, ";
            $sql .= "events_title_subtitle_b = :events_title_subtitle_b, ";
            $sql .= "events_title_datetime = :events_title_datetime ";
            $sql .= "where events_title_aid = :events_title_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "events_title_subtitle_a" => $this->events_title_subtitle_a,
                "events_title_title" => $this->events_title_title,
                "events_title_subtitle_b" => $this->events_title_subtitle_b,
                "events_title_datetime" => $this->events_title_datetime,
                "events_title_aid" => $this->events_title_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
