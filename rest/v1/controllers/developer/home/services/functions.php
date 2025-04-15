<?php


// Create Services A
function checkCreateServicesA($object)
{
    $query = $object->createServicesA();
    checkQuery($query, "There's a problem processing your request. (create services A)");
    return $query;
}

// Update Services A
function checkUpdateServicesA($object)
{
    $query = $object->updateServicesA();
    checkQuery($query, "There's a problem processing your request. (update services A)");
    return $query;
}

// Create Services B
function checkCreateServicesB($object)
{
    $query = $object->createServicesB();
    checkQuery($query, "There's a problem processing your request. (create services B)");
    return $query;
}

// Update Services B
function checkUpdateServicesB($object)
{
    $query = $object->updateServicesB();
    checkQuery($query, "There's a problem processing your request. (update services B)");
    return $query;
}

// Create Services C
function checkCreateServicesC($object)
{
    $query = $object->createServicesC();
    checkQuery($query, "There's a problem processing your request. (create services C)");
    return $query;
}

// Update Services C
function checkUpdateServicesC($object)
{
    $query = $object->updateServicesC();
    checkQuery($query, "There's a problem processing your request. (update services C)");
    return $query;
}

// Create Services D
function checkCreateServicesD($object)
{
    $query = $object->createServicesD();
    checkQuery($query, "There's a problem processing your request. (create services D)");
    return $query;
}

// Update Services D
function checkUpdateServicesD($object)
{
    $query = $object->updateServicesD();
    checkQuery($query, "There's a problem processing your request. (update services D)");
    return $query;
}
