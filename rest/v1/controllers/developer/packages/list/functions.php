<?php

// association with package details
function isAssociatedPackageDetails($object)
{
    $query = $object->checkAssociationPackageDetails();
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

// compare two values
function compareTwoValuesForTitleAndCategory($object, $title_old, $title, $id_old, $id)
{
    if (strtolower($title_old) !=  strtolower($title) || strtolower($id_old) !=  strtolower($id)) {
        isEmailExist($object, $title);
    }
}
