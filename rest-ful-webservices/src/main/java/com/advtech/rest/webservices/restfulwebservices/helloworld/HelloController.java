package com.advtech.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "devtools test Rest-ful web services";
    }

    @GetMapping("/hello-bean")
    public HelloBean msgBean() {
        HelloBean hello = new HelloBean();
        hello.setMsg("hello bean");
        return hello;
    }

    @GetMapping("/hello-bean/{name}")
    public HelloBean msgBean(@PathVariable String name) {
        HelloBean hello = new HelloBean();
        hello.setMsg(String.format("Vanakkam %s",name));
        return hello;

        //throw new RuntimeException("Something went wrong");
    }
}
