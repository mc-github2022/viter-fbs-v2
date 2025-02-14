<?php

// filter by audience
function checkFilterByAudience($object)
{
    $query = $object->filterByAudience();
    checkQuery($query, "Empty records. (filter by audience)");
    return $query;
}

// update mailer log 
function checkUpdateMailerLog($object)
{
    $query = $object->updateMailerLog();
    checkQuery($query, "There's a problem processing your request. (update mailer log)");
    return $query;
}

// delete mailer log 
function checkDeleteMailerLog($object)
{
    $query = $object->deleteMailerLog();
    checkQuery($query, "There's a problem processing your request. (delete mailer log)");
    return $query;
}
