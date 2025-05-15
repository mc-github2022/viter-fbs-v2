<?php

// association with list category
// function isAssociatedListCategory($object)
// {
//     $query = $object->checkAssociationListCategory();
//     $count = $query->rowCount();
//     checkExistence($count, "You cannot delete this item because it is already associated with other module.");
// }

// filter by search list
function checkSearchPackagesList($object)
{
    $query = $object->searchPackagesList();
    checkQuery($query, "Empty records. (filter by search packages list)");
    return $query;
}
