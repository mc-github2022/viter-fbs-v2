<?php

// read role
function checkReadRole($object)
{
    $query = $object->readRole();
    checkQuery($query, "Empty records. (role)");
    return $query;
}

// Update email
function checkUpdateAccountEmail($object)
{
    $query = $object->updateAccountEmail();
    checkQuery($query, "There's a problem processing your request. (update email)");
    return $query;
}
