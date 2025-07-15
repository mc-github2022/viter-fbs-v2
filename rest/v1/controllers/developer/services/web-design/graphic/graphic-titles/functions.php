<?php



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
