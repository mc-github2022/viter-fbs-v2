<?php


// Create Packages list
function checkcreatePackagesList($object)
{
    $query = $object->createPackagesList();
    checkQuery($query, "There's a problem processing your request. (create Packages title)");
    return $query;
}

// Update Packages list
function checkUpdatePackagesList($object)
{
    $query = $object->updatePackagesList();
    checkQuery($query, "There's a problem processing your request. (update Packages title)");
    return $query;
}
