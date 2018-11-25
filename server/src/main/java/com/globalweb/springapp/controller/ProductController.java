package com.globalweb.springapp.controller;

import com.globalweb.springapp.model.Product;
import com.globalweb.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/company/{companyId}/products")
    public List<Product> getProductsByCompanyId(@PathVariable Long companyId) {
        // This line is comment to show the using of stream from Java 8
        // productRepository.findByCompanyId(companyId);

        List<Product> products = productRepository.findAll();
        return products.stream()
                .filter(p -> p.getCompany().getId().equals(companyId))
                .collect(Collectors.toList());
    }

}
