package com.globalweb.springapp.controller;

import com.globalweb.springapp.model.Product;
import com.globalweb.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/company/{company_id}/products")
    public List<Product> getProductsByCompanyId(@PathVariable Long companyId) {
        return productRepository.findByCompanyId(companyId);
    }

}
