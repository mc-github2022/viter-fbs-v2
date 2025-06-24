<?php


// Create teams title
function checkCreateTeamsTitle($object)
{
    $query = $object->createTeamsTitle();
    checkQuery($query, "There's a problem processing your request. (create teams title)");
    return $query;
}

// Update teams title
function checkUpdateTeamsTitle($object)
{
    $query = $object->updateTeamsTitle();
    checkQuery($query, "There's a problem processing your request. (update teams title)");
    return $query;
}
