<?php


// Create Batches title
function checkCreateBatchesTitle($object)
{
    $query = $object->createBatchesTitle();
    checkQuery($query, "There's a problem processing your request. (create Batches title)");
    return $query;
}

// Update Partners title
function checkUpdateBatchesTitle($object)
{
    $query = $object->updateBatchesTitle();
    checkQuery($query, "There's a problem processing your request. (update Batches title)");
    return $query;
}

// Create VidTestimonial title
function checkCreateVidTestimonialTitle($object)
{
    $query = $object->createVidTestimonialTitle();
    checkQuery($query, "There's a problem processing your request. (create VidTestimonial title)");
    return $query;
}

// Update VidTestimonial title
function checkUpdateVidTestimonialTitle($object)
{
    $query = $object->updateVidTestimonialTitle();
    checkQuery($query, "There's a problem processing your request. (update VidTestimonial title)");
    return $query;
}

// Create PartnerSays title
function checkCreatePartnerSaysTitle($object)
{
    $query = $object->createPartnerSaysTitle();
    checkQuery($query, "There's a problem processing your request. (create PartnerSays title)");
    return $query;
}

// Update PartnerSays title
function checkUpdatePartnerSaysTitle($object)
{
    $query = $object->updatePartnerSaysTitle();
    checkQuery($query, "There's a problem processing your request. (update PartnerSays title)");
    return $query;
}
