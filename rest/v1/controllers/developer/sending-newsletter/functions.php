<?php

// filter by search subscribers
function checkSearchSubcribers($object)
{
    $query = $object->searchSubcribers();
    checkQuery($query, "Empty records. (filter by search subscribers)");
    return $query;
}

// filter by search newsletter
function checkSearchNewsletter($object)
{
    $query = $object->searchNewsletter();
    checkQuery($query, "Empty records. (filter by search newsletter)");
    return $query;
}

// select specific recipient
function checkReadEmailNewsletter($object)
{
    $query = $object->readEmailNewsletter();
    checkQuery($query, "Empty records. (individual email)");
    return $query;
}

// create mailer log 
function checkCreateMailerLog($object)
{
    $query = $object->createMailerLog();
    checkQuery($query, "There's a problem processing your request. (create mailer log)");
    return $query;
}

// update mailer log 
function checkUpdateMailerLog($object)
{
    $query = $object->updateMailerLog();
    checkQuery($query, "There's a problem processing your request. (update mailer log)");
    return $query;
}
