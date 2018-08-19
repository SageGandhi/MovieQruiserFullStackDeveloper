package edu.gandhi.prajit.moviecruiser.authenticator.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import edu.gandhi.prajit.moviecruiser.authenticator.repository.model.User;
import edu.gandhi.prajit.moviecruiser.authenticator.service.JwtSecurityTokenService;
import edu.gandhi.prajit.moviecruiser.authenticator.service.SecurityTokenService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = JwtSecurityTokenService.class)
public class JwtSecurityTokenServiceTest {
	@Autowired
	private SecurityTokenService securityTokenService;

	@Test
	public void testGenerateSecurityToken() {
		final User userToCreateJwt = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		final Map<String, String> jwtMsgMap = securityTokenService.generateSecurityToken(userToCreateJwt);

		assertThat(jwtMsgMap).isNotEmpty();
		assertThat(jwtMsgMap.get("JWTTOKEN")).isNotEmpty();
		assertThat(jwtMsgMap.get("Message")).containsSequence("JWT Generation Successful.");
	}
}