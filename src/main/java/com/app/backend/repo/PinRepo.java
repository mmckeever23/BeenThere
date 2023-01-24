package com.app.backend.repo;

import com.app.backend.model.Pin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PinRepo extends JpaRepository<Pin, Long> {

}
