<?php
class UserOther
{
    public $user_other_aid;
    public $user_other_is_active;
    public $user_other_fname;
    public $user_other_lname;
    public $user_other_email;
    public $user_other_email_new;
    public $user_other_role_id;
    public $user_other_key;
    public $user_other_password;
    public $user_other_created;
    public $user_other_datetime;

    public $role_code;

    public $connection;
    public $lastInsertedId;
    public $user_other_start;
    public $user_other_total;
    public $user_other_search;
    public $tblUser;
    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUser = "fbsv2_user_other";
        $this->tblRole = "fbsv2_role";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblUser} ";
            $sql .= "( user_other_fname, ";
            $sql .= "user_other_lname, ";
            $sql .= "user_other_is_active, ";
            $sql .= "user_other_email, ";
            $sql .= "user_other_role_id, ";
            $sql .= "user_other_key, ";
            $sql .= "user_other_created, ";
            $sql .= "user_other_datetime ) values ( ";
            $sql .= ":user_other_fname, ";
            $sql .= ":user_other_lname, ";
            $sql .= ":user_other_is_active, ";
            $sql .= ":user_other_email, ";
            $sql .= ":user_other_role_id, ";
            $sql .= ":user_other_key, ";
            $sql .= ":user_other_created, ";
            $sql .= ":user_other_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => $this->user_other_fname,
                "user_other_lname" => $this->user_other_lname,
                "user_other_is_active" => $this->user_other_is_active,
                "user_other_email" => $this->user_other_email,
                "user_other_role_id" => $this->user_other_role_id,
                "user_other_key" => $this->user_other_key,
                "user_other_created" => $this->user_other_created,
                "user_other_datetime" => $this->user_other_datetime
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "concat(user.user_other_lname, ', ' , user.user_other_fname) as fullname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and role.role_code != :role_code ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_code" => $this->role_code,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read limit
    public function readLimit()
    {
        try {
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "concat(user.user_other_lname, ', ' , user.user_other_fname) as fullname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and role.role_code != :role_code ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_code" => $this->role_code,
                "start" => $this->user_other_start - 1,
                "total" => $this->user_other_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read login
    public function readLogin()
    {
        try {
            $sql = "select user.user_other_aid, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_password, ";
            $sql .= "role.* ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and user.user_other_email like :user_other_email ";
            $sql .= "and user.user_other_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select user.user_other_fname, ";
            $sql .= "user.user_other_lname, ";
            $sql .= "concat(user.user_other_lname, ', ' , user.user_other_fname) as fullname, ";
            $sql .= "user.user_other_is_active, ";
            $sql .= "user.user_other_email, ";
            $sql .= "user.user_other_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_other_aid ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_other_role_id = role.role_aid ";
            $sql .= "and role.role_code != :role_code ";
            $sql .= "and ( user.user_other_fname like :user_other_fname ";
            $sql .= "or user.user_other_lname like :user_other_lname ";
            $sql .= "or user.user_other_email like :user_other_email ";
            $sql .= "or concat(user.user_other_lname, ', ' , user.user_other_fname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by user.user_other_is_active desc, ";
            $sql .= "user.user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_code" => $this->role_code,
                "user_other_fname" => "%{$this->user_other_search}%",
                "user_other_lname" => "%{$this->user_other_search}%",
                "user_other_email" => "%{$this->user_other_search}%",
                "fullname" => "%{$this->user_other_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $sql .= "order by user_other_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select user_other_key from {$this->tblUser} ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key for email verification
    public function readKeyChangeEmail()
    {
        try {
            $sql = "select ";
            $sql .= "user_other_key, ";
            $sql .= "user_other_email_new ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read role
    public function readRole()
    {
        try {
            $sql = "select * from {$this->tblRole} ";
            $sql .= "where role_is_active = 1 ";
            $sql .= "and role_code != :role_code ";
            $sql .= "order by role_is_active desc, ";
            $sql .= "role_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_code" => $this->role_code,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_fname = :user_other_fname, ";
            $sql .= "user_other_lname = :user_other_lname, ";
            $sql .= "user_other_role_id = :user_other_role_id, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => $this->user_other_fname,
                "user_other_lname" => $this->user_other_lname,
                "user_other_role_id" => $this->user_other_role_id,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function updateUserKeyAndNewEmail()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_key = :user_other_key, ";
            $sql .= "user_other_email_new = :user_other_email, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid  = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "user_other_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function setPassword()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_password = :user_other_password, ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key  = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_password" => $this->user_other_password,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // reset password
    public function resetPassword()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_key = :user_other_key, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_email = :user_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_key" => $this->user_other_key,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_email" => $this->user_other_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_is_active = :user_other_is_active, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_is_active" => $this->user_other_is_active,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblUser} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // email
    public function checkEmail()
    {
        try {
            $sql = "select user_other_email from {$this->tblUser} ";
            $sql .= "where user_other_email = :user_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => "{$this->user_other_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where user_other_is_active = :user_other_is_active  ";
            $sql .= "order by user_other_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_is_active" => $this->user_other_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where ";
            $sql .= "user_other_is_active = :user_other_is_active ";
            $sql .= "and user_other_fname like :user_other_fname ";
            $sql .= "and user_other_lname like :user_other_lname ";
            $sql .= "order by user_other_is_active desc, ";
            $sql .= "user_other_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_fname" => "%{$this->user_other_search}%",
                "user_other_lname" => "%{$this->user_other_search}%",
                "user_other_is_active" => $this->user_other_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateEmailForUser()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_other_email = :user_other_email, ";
            $sql .= "user_other_email_new = '', ";
            $sql .= "user_other_key = '', ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_key = :user_other_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_email" => $this->user_other_email,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_key" => $this->user_other_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
