package com.app.backend.controller;


import com.app.backend.model.Pin;
import com.app.backend.repo.PinRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PinController {

    @Autowired
    private PinRepo pinRepo;

// Get all pins

    @GetMapping("/pin")
    public List<Pin> getAllPins(){
        return pinRepo.findAll();
    }

// Create new pin

    @PostMapping("/pin")
    public ResponseEntity<Pin> savePin(@RequestBody Pin pin) {
        return ResponseEntity.ok(pinRepo.save(pin));
    }

// Get pin by id

    @GetMapping("/pin/{id}")
    public ResponseEntity<Pin> getPinById(@PathVariable Long id) {
        Pin pin = pinRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Pin does not exist with id :" + id));
        return ResponseEntity.ok(pin);
    }

// Update pin

    @PutMapping("/pin/{id}")
    public ResponseEntity<Pin> updatePin(@PathVariable Long id, @RequestBody Pin pinDetails) {
        Pin pin = pinRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Pin does not exist with id :" + id));
        pin.setTitle(pinDetails.getTitle());
        pin.setDepartDate(pinDetails.getDepartDate());
        pin.setLog(pinDetails.getLog());
        pin.setImageUrl1(pinDetails.getImageUrl1());
        pin.setImageUrl2(pinDetails.getImageUrl3());
        pin.setImageUrl2(pinDetails.getImageUrl3());
        Pin updatedPin = pinRepo.save(pin);
        return ResponseEntity.ok(updatedPin);
    }

// Delete pin
    @DeleteMapping("/pin/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePin(@PathVariable Long id){
        Pin pin = pinRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Pin does not exist with id :" + id));
        pinRepo.delete(pin);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}



