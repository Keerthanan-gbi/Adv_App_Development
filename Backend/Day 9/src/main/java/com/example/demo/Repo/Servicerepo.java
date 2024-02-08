package com.example.demo.Repo;



 

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

 

import com.example.demo.Entity.Serviceentity;

 

@Repository

public interface Servicerepo extends JpaRepository<Serviceentity, Long> {

    Serviceentity findByCustomername(String customername);

    void deleteByCustomername(String customername);

    // Other methods...

}

 