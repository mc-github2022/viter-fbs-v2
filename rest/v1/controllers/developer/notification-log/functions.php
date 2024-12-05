<?php

// Filter by purpose
function checkFilterByPurpose($object)
{
    $query = $object->filterByPurpose();
    checkQuery($query, "Empty records. (filter by purpose)");
    return $query;
}

// Filter by purpose and search
function checkSearchAndPurpose($object)
{
    $query = $object->searchAndPurpose();
    checkQuery($query, "Empty records. (filter by search and purpose)");
    return $query;
}
