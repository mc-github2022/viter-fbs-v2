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

// Create Partners title
function checkCreatePortfolioTitle($object)
{
    $query = $object->createPortfolioTitle();
    checkQuery($query, "There's a problem processing your request. (create Portfolio title)");
    return $query;
}

// Update Portfolio title
function checkUpdatePortfolioTitle($object)
{
    $query = $object->updatePortfolioTitle();
    checkQuery($query, "There's a problem processing your request. (update Portfolio title)");
    return $query;
}

// Create Testimonial title
function checkCreateTestimonialTitle($object)
{
    $query = $object->createTestimonialTitle();
    checkQuery($query, "There's a problem processing your request. (create Testimonial title)");
    return $query;
}

// Update Testimonial title
function checkUpdateTestimonialTitle($object)
{
    $query = $object->updateTestimonialTitle();
    checkQuery($query, "There's a problem processing your request. (update Testimonial title)");
    return $query;
}
