<?php

// filter by audience
function checkFilterByAudience($object)
{
    $query = $object->filterByAudience();
    checkQuery($query, "Empty records. (filter by audience)");
    return $query;
}

// filter by status and search 
function checkFilterByStatusSentOrFailedAndSearch($object)
{
    $query = $object->filterByStatusSentOrFailedAndSearch();
    checkQuery($query, "Empty records. (filter by status and search)");
    return $query;
}

// filter by audience and search 
function checkFilterByAudienceAndSearch($object)
{
    $query = $object->filterByAudienceAndSearch();
    checkQuery($query, "Empty records. (filter by audience and search)");
    return $query;
}

// update mailer log 
function checkUpdateMailerLog($object)
{
    $query = $object->updateMailerLog();
    checkQuery($query, "There's a problem processing your request. (update mailer log)");
    return $query;
}

// update mailer log subject and content
function checkUpdateMailerSubjectAndContent($object)
{
    $query = $object->updateMailerSubjectAndContent();
    checkQuery($query, "There's a problem processing your request. (update subject and content)");
    return $query;
}

// delete mailer log 
function checkDeleteMailerLog($object)
{
    $query = $object->deleteMailerLog();
    checkQuery($query, "There's a problem processing your request. (delete mailer log)");
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

// Filter by status and all date
function checkFilterByStatusAndAllDate($object)
{
    $query = $object->filterByStatusAndAllDate();
    checkQuery($query, "Empty records. (filter by status and all date)");
    return $query;
}

// Filter by audience and all date
function checkFilterByAudienceAndAllDate($object)
{
    $query = $object->filterByAudienceAndAllDate();
    checkQuery($query, "Empty records. (filter by audience and all date)");
    return $query;
}

// Filter by search, status and all date
function checkFilterBySearchStatusAndAllDate($object)
{
    $query = $object->filterBySearchStatusAndAllDate();
    checkQuery($query, "Empty records. (filter by search, status and all date)");
    return $query;
}

// Filter by search, audience and all date
function checkFilterBySearchAudienceAndAllDate($object)
{
    $query = $object->filterBySearchAudienceAndAllDate();
    checkQuery($query, "Empty records. (filter by search, audience and all date)");
    return $query;
}

// filter search and both date
function checkFilterBySearchAndAllDate($object)
{
    $query = $object->searchAndAllDate();
    checkQuery($query, "Empty records. (filter by search and all date)");
    return $query;
}

// filter status, date from, and search
function checkFilterByStatusDateFromSearch($object)
{
    $query = $object->filterByStatusDateFromSearch();
    checkQuery($query, "Empty records. (filter by search, date from, and status)");
    return $query;
}

// filter audience, date from, and search
function checkFilterByAudienceDateFromSearch($object)
{
    $query = $object->filterByAudienceDateFromSearch();
    checkQuery($query, "Empty records. (filter by search, date from, and audience)");
    return $query;
}

// filter status, date to, and search
function checkFilterByStatusDateToSearch($object)
{
    $query = $object->filterByStatusDateToSearch();
    checkQuery($query, "Empty records. (filter by search, date to, and status)");
    return $query;
}

// filter status, date to, and search
function checkFilterByAudienceDateToSearch($object)
{
    $query = $object->filterByAudienceDateToSearch();
    checkQuery($query, "Empty records. (filter by search, date to, and audience)");
    return $query;
}

// filter by status and date from
function checkFilterByStatusAndDateFrom($object)
{
    $query = $object->filterByStatusAndDateFrom();
    checkQuery($query, "Empty records. (filter by date from, and status)");
    return $query;
}

// filter by audience and date from
function checkFilterByAudienceAndDateFrom($object)
{
    $query = $object->filterByAudienceAndDateFrom();
    checkQuery($query, "Empty records. (filter by date from, and audience)");
    return $query;
}

// filter by status and date to
function checkFilterByStatusAndDateTo($object)
{
    $query = $object->filterByStatusAndDateTo();
    checkQuery($query, "Empty records. (filter by date to, and status)");
    return $query;
}

// filter by audience and date to
function checkFilterByAudienceAndDateTo($object)
{
    $query = $object->filterByAudienceAndDateTo();
    checkQuery($query, "Empty records. (filter by date to, and audience)");
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
