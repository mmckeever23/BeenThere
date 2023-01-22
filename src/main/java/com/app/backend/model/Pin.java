package com.app.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.io.Serializable;

@Entity
@DynamicUpdate
@DynamicInsert
@Table(name="pin")
@AllArgsConstructor
@Data
@NoArgsConstructor
public class Pin implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;
    private String name;
    private String lat;
    private String lng;
    private String title;
    private String departDate;
    private String returnDate;
    private String log;




}
