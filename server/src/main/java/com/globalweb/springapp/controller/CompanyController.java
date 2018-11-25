package com.globalweb.springapp.controller;

import com.globalweb.springapp.exception.ResourceNotFoundException;
import com.globalweb.springapp.model.Company;
import com.globalweb.springapp.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/companies")
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

    @PostMapping("/companies")
    public Company createCompany(@Valid @RequestBody Company company) {
        return companyRepository.save(company);
    }

    @PutMapping("/companies/{companyId}")
    public Company updateCompany(@PathVariable Long companyId,
                                 @Valid @RequestBody Company companyRequest) {
        return companyRepository.findById(companyId)
                .map(company -> {
                    company.setName(companyRequest.getName());
                    return companyRepository.save(company);
                }).orElseThrow(() -> new ResourceNotFoundException("Company not found with id " + companyId));
    }

    @DeleteMapping("/companies/{companyId}")
    public ResponseEntity<?> deleteCompany(@PathVariable Long companyId) {
        return companyRepository.findById(companyId)
                .map(company -> {
                    companyRepository.delete(company);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Company not found with id " + companyId));
    }

}
