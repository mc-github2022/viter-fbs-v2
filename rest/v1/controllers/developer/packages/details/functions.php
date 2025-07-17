<?php

// association with list category
// function isAssociatedListCategory($object)
// {
//     $query = $object->checkAssociationListCategory();
//     $count = $query->rowCount();
//     checkExistence($count, "You cannot delete this item because it is already associated with other module.");
// }

// filter by search list modal
function checkSearchPackagesList($object)
{
    $query = $object->searchPackagesList();
    checkQuery($query, "Empty records. (filter by search packages list)");
    return $query;
}

// filter by list
function checkFilterByList($object)
{
    $query = $object->filterByList();
    checkQuery($query, "Empty records. (filter by packages list)");
    return $query;
}

// filter by list and status
function checkFilterByStatusAndList($object)
{
    $query = $object->filterByStatusAndList();
    checkQuery($query, "Empty records. (filter by packages list and status)");
    return $query;
}

// filter by list and search
function checkFilterByListAndSearch($object)
{
    $query = $object->filterByListAndSearch();
    checkQuery($query, "Empty records. (filter by packages list and search)");
    return $query;
}

// filter by status, list and search
function checkFilterByStatusAndListAndSearch($object)
{
    $query = $object->filterByStatusAndListAndSearch();
    checkQuery($query, "Empty records. (filter by packages list, status and search)");
    return $query;
}
