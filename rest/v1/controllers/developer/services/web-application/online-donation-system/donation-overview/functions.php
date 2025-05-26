<?php


// Create overview list
function checkCreateOverviewList($object)
{
    $query = $object->createOverviewList();
    checkQuery($query, "There's a problem processing your request. (create overview list)");
    return $query;
}

// Update overview list
function checkUpdateOverviewList($object)
{
    $query = $object->updateOverviewList();
    checkQuery($query, "There's a problem processing your request. (update overview list)");
    return $query;
}
