<?php

// Read all contact form
function checkReadAllContactForm($object)
{
    $query = $object->readAllContactForm();
    checkQuery($query, "Empty records. (read all contact form)");
    return $query;
}
