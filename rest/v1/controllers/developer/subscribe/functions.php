<?php

// count the subscribers
function checkReadSubscriberCount($object)
{
    $query = $object->readSubscriberCount();
    checkQuery($query, "Empty records. (subscriber count)");
    return $query;
}
