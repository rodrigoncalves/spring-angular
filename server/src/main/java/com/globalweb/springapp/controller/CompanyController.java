package com.globalweb.springapp.controller;

import com.globalweb.springapp.model.Company;
import com.globalweb.springapp.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class CompanyController {

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/companies")
    public List<Company> getCompanies() {
        return companyRepository.findAll();
    }

}
