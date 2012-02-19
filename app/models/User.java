package models;
 
import java.util.*;
import javax.persistence.*;

import play.db.jpa.*;

@Entity
public class User extends Model {

    public String email;
    public String password;
    public String fullname;
    public boolean isAdmin;

    @ManyToMany(cascade=CascadeType.PERSIST)
    public Set<Pattern> patterns;

    public User(String email, String password, String fullname) {
        this.email = email;
        this.password = password;
        this.fullname = fullname;
    }

    public String toString() {
        return fullname;
    }
						 
}	
