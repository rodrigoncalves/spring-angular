package com.globalweb.springapp.repository;

import com.globalweb.springapp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // not used
    // List<Product> findByCompanyId(Long companyId);
}
