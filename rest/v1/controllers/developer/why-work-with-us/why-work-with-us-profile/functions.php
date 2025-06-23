<?php


// Create company profile
function checkCreateCompanyProfileList($object)
{
    $query = $object->createCompanyProfileList();
    checkQuery($query, "There's a problem processing your request. (create company profile)");
    return $query;
}

// Update company profile
function checkUpdateCompanyProfileList($object)
{
    $query = $object->updateCompanyProfileList();
    checkQuery($query, "There's a problem processing your request. (update company profile)");
    return $query;
}

// Create company profile description
function checkCreateCompanyDescription($object)
{
    $query = $object->createCompanyDescription();
    checkQuery($query, "There's a problem processing your request. (create company profile description)");
    return $query;
}

// Update company profile description
function checkUpdateCompanyDescription($object)
{
    $query = $object->updateCompanyDescription();
    checkQuery($query, "There's a problem processing your request. (update company profile description)");
    return $query;
}
