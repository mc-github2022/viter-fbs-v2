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
