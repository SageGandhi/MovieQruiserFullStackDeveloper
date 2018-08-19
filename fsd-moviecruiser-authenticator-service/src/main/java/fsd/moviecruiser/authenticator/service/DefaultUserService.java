package fsd.moviecruiser.authenticator.service;

import java.text.MessageFormat;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fsd.moviecruiser.authenticator.exception.UserAlreadyExistException;
import fsd.moviecruiser.authenticator.exception.UserNotFoundException;
import fsd.moviecruiser.authenticator.repository.UserRepository;
import fsd.moviecruiser.authenticator.repository.model.User;

@Service
public class DefaultUserService implements UserService {
	private UserRepository userRepository;

	@Autowired
	public DefaultUserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public boolean saveUser(User user) throws UserAlreadyExistException {
		if (userRepository.findById(user.getUserId()).isPresent()) {
			throw new UserAlreadyExistException(
					MessageFormat.format("User With Id {0} Already Exists.", user.getUserId()));
		}
		userRepository.save(user);
		return true;
	}

	@Override
	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {
		final User userInRepository = userRepository.findByUserIdAndPassword(userId, password);
		if (Objects.isNull(userInRepository)) {
			throw new UserNotFoundException(MessageFormat
					.format("User With Id {0} Not Exists,Or Provide Valid UserId/Password Combination.", userId));
		}
		return userInRepository;
	}
}
