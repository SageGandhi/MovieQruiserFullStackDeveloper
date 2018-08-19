package fsd.moviecruiser.authenticator.service;

import java.util.Map;

import fsd.moviecruiser.authenticator.repository.model.User;

public interface SecurityTokenService {
	Map<String, String> generateSecurityToken(User user);
}
