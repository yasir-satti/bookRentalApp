package com.project.service;

import org.mybatis.spring.annotation.MapperScan;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.test.context.ContextConfiguration;

import java.lang.*;

@SpringBootApplication
@ContextConfiguration
@MapperScan
public class BookRentalAppSpbootApplication {

    public static void main(String[] args) {

        SpringApplication.run(BookRentalAppSpbootApplication.class, args);
    }
}
