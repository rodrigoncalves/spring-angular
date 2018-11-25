package com.globalweb.springapp;

import com.globalweb.springapp.model.Company;
import com.globalweb.springapp.model.Product;
import com.globalweb.springapp.repository.CompanyRepository;
import com.globalweb.springapp.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class SpringAppApplication {

	@Autowired
	private CompanyRepository companyRepository;

	@Autowired
	private ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringAppApplication.class, args);
	}

	@Bean
	CommandLineRunner runner() {
		return args -> {

			// Clean database
			companyRepository.deleteAll();

			List<Company> companyList = new ArrayList<>();
			List<Product> productList = new ArrayList<>();

			Company c1 = new Company("Apple");
			companyList.add(c1);
			productList.add(new Product("Iphone 6", 1149.0, c1));
			productList.add(new Product("Iphone 7", 2124.15, c1));
			productList.add(new Product("Iphone 7 Plus", 2974.15, c1));
			productList.add(new Product("Iphone 8", 2719.15, c1));

			Company c2 = new Company("Samsung");
			companyList.add(c2);
			productList.add(new Product("Galaxy J6", 699.0, c2));
			productList.add(new Product("Galaxy J8", 1143.12, c2));
			productList.add(new Product("Galaxy A6+", 1304.03, c2));
			productList.add(new Product("Galaxy A8", 1499.00, c2));
			productList.add(new Product("Galaxy S9", 2599.56, c2));

			Company c3 = new Company("Motorola");
			companyList.add(c3);
			productList.add(new Product("Moto C", 379.0, c3));
			productList.add(new Product("Moto E5", 799.0, c3));
			productList.add(new Product("Moto E5 Plus", 849.0, c3));
			productList.add(new Product("Moto X", 1199.0, c3));
			productList.add(new Product("Moto G6", 1199.0, c3));
			productList.add(new Product("Moto G6 Plus", 1699.0, c3));
			productList.add(new Product("Moto Z3 Play", 1999.0, c3));

			Company c4 = new Company("Xiaomi");
			companyList.add(c4);
			productList.add(new Product("Redmi Note 5", 946.96, c4));
			productList.add(new Product("Redmi Note 6", 1044.05, c4));
			productList.add(new Product("Xiaomi 6A", 499.99, c4));
			productList.add(new Product("Xiaomi A1", 710.0, c4));
			productList.add(new Product("Xiaomi A2", 863.89, c4));

			companyList.forEach(c -> companyRepository.save(c));
			productList.forEach(p -> productRepository.save(p));

		};
	}

}
