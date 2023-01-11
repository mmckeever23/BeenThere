package com.app.backend.controller;

import com.app.backend.model.User;
import com.app.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepo repo;

    @PostMapping("/user")
    public ResponseEntity<User> registerUser(@RequestBody User user) {

        System.out.println("Controller called");
        return ResponseEntity.ok(repo.save(user));
    }
}
