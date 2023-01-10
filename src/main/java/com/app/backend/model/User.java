package com.app.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name="login_user")
@AllArgsConstructor
@Data
@DynamicUpdate
@DynamicInsert
@NoArgsConstructor
public class User {

    @Id
    @Column(name="username")
    private String userId;

    @Column(name="password")
    private String password;
}
