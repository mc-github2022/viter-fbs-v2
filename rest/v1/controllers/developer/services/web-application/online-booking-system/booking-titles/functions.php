<?php


// Create Packages title
function checkCreatePackagesTitle($object)
{
    $query = $object->createPackagesTitle();
    checkQuery($query, "There's a problem processing your request. (create Packages title)");
    return $query;
}

// Update Partners title
function checkUpdatePackagesTitle($object)
{
    $query = $object->updatePackagesTitle();
    checkQuery($query, "There's a problem processing your request. (update Packages title)");
    return $query;
}
