package controllers;
 
import play.*;
import play.mvc.*;
 
import java.util.*;
 
import models.*;
 
@With(Secure.class)
public class Admin extends Controller {
    
    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            User user = User.find("byEmail", Security.connected()).first();
            renderArgs.put("user", user);
        }
    }
 
    public static void index() {
      //User user = (User) renderArgs.get("user");
      //Application.index(user);
      Application.index();
    }
    
    static void onDisconnected() {
      Application.index();
    }
    
}
