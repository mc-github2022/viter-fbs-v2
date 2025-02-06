<?php

// filter by status
function checkFilterByStatus($object)
{
    $query = $object->filterByStatus();
    checkQuery($query, "Empty records. (filter by status)");
    return $query;
}

// filter by audience
function checkFilterByAudience($object)
{
    $query = $object->filterByAudience();
    checkQuery($query, "Empty records. (filter by audience)");
    return $query;
}
