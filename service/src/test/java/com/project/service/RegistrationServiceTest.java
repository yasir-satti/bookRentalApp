package com.project.service;

import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.runner.RunWith;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@MybatisTest
public class RegistrationServiceTest {

    private RegistrationMapper registrationMapper;

//    private RegistrationService registrationService = new RegistrationService(registrationMapper);

    @Test
    public void getRegistrationDataByIdTest() {
//        Registration registration = registrationService.getRegistrationById(21L);
//        assertThat(registration.getFirstName()).isEqualTo("Yasir");
        assertThat(registrationMapper.findById(21L).getFirstName()).isEqualTo("Yasir");
    }
}
