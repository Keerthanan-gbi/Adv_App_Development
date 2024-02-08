package com.example.demo.Mapper;



 

import com.example.demo.dto.Servicedto;

import com.example.demo.Entity.Serviceentity;

 

public class Servicemapper {

 

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {

        // Implement the mapping logic

        return new Servicedto(

                serviceentity.getId(),

                serviceentity.getCustomername(),

                serviceentity.getPhno(),

                serviceentity.getPlanname(),

                serviceentity.getValidity(),

                serviceentity.getAmount()

        );

    }

 

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {

        // Implement the mapping logic

        return new Serviceentity(

        servicedto.getId(),

        servicedto.getCustomername(),

        servicedto.getPhno(),

        servicedto.getPlanname(),

        servicedto.getValidity(),

        servicedto.getAmount()

        );

    }

}