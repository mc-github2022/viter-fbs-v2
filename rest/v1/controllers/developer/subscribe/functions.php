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

// // validation when email is inactive and want it to be active
// function checkEmailSetActive($object)
// {
//     $query = $object->emailSetActive();
//     checkQuery($query, "Inactive email is not being updated to active");
//     return $query;
// }

// email resend
function checkEmailResend($object)
{
    $query = $object->emailResend();
    checkQuery($query, "Resend email failed");
    return $query;
}
