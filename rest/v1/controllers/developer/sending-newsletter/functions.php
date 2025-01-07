<?php

// filter by search subscribers
function checkSearchSubcribers($object)
{
    $query = $object->searchSubcribers();
    checkQuery($query, "Empty records. (filter by search subscribers)");
    return $query;
}

// select specific recipient
function checkReadEmailNewsletter($object)
{
    $query = $object->readEmailNewsletter();
    checkQuery($query, "Empty records. (individual email)");
    return $query;
}
