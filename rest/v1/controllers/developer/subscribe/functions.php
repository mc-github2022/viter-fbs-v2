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
