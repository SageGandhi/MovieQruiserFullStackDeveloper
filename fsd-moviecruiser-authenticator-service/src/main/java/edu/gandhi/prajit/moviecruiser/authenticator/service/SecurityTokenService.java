package edu.gandhi.prajit.moviecruiser.authenticator.service;

import java.util.Map;

import edu.gandhi.prajit.moviecruiser.authenticator.repository.model.User;

public interface SecurityTokenService {
	Map<String, String> generateSecurityToken(User user);
}
