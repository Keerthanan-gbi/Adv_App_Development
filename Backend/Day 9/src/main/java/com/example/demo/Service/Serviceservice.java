package com.example.demo.Service;




import org.springframework.stereotype.Service;

 

import com.example.demo.dto.Servicedto;

import com.example.demo.Entity.Serviceentity;

import com.example.demo.Mapper.Servicemapper;

import com.example.demo.Repo.Servicerepo;

 

import java.util.List;

import java.util.stream.Collectors;

 

@Service

public class Serviceservice {

 

    private final Servicerepo serviceRepo;

 

    public Serviceservice(Servicerepo serviceRepo) {

        this.serviceRepo = serviceRepo;

    }

 

    public List<Servicedto> getAllServices() {

        List<Serviceentity> services = serviceRepo.findAll();

        return services.stream()

                .map(Servicemapper::maptoServicedto)

                .collect(Collectors.toList());

    }

 

    public Servicedto getServiceByName(String customername) {

        Serviceentity serviceentity = serviceRepo.findByCustomername(customername);

        return Servicemapper.maptoServicedto(serviceentity);

    }

 

    public Servicedto createService(Servicedto servicedto) {

        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);

        serviceentity = serviceRepo.save(serviceentity);

        return Servicemapper.maptoServicedto(serviceentity);

    }

 

    public Servicedto updateServiceByName(String customername, Servicedto updatedServicedto) {

        Serviceentity existingService = serviceRepo.findByCustomername(customername);

 

        if (existingService != null) {

            // Update the fields you want to allow updating

            existingService.setCustomername(updatedServicedto.getCustomername());

            existingService.setPhno(updatedServicedto.getPhno());

            existingService.setPlanname(updatedServicedto.getPlanname());

            existingService.setValidity(updatedServicedto.getValidity());

            existingService.setAmount(updatedServicedto.getAmount());

 

            existingService = serviceRepo.save(existingService);

            return Servicemapper.maptoServicedto(existingService);

        } else {

            // Handle not found scenario

            return null;

        }

    }

 

    public void deleteServiceByName(String customername) {

        serviceRepo.deleteByCustomername(customername);

    }

}

 