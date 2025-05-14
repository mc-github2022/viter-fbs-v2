<?php

// association with subscribers to audience name
function isAssociatedListCategory($object)
{
    $query = $object->checkAssociationListCategory();
    $count = $query->rowCount();
    checkExistence($count, "You cannot delete this item because it is already associated with other module.");
}
