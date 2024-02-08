package com.example.demo.Entity;



 

import jakarta.persistence.Column;

import jakarta.persistence.Table;

import jakarta.persistence.Id;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

// import lombok.AllArgsConstructor;

// import lombok.Getter;

// import lombok.NoArgsConstructor;

// import lombok.Setter;

 

// @Getter

// @Setter

// @NoArgsConstructor

// @AllArgsConstructor

// @Entity

@Table(name = "recharge")

public class Serviceentity {

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

 

    @Column(name = "Customer_Name",nullable = false)

    private String customername;

 

    @Column(name = "Ph_No",nullable = false)

    private String phno;

 

    @Column(name = "Plan_Name",nullable = false)

    private String planname;

 

    @Column(name = "Validity",nullable = false)

    private String validity;


    @Column(name = "Amount",nullable = false)

    private String amount;


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getCustomername() {
        return customername;
    }


    public void setCustomername(String customername) {
        this.customername = customername;
    }


    public String getPhno() {
        return phno;
    }


    public void setPhno(String phno) {
        this.phno = phno;
    }


    public String getPlanname() {
        return planname;
    }


    public void setPlanname(String planname) {
        this.planname = planname;
    }


    public String getValidity() {
        return validity;
    }


    public void setValidity(String validity) {
        this.validity = validity;
    }


    public String getAmount() {
        return amount;
    }


    public void setAmount(String amount) {
        this.amount = amount;
    }


    public Serviceentity(Long id, String customername, String phno, String planname, String validity, String amount) {
        this.id = id;
        this.customername = customername;
        this.phno = phno;
        this.planname = planname;
        this.validity = validity;
        this.amount = amount;
    }
 

}