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

// filter search and both date
function checkFilterBySearchAndAllDate($object)
{
    $query = $object->searchAndAllDate();
    checkQuery($query, "Empty records. (filter by search and all date)");
    return $query;
}

// filter purpose, date from, and search
function checkFilterByPurposeDateFromSearch($object)
{
    $query = $object->filterByPurposeDateFromSearch();
    checkQuery($query, "Empty records. (filter by search, date from, and purpose)");
    return $query;
}

// filter purpose, date to, and search
function checkFilterByPurposeDateToSearch($object)
{
    $query = $object->filterByPurposeDateToSearch();
    checkQuery($query, "Empty records. (filter by search, date to, and purpose)");
    return $query;
}

// filter by purpose and date from
function checkFilterByPurposeAndDateFrom($object)
{
    $query = $object->filterByPurposeAndDateFrom();
    checkQuery($query, "Empty records. (filter by date from, and purpose)");
    return $query;
}

// filter by purpose and date to
function checkFilterByPurposeAndDateTo($object)
{
    $query = $object->filterByPurposeAndDateTo();
    checkQuery($query, "Empty records. (filter by date to, and purpose)");
    return $query;
}

// filter search and date from 
function checkFilterSearchAndDateFrom($object)
{
    $query = $object->searchAndDateFrom();
    checkQuery($query, "Empty records. (filter by search and date from)");
    return $query;
}

// filter search and date to 
function checkFilterSearchAndDateTo($object)
{
    $query = $object->searchAndDateTo();
    checkQuery($query, "Empty records. (filter by search and date to)");
    return $query;
}
