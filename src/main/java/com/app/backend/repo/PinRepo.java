package com.app.backend.repo;

import com.app.backend.model.Pin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PinRepo extends JpaRepository<Pin, Object> {
}
