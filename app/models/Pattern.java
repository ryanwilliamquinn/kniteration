package models;

import java.util.*;
import javax.persistence.*;

import play.db.jpa.*;

@Entity
public class Pattern extends Model {

    public int rows;
    public int columns;
    public String name;

    public Pattern(String name, int rows, int column) {
        this.name = name;
        this.rows = rows;
        this.columns = columns;
    }    

    public String toString() {
        return this.name;
    }

}

