package fsd.moviecruiser.authenticator.controller;

import static org.hamcrest.CoreMatchers.containsString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.MessageFormat;
import java.util.HashMap;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import fsd.moviecruiser.authenticator.exception.UserAlreadyExistException;
import fsd.moviecruiser.authenticator.exception.UserNotFoundException;
import fsd.moviecruiser.authenticator.repository.model.User;
import fsd.moviecruiser.authenticator.service.SecurityTokenService;
import fsd.moviecruiser.authenticator.service.UserService;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserService userService;
	@MockBean
	private SecurityTokenService securityTokenService;

	@Test
	public void testCreateNewUser() throws Exception {
		final User userToCreate = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		final String userToCreateJson = "{\"fullName\": \"Prajit Gandhi\",\"password\": \"P@ssw0rd\",\"userId\": \"prajit.gandhi@cognizant.com\"}";
		when(userService.saveUser(userToCreate)).thenReturn(true);

		this.mockMvc.perform(post("/api/v1/auth/user/register").contentType(UserController.MIME_JSON)
				.accept(UserController.MIME_JSON).content(userToCreateJson)).andExpect(status().isCreated());
		verify(this.userService, times(1)).saveUser(Mockito.any(User.class));
		verifyNoMoreInteractions(this.userService);
	}

	@Test
	public void testCreateNewUser_UserAlreadyExistException() throws Exception {
		final User userToCreate = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		final String userToCreateJson = "{\"fullName\": \"Prajit Gandhi\",\"password\": \"P@ssw0rd\",\"userId\": \"prajit.gandhi@cognizant.com\"}";
		when(userService.saveUser(Mockito.any(User.class))).thenThrow(new UserAlreadyExistException(
				MessageFormat.format("User With Id {0} Already Exists.", userToCreate.getUserId())));

		this.mockMvc
				.perform(post("/api/v1/auth/user/register").contentType(UserController.MIME_JSON)
						.accept(UserController.MIME_JSON).content(userToCreateJson))
				.andExpect(status().is(HttpStatus.CONFLICT.value()));
	}

	@Test
	public void testLogin_UserIdPassword_Are_Mandatory_But_Missing() throws Exception {
		final String userToCreateJson = "{\"fullName\": \"Prajit Gandhi\"}";

		this.mockMvc
				.perform(post("/api/v1/auth/user/login").contentType(UserController.MIME_JSON)
						.accept(UserController.MIME_JSON).content(userToCreateJson))
				.andExpect(status().is(HttpStatus.BAD_REQUEST.value()))
				.andExpect(content().string(containsString("UserId & Password Are Mandatory.")));
	}

	@Test
	public void testLogin_UserNotFoundException() throws Exception {
		final String userToCreateJson = "{\"fullName\": \"Prajit Gandhi\",\"password\": \"P@ssw0rd\",\"userId\": \"prajit.gandhi@cognizant.com\"}";
		final User userToCreate = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		when(userService.findByUserIdAndPassword(ArgumentMatchers.anyString(), ArgumentMatchers.anyString()))
				.thenThrow(new UserNotFoundException(MessageFormat.format(
						"User With Id {0} Not Exists,Or Provide Valid UserId/Password Combination.",
						userToCreate.getUserId())));

		this.mockMvc
				.perform(post("/api/v1/auth/user/login").contentType(UserController.MIME_JSON)
						.accept(UserController.MIME_JSON).content(userToCreateJson))
				.andExpect(status().is(HttpStatus.BAD_REQUEST.value()))
				.andExpect(content().string(containsString("prajit.gandhi@cognizant.com")));

		verify(this.userService, times(1)).findByUserIdAndPassword(ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString());
		verifyNoMoreInteractions(this.userService);
	}

	@Test
	public void testLogin() throws Exception {
		final String userToCreateJson = "{\"fullName\": \"Prajit Gandhi\",\"password\": \"P@ssw0rd\",\"userId\": \"prajit.gandhi@cognizant.com\"}";
		final User userToCreate = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		final Map<String, String> jwtMap = new HashMap<>();
		jwtMap.put("JwtToken",
				"eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJmc2QtbW92aWVjcnVpc2VyLWF1dGhlbnRpY2F0b3Itc2VydmljZSIsInN1YiI6InByYWppdC5nYW5kaGlAY29nbml6YW50LmNvbSIsImlhdCI6MTUzNDYxNzAwMCwiZXhwIjoxNTM0NzAzNDAwfQ.G4IwfN7YUQ-4YnZhLq1iddenXttFE-aKA12qzm3g_4jB2BKLWC51yWD6i9ph8v-_xZ0Q1oUGpGWsSx0-3jYSqA");
		jwtMap.put("Message", "JWT Generation Successful.");
		when(userService.findByUserIdAndPassword(ArgumentMatchers.anyString(), ArgumentMatchers.anyString()))
				.thenReturn(userToCreate);
		when(securityTokenService.generateSecurityToken(Mockito.any(User.class))).thenReturn(jwtMap);

		this.mockMvc
				.perform(post("/api/v1/auth/user/login").contentType(UserController.MIME_JSON)
						.accept(UserController.MIME_JSON).content(userToCreateJson))
				.andExpect(status().is(HttpStatus.OK.value())).andExpect(content().string(containsString("JwtToken")))
				.andExpect(content().string(containsString("Message")));

		verify(this.userService, times(1)).findByUserIdAndPassword(ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString());
		verify(this.securityTokenService, times(1)).generateSecurityToken(Mockito.any(User.class));

		verifyNoMoreInteractions(this.userService);
	}
}
