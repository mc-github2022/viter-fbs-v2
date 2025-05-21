<?php


// Create LogoImg
function checkCreateLogoImg($object)
{
    $query = $object->createLogoImg();
    checkQuery($query, "There's a problem processing your request. (create LogoImg)");
    return $query;
}

// Create ContactUs
function checkCreateContactUs($object)
{
    $query = $object->createContactUs();
    checkQuery($query, "There's a problem processing your request. (create ContactUs)");
    return $query;
}

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

// Update LogoImg
function checkUpdateLogoImg($object)
{
    $query = $object->updateLogoImg();
    checkQuery($query, "There's a problem processing your request. (update LogoImg)");
    return $query;
}

// Update ContactUs
function checkUpdateContactUs($object)
{
    $query = $object->updateContactUs();
    checkQuery($query, "There's a problem processing your request. (update ContactUs)");
    return $query;
}
