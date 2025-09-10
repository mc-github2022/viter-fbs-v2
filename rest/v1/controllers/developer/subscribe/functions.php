<?php

// count the subscribers
function checkReadSubscriberCount($object)
{
    $query = $object->readSubscriberCount();
    checkQuery($query, "Empty records. (subscriber count)");
    return $query;
}

// update unsubscribe 
function checkUpdateUnsubscribe($object)
{
    $query = $object->updateUnsubscribe();
    checkQuery($query, "Empty records. (unsubscribe)");
    return $query;
}

// create a key when restore
function checkCreateKeyRestore($object)
{
    $query = $object->createKeyRestore();
    checkQuery($query, "Empty records. (restore key)");
    return $query;
}

// create subscriber from add
function checkCreateSubscriber($object)
{
    $query = $object->createSubscriber();
    checkQuery($query, "Empty records. (create subscriber)");
    return $query;
}

// read audience
function checkReadAudience($object)
{
    $query = $object->readAudienceByClient();
    checkQuery($query, "Empty records. (read by client audience)");
    return $query;
}

// compare two values
function compareTwoValuesForEmail($object, $email_old, $email, $id_old, $id)
{
    if (strtolower($email_old) !=  strtolower($email) || strtolower($id_old) !=  strtolower($id)) {
        isEmailExist($object, $email);
    }
}

// filter by audience  
function checkFilterByAudience($object)
{
    $query = $object->filterByAudience();
    checkQuery($query, "Empty records. (filter by audience )");
    return $query;
}

// filter by audience and search  
function checkFilterByAudienceAndSearch($object)
{
    $query = $object->filterByAudienceAndSearch();
    checkQuery($query, "Empty records. (filter by audience and search)");
    return $query;
}
