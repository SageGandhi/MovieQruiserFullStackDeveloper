package edu.gandhi.prajit.moviecruiser.authenticator.controller;

import java.text.MessageFormat;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserAlreadyExistException;
import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserNotFoundException;
import edu.gandhi.prajit.moviecruiser.authenticator.repository.model.User;
import edu.gandhi.prajit.moviecruiser.authenticator.service.SecurityTokenService;
import edu.gandhi.prajit.moviecruiser.authenticator.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth/user")
public class UserController {
	public static final String MIME_JSON = "application/json";
	@Autowired
	private UserService userService;
	@Autowired
	private SecurityTokenService securityTokenService;

	@PostMapping(consumes = { MIME_JSON }, produces = { MIME_JSON }, value = "/register")
	@ApiOperation(value = "Create New User", notes = "Used For Creating New User", nickname = "createNewUser")
	@ApiResponses({ @ApiResponse(code = 201, message = "User Created"),
			@ApiResponse(code = 409, message = "User Already Exists In Database") })
	public ResponseEntity<?> createNewUser(
			@ApiParam(value = "User Request", required = true) @RequestBody final User user) {
		try {
			userService.saveUser(user);
			return ResponseEntity.status(HttpStatus.CREATED).body(user);
		} catch (UserAlreadyExistException userAlreadyExistException) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body(MessageFormat.format("User Registration Error {0}", userAlreadyExistException.getMessage()));
		}
	}

	@PostMapping(consumes = { MIME_JSON }, produces = { MIME_JSON }, value = "/login")
	@ApiOperation(value = "Login User", notes = "Used For Login User & Generate Token", nickname = "login")
	@ApiResponses({ @ApiResponse(code = 200, message = "Token Created,User Valid"),
			@ApiResponse(code = 400, message = "User Data Is Not Valid") })
	public ResponseEntity<?> login(@ApiParam(value = "User Request", required = true) @RequestBody final User user) {
		if (Objects.isNull(user.getUserId()) || Objects.isNull(user.getPassword())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("UserId & Password Are Mandatory.");
		}
		try {
			userService.findByUserIdAndPassword(user.getUserId(), user.getPassword());
		} catch (UserNotFoundException userNotFoundException) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(MessageFormat.format("Invalid Login Credential {0}", userNotFoundException.getMessage()));
		}
		return ResponseEntity.status(HttpStatus.OK).body(securityTokenService.generateSecurityToken(user));
	}

}
