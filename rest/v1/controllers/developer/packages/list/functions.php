<?php

// association with subscribers to audience name
function isAssociatedSubscriberAudienceName($object)
{
    $query = $object->checkAssociationSubscriberAudienceName();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}

// filter by search category
function checkSearchPackagesCategory($object)
{
    $query = $object->searchPackagesCategory();
    checkQuery($query, "Empty records. (filter by search packages category)");
    return $query;
}
