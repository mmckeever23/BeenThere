package com.app.backend.controller;

import com.app.backend.model.Pin;
import com.app.backend.repo.PinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pin")
@CrossOrigin(origins = "http://localhost:4200")
public class PinController {

    @Autowired
    private PinRepo repo;

    @PostMapping("/pin")
    public ResponseEntity<?> savePinData(@RequestBody Pin pinData) {
        return ResponseEntity.ok(repo.save(pinData));
    }
}
