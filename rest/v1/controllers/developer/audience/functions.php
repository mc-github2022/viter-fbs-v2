<?php

// search receiver email
function checkSearchReceiverEmail($object)
{
    $query = $object->searchReceiverEmail();
    checkQuery($query, "Empty records. (filter by search receiver email)");
    return $query;
}

// association with subscribers to audience name
function isAssociatedSubscriberAudienceName($object)
{
    $query = $object->checkAssociationSubscriberAudienceName();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}
