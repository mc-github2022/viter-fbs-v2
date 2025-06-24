<?php


// Create operation manager
function checkCreateOperationManager($object)
{
    $query = $object->createOperationManager();
    checkQuery($query, "There's a problem processing your request. (create operation manager)");
    return $query;
}

// Update operation manager
function checkUpdateOperationManager($object)
{
    $query = $object->updateOperationManager();
    checkQuery($query, "There's a problem processing your request. (update operation manager)");
    return $query;
}

// Create HR
function checkCreateHR($object)
{
    $query = $object->createHR();
    checkQuery($query, "There's a problem processing your request. (create HR)");
    return $query;
}

// Update HR
function checkUpdateHR($object)
{
    $query = $object->updateHR();
    checkQuery($query, "There's a problem processing your request. (update HR)");
    return $query;
}

// Create finance
function checkCreateFinance($object)
{
    $query = $object->createFinance();
    checkQuery($query, "There's a problem processing your request. (create finance)");
    return $query;
}

// Update finance
function checkUpdateFinance($object)
{
    $query = $object->updateFinance();
    checkQuery($query, "There's a problem processing your request. (update finance)");
    return $query;
}

// Create lcs supervisor
function checkCreateLcsSupervisor($object)
{
    $query = $object->createLcsSupervisor();
    checkQuery($query, "There's a problem processing your request. (create lcs supervisor)");
    return $query;
}

// Update lcs supervisor
function checkUpdateLcsSupervisor($object)
{
    $query = $object->updateLcsSupervisor();
    checkQuery($query, "There's a problem processing your request. (update lcs supervisor)");
    return $query;
}

// Create web supervisor
function checkCreateWebSupervisor($object)
{
    $query = $object->createWebSupervisor();
    checkQuery($query, "There's a problem processing your request. (create web supervisor)");
    return $query;
}

// Update web supervisor
function checkUpdateWebSupervisor($object)
{
    $query = $object->updateWebSupervisor();
    checkQuery($query, "There's a problem processing your request. (update web supervisor)");
    return $query;
}

// Create marketing
function checkCreateMarketing($object)
{
    $query = $object->createMarketing();
    checkQuery($query, "There's a problem processing your request. (create marketing)");
    return $query;
}

// Update marketing
function checkUpdateMarketing($object)
{
    $query = $object->updateMarketing();
    checkQuery($query, "There's a problem processing your request. (update marketing)");
    return $query;
}

// Create va
function checkCreateVA($object)
{
    $query = $object->createVA();
    checkQuery($query, "There's a problem processing your request. (create va)");
    return $query;
}

// Update va
function checkUpdateVA($object)
{
    $query = $object->updateVA();
    checkQuery($query, "There's a problem processing your request. (update va)");
    return $query;
}
