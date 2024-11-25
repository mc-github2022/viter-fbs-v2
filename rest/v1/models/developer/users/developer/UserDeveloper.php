<?php
class UserDeveloper
{
    public $user_developer_aid;
    public $user_developer_is_active;
    public $user_developer_fname;
    public $user_developer_lname;
    public $user_developer_email;
    public $user_developer_email_new;
    public $user_developer_role_id;
    public $user_developer_key;
    public $user_developer_password;
    public $user_developer_created;
    public $user_developer_datetime;

    public $connection;
    public $lastInsertedId;
    public $user_developer_start;
    public $user_developer_total;
    public $user_developer_search;
    public $tblUserDeveloper;
    public $tblRole;
    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUserDeveloper = "fbsv2_user_developer";
        $this->tblRole = "fbsv2_role";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblUserDeveloper} ";
            $sql .= "( user_developer_fname, ";
            $sql .= "user_developer_lname, ";
            $sql .= "user_developer_is_active, ";
            $sql .= "user_developer_email, ";
            $sql .= "user_developer_role_id, ";
            $sql .= "user_developer_key, ";
            $sql .= "user_developer_created, ";
            $sql .= "user_developer_datetime ) values ( ";
            $sql .= ":user_developer_fname, ";
            $sql .= ":user_developer_lname, ";
            $sql .= ":user_developer_is_active, ";
            $sql .= ":user_developer_email, ";
            $sql .= ":user_developer_role_id, ";
            $sql .= ":user_developer_key, ";
            $sql .= ":user_developer_created, ";
            $sql .= ":user_developer_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_fname" => $this->user_developer_fname,
                "user_developer_lname" => $this->user_developer_lname,
                "user_developer_is_active" => $this->user_developer_is_active,
                "user_developer_email" => $this->user_developer_email,
                "user_developer_role_id" => $this->user_developer_role_id,
                "user_developer_key" => $this->user_developer_key,
                "user_developer_created" => $this->user_developer_created,
                "user_developer_datetime" => $this->user_developer_datetime,
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
            $sql = "select user.user_developer_fname, ";
            $sql .= "user.user_developer_lname, ";
            $sql .= "user.user_developer_is_active, ";
            $sql .= "user.user_developer_email, ";
            $sql .= "user.user_developer_role_id, ";
            $sql .= "concat(user.user_developer_lname, ', ' , user.user_developer_fname) as fullname, ";
            $sql .= "role.*, ";
            $sql .= "user.user_developer_aid ";
            $sql .= "from {$this->tblUserDeveloper} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_developer_role_id = role.role_aid ";
            $sql .= "order by user.user_developer_is_active desc, ";
            $sql .= "user.user_developer_fname asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select user.user_developer_fname, ";
            $sql .= "user.user_developer_lname, ";
            $sql .= "user.user_developer_is_active, ";
            $sql .= "user.user_developer_email, ";
            $sql .= "user.user_developer_role_id, ";
            $sql .= "concat(user.user_developer_lname, ', ' , user.user_developer_fname) as fullname, ";
            $sql .= "role.*, ";
            $sql .= "user.user_developer_aid ";
            $sql .= "from {$this->tblUserDeveloper} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_developer_role_id = role.role_aid ";
            $sql .= "order by user.user_developer_is_active desc, ";
            $sql .= "user.user_developer_fname asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->user_developer_start - 1,
                "total" => $this->user_developer_total,
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
            $sql = "select user.user_developer_aid, ";
            $sql .= "user.user_developer_is_active, ";
            $sql .= "user.user_developer_fname, ";
            $sql .= "user.user_developer_lname, ";
            $sql .= "user.user_developer_email, ";
            $sql .= "user.user_developer_password, ";
            $sql .= "role.* ";
            $sql .= "from {$this->tblUserDeveloper} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_developer_role_id = role.role_aid ";
            $sql .= "and user.user_developer_email like :user_developer_email ";
            $sql .= "and user.user_developer_is_active = 1 ";
            $sql .= "and role.role_code = 'role_is_developer' ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_email" => $this->user_developer_email,
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
            $sql = "select user.user_developer_fname, ";
            $sql .= "user.user_developer_lname, ";
            $sql .= "user.user_developer_is_active, ";
            $sql .= "user.user_developer_email, ";
            $sql .= "user.user_developer_role_id, ";
            $sql .= "concat(user.user_developer_lname, ', ' , user.user_developer_fname) as fullname, ";
            $sql .= "role.*, ";
            $sql .= "user.user_developer_aid ";
            $sql .= "from {$this->tblUserDeveloper} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_developer_role_id = role.role_aid ";
            $sql .= "and ( user.user_developer_fname like :user_developer_fname ";
            $sql .= "or user.user_developer_lname like :user_developer_lname ";
            $sql .= "or user.user_developer_email like :user_developer_email ";
            $sql .= "or concat(user.user_developer_lname, ' ' , user.user_developer_lname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by user.user_developer_is_active desc, ";
            $sql .= "user.user_developer_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_fname" => "%{$this->user_developer_search}%",
                "user_developer_lname" => "%{$this->user_developer_search}%",
                "user_developer_email" => "%{$this->user_developer_search}%",
                "fullname" => "%{$this->user_developer_search}%",
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
            $sql = "select * from {$this->tblUserDeveloper} ";
            $sql .= "where user_developer_aid = :user_developer_aid ";
            $sql .= "order by user_developer_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_aid" => $this->user_developer_aid,
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
            $sql = "select user_developer_key from {$this->tblUserDeveloper} ";
            $sql .= "where user_developer_key = :user_developer_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_key" => $this->user_developer_key,
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
            $sql .= "user_developer_key, ";
            $sql .= "user_developer_email_new ";
            $sql .= "from {$this->tblUserDeveloper} ";
            $sql .= "where user_developer_key = :user_developer_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_key" => $this->user_developer_key,
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
            $sql .= "and role_code = 'role_is_developer' ";
            $sql .= "order by role_is_active desc, ";
            $sql .= "role_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblUserDeveloper} set ";
            $sql .= "user_developer_fname = :user_developer_fname, ";
            $sql .= "user_developer_lname = :user_developer_lname, ";
            $sql .= "user_developer_datetime = :user_developer_datetime ";
            $sql .= "where user_developer_aid  = :user_developer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_fname" => $this->user_developer_fname,
                "user_developer_lname" => $this->user_developer_lname,
                "user_developer_datetime" => $this->user_developer_datetime,
                "user_developer_aid" => $this->user_developer_aid,
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
            $sql = "update {$this->tblUserDeveloper} set ";
            $sql .= "user_developer_key = :user_developer_key, ";
            $sql .= "user_developer_email_new = :user_developer_email, ";
            $sql .= "user_developer_datetime = :user_developer_datetime ";
            $sql .= "where user_developer_aid = :user_developer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_key" => $this->user_developer_key,
                "user_developer_email" => $this->user_developer_email,
                "user_developer_datetime" => $this->user_developer_datetime,
                "user_developer_aid" => $this->user_developer_aid,
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
            $sql = "update {$this->tblUserDeveloper} set ";
            $sql .= "user_developer_password = :user_developer_password, ";
            $sql .= "user_developer_key = '', ";
            $sql .= "user_developer_datetime = :user_developer_datetime ";
            $sql .= "where user_developer_key  = :user_developer_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_password" => $this->user_developer_password,
                "user_developer_datetime" => $this->user_developer_datetime,
                "user_developer_key" => $this->user_developer_key,
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
            $sql = "update {$this->tblUserDeveloper} set ";
            $sql .= "user_developer_key = :user_developer_key, ";
            $sql .= "user_developer_datetime = :user_developer_datetime ";
            $sql .= "where user_developer_email  = :user_developer_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_key" => $this->user_developer_key,
                "user_developer_datetime" => $this->user_developer_datetime,
                "user_developer_email" => $this->user_developer_email,
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
            $sql = "update {$this->tblUserDeveloper} set ";
            $sql .= "user_developer_is_active = :user_developer_is_active, ";
            $sql .= "user_developer_datetime = :user_developer_datetime ";
            $sql .= "where user_developer_aid = :user_developer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_is_active" => $this->user_developer_is_active,
                "user_developer_datetime" => $this->user_developer_datetime,
                "user_developer_aid" => $this->user_developer_aid,
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
            $sql = "delete from {$this->tblUserDeveloper} ";
            $sql .= "where user_developer_aid = :user_developer_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_aid" => $this->user_developer_aid,
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
            $sql = "select user_developer_email from {$this->tblUserDeveloper} ";
            $sql .= "where user_developer_email = :user_developer_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_developer_email" => "{$this->user_developer_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
