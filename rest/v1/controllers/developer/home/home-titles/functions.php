<?php


// Create Partners title
function checkCreatePartnersTitle($object)
{
    $query = $object->createPartnersTitle();
    checkQuery($query, "There's a problem processing your request. (create Partners title)");
    return $query;
}

// Update Partners title
function checkUpdatePartnersTitle($object)
{
    $query = $object->updatePartnersTitle();
    checkQuery($query, "There's a problem processing your request. (update Partners title)");
    return $query;
}

// Create Insights title
function checkCreateInsightsTitle($object)
{
    $query = $object->createInsightsTitle();
    checkQuery($query, "There's a problem processing your request. (create Insights title)");
    return $query;
}

// Update Insights title
function checkUpdateInsightsTitle($object)
{
    $query = $object->updateInsightsTitle();
    checkQuery($query, "There's a problem processing your request. (update Insights title)");
    return $query;
}
