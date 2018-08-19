package edu.gandhi.prajit.moviecruiser.authenticator.service;

import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserAlreadyExistException;
import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserNotFoundException;
import edu.gandhi.prajit.moviecruiser.authenticator.repository.model.User;

public interface UserService {
	boolean saveUser(User user) throws UserAlreadyExistException;

	User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;
}
