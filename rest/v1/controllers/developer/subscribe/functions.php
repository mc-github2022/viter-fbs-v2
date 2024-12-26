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



