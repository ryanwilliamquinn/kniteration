package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            User user = User.find("byEmail", Security.connected()).first();
            renderArgs.put("user", user);
        }
    }

    public static void index() {
        render();
    }

    public static void loadPattern(String name) {
        User user = Security.getCurrentUser();
        Set<Pattern> patterns = user.patterns;
        Pattern pattern = null;
        for (Pattern p : patterns) {
           System.out.println(p.name);
           if (p.name.equals(name)) {
               pattern = p;
               break;
           }
       }
       renderJSON(pattern);
    }

}
