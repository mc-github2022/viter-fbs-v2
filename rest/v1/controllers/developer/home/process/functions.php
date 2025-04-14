<?php


// Create Process A
function checkCreateProcessA($object)
{
    $query = $object->createProcessA();
    checkQuery($query, "There's a problem processing your request. (create process A)");
    return $query;
}

// Update Process A
function checkUpdateProcessA($object)
{
    $query = $object->updateProcessA();
    checkQuery($query, "There's a problem processing your request. (update process A)");
    return $query;
}

// Create Process B
function checkCreateProcessB($object)
{
    $query = $object->createProcessB();
    checkQuery($query, "There's a problem processing your request. (create process B)");
    return $query;
}

// Update Process B
function checkUpdateProcessB($object)
{
    $query = $object->updateProcessB();
    checkQuery($query, "There's a problem processing your request. (update process B)");
    return $query;
}

// Create Process C
function checkCreateProcessC($object)
{
    $query = $object->createProcessC();
    checkQuery($query, "There's a problem processing your request. (create process C)");
    return $query;
}

// Update Process C
function checkUpdateProcessC($object)
{
    $query = $object->updateProcessC();
    checkQuery($query, "There's a problem processing your request. (update process C)");
    return $query;
}

// Create Process D
function checkCreateProcessD($object)
{
    $query = $object->createProcessD();
    checkQuery($query, "There's a problem processing your request. (create process D)");
    return $query;
}

// Update Process D
function checkUpdateProcessD($object)
{
    $query = $object->updateProcessD();
    checkQuery($query, "There's a problem processing your request. (update process D)");
    return $query;
}
