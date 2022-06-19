package com.advtech.rest.webservices.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200/")
public class RestFulWebservicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestFulWebservicesApplication.class, args);
	}

}
