<?php


// Create vision
function checkCreateVision($object)
{
    $query = $object->createVision();
    checkQuery($query, "There's a problem processing your request. (create vision)");
    return $query;
}

// Update vision
function checkUpdateVision($object)
{
    $query = $object->updateVision();
    checkQuery($query, "There's a problem processing your request. (update vision)");
    return $query;
}

// Create mission
function checkCreateMission($object)
{
    $query = $object->createMission();
    checkQuery($query, "There's a problem processing your request. (create mission)");
    return $query;
}

// Update mission
function checkUpdateMission($object)
{
    $query = $object->updateMission();
    checkQuery($query, "There's a problem processing your request. (update mission)");
    return $query;
}

// Create core values
function checkCreateCoreValues($object)
{
    $query = $object->createCoreValues();
    checkQuery($query, "There's a problem processing your request. (create core values)");
    return $query;
}

// Update core values
function checkUpdateCoreValues($object)
{
    $query = $object->updateCoreValues();
    checkQuery($query, "There's a problem processing your request. (update core values)");
    return $query;
}
