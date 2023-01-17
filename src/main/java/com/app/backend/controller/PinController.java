package com.app.backend.controller;

import com.app.backend.model.Pin;
import com.app.backend.repo.PinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PinController {

    @Autowired
    private PinRepo pinRepo;

    @PostMapping("/pin")
    public ResponseEntity<Pin> savePins(@RequestBody Pin pin) {
        return ResponseEntity.ok(pinRepo.save(pin));
    }

    @GetMapping("/pin")
    public List<Pin> getAllPins(){
        return pinRepo.findAll();
    }
}



