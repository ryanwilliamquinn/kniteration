package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

    public static void index() {
        render();
    }

    public static void loadPattern(String id) {
        //renderJSON("{ryan: 'smart'}");
        User user = User.find("byEmail", "ryanwilliamquinn@gmail.com").first();
        Set<Pattern> patterns = user.patterns;
        renderJSON(patterns);
    }

}
