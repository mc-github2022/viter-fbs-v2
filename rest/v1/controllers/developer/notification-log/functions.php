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

// Filter by all date
function checkFilterByAllDate($object)
{
    $query = $object->filterByAllDate();
    checkQuery($query, "Empty records. (filter by all date)");
    return $query;
}

// Filter by single date
function checkFilterBySingleDate($object)
{
    $query = $object->filterBySingleDate();
    checkQuery($query, "Empty records. (filter by single date)");
    return $query;
}

// Filter by purpose and all date
function checkFilterByPurposeAndAllDate($object)
{
    $query = $object->filterByPurposeAndAllDate();
    checkQuery($query, "Empty records. (filter by purpose and all date)");
    return $query;
}

// Filter by search, purpose and all date
function checkFilterBySearchPurposeAndAllDate($object)
{
    $query = $object->filterBySearchPurposeAndAllDate();
    checkQuery($query, "Empty records. (filter by search, purpose and all date)");
    return $query;
}
