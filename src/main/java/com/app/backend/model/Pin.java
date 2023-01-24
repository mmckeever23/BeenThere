package com.app.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name="pin")
public class Pin {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="lat")
    private String lat;

    @Column(name="lng")
    private String lng;

    @Column(name="title")
    private String title;

    @Column(name="depart_Date")
    private String departDate;

    @Column(name="log")
    private String log;

    @Column(name="image_Url_1")
    private String imageUrl1;

    @Column(name="image_Url_2")
    private String imageUrl2;

    @Column(name="image_Url_3")
    private String imageUrl3;

    public Pin() {}

    public Pin(String name, String lat, String lng, String title, String departDate, String log, String imageUrl1, String imageUrl2, String imageUrl3) {
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.title = title;
        this.departDate = departDate;
        this.log = log;
        this.imageUrl1 = imageUrl1;
        this.imageUrl2 = imageUrl2;
        this.imageUrl3 = imageUrl3;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDepartDate() {
        return departDate;
    }

    public void setDepartDate(String departDate) {
        this.departDate = departDate;
    }

    public String getLog() {
        return log;
    }

    public void setLog(String log) {
        this.log = log;
    }

    public String getImageUrl1() {
        return imageUrl1;
    }

    public void setImageUrl1(String imageUrl1) {
        this.imageUrl1 = imageUrl1;
    }

    public String getImageUrl2() {
        return imageUrl2;
    }

    public void setImageUrl2(String imageUrl2) {
        this.imageUrl2 = imageUrl2;
    }

    public String getImageUrl3() {
        return imageUrl3;
    }

    public void setImageUrl3(String imageUrl3) {
        this.imageUrl3 = imageUrl3;
    }
}
