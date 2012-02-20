package controllers;

import models.*;

public class Security extends Secure.Security {

    static boolean authenticate(String username, String password) {
        return User.connect(username, password) != null;
    }

    /**
     * Returns the currently connected user or null if there is no one logged in.
     * @return
     */
    public static User getCurrentUser() {
        String currentUserName = connected();
        if(currentUserName != null) {
            return User.find("byEmail", currentUserName).first();
        } else {
            return null;
        }
    }

}
