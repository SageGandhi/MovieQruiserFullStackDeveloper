package fsd.moviecruiser.authenticator.service;

import fsd.moviecruiser.authenticator.exception.UserAlreadyExistException;
import fsd.moviecruiser.authenticator.exception.UserNotFoundException;
import fsd.moviecruiser.authenticator.repository.model.User;

public interface UserService {
	boolean saveUser(User user) throws UserAlreadyExistException;

	User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;
}
