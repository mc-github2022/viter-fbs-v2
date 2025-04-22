<?php


// Create Copyright
function checkCreateCopyright($object)
{
    $query = $object->createCopyright();
    checkQuery($query, "There's a problem processing your request. (create Copyright)");
    return $query;
}

// Update Copyright
function checkUpdateCopyright($object)
{
    $query = $object->updateCopyright();
    checkQuery($query, "There's a problem processing your request. (update Copyright)");
    return $query;
}
