package com.app.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate
@DynamicInsert
@Table(name="pin_data")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Pin {

    @Id
    @Column(name="latitude")
    private Object pinData;
}
