<?php

// count the subscribers
function checkReadSubscriberCount($object)
{
    $query = $object->readSubscriberCount();
    checkQuery($query, "Empty records. (subscriber count)");
    return $query;
}

// update unsubscribe 
function checkUpdateUnsubscribe($object)
{
    $query = $object->updateUnsubscribe();
    checkQuery($query, "Empty records. (unsubscribe)");
    return $query;
}

// Validation when email is inactive and want it to be active
function checkEmailSetActive($object)
{
    // Call the emailSetActive method on the object
    $query = $object->emailSetActive();

    // Check the result of the emailSetActive method
    if ($query) {
        // The email was updated to active
        return true; // Successfully updated
    } else {
        // The email was not updated; it could be already active or does not exist
        // Here, you can log or handle the error as needed
        checkQuery($query, "Inactive email is not being updated to active");
        return false; // Email was not updated
    }
}
