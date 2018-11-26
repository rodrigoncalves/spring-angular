package com.globalweb.springapp.controller;

import com.globalweb.springapp.exception.ResourceNotFoundException;
import com.globalweb.springapp.model.Company;
import com.globalweb.springapp.model.Product;
import com.globalweb.springapp.repository.CompanyRepository;
import com.globalweb.springapp.repository.ProductRepository;
import com.globalweb.springapp.request.ProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/companies/{companyId}/products")
    public List<Product> getProductsByCompanyId(@PathVariable Long companyId) {
        // This line is comment to show the using of stream from Java 8
        // productRepository.findByCompanyId(companyId);

        List<Product> products = productRepository.findAll();
        return products.stream()
                .filter(p -> p.getCompany().getId().equals(companyId))
                .collect(Collectors.toList());
    }

    @PostMapping("/companies/{companyId}/products")
    public Product createProduct(@PathVariable Long companyId,
                                 @Valid @RequestBody Product product) {
        return companyRepository.findById(companyId)
                .map(company -> {
                    product.setCompany(company);
                    return productRepository.save(product);
                }).orElseThrow(() -> new ResourceNotFoundException("Company not found with id " + companyId));
    }

    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
    }

    @PutMapping("/products/{productId}")
    public Product updateProduct(@PathVariable Long productId,
                                 @Valid @RequestBody ProductRequest productRequest) {
        Long companyId = productRequest.getCompany_id();
        Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new ResourceNotFoundException("Company not found with id " + companyId));

        return productRepository.findById(productId)
                .map(product -> {
                    product.setId(productId);
                    product.setName(productRequest.getName());
                    product.setValue(productRequest.getValue());
                    product.setCompany(company);
                    return productRepository.save(product);
                }).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
        return productRepository.findById(productId)
                .map(product -> {
                    productRepository.delete(product);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Product not found with id " + productId));
    }
}
