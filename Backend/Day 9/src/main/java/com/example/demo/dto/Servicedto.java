package com.example.demo.dto;



 

import lombok.AllArgsConstructor;

import lombok.Getter;

import lombok.NoArgsConstructor;

import lombok.Setter;

 

@Getter

@Setter

@NoArgsConstructor

@AllArgsConstructor

public class Servicedto {

    private Long id;

    private String customername;

    private String phno;

    private String planname;

    private String validity;

    private String amount;

 

}