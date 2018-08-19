package edu.gandhi.prajit.moviecruiser.authenticator.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserAlreadyExistException;
import edu.gandhi.prajit.moviecruiser.authenticator.exception.UserNotFoundException;
import edu.gandhi.prajit.moviecruiser.authenticator.repository.UserRepository;
import edu.gandhi.prajit.moviecruiser.authenticator.repository.model.User;
import edu.gandhi.prajit.moviecruiser.authenticator.service.DefaultUserService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = { DefaultUserService.class })
public class DefaultUserServiceTest {
	@MockBean
	private UserRepository userRepository;
	@Autowired
	private DefaultUserService defaultUserService;

	@Test(expected = UserAlreadyExistException.class)
	public void testSaveUser_UserAlreadyExistException() throws UserAlreadyExistException {
		final User userToSave = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		when(userRepository.findById(userToSave.getUserId())).thenReturn(Optional.of(userToSave));

		defaultUserService.saveUser(userToSave);

		verify(this.userRepository, times(1)).findById(Mockito.any(String.class));
		verify(this.userRepository, times(0)).save(Mockito.any(User.class));
		verifyNoMoreInteractions(this.userRepository);
	}

	@Test
	public void testSaveUser() throws UserAlreadyExistException {
		final User userToSave = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		when(userRepository.findById(userToSave.getUserId())).thenReturn(Optional.empty());

		defaultUserService.saveUser(userToSave);

		verify(this.userRepository, times(1)).findById(Mockito.any(String.class));
		verify(this.userRepository, times(1)).save(Mockito.any(User.class));
		verifyNoMoreInteractions(this.userRepository);
	}

	@Test(expected = UserNotFoundException.class)
	public void testFindByUserIdAndPassword_UserNotFoundException() throws UserNotFoundException {
		final User userToGet = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		when(userRepository.findByUserIdAndPassword(ArgumentMatchers.anyString(), ArgumentMatchers.anyString()))
				.thenReturn(null);

		defaultUserService.findByUserIdAndPassword(userToGet.getUserId(), userToGet.getPassword());

		verify(this.userRepository, times(1)).findByUserIdAndPassword(ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString());
		verifyNoMoreInteractions(this.userRepository);
	}

	@Test
	public void testFindByUserIdAndPassword() throws UserNotFoundException {
		final User userToGet = new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd");
		when(userRepository.findByUserIdAndPassword(ArgumentMatchers.anyString(), ArgumentMatchers.anyString()))
				.thenReturn(userToGet);

		final User userToReceived = defaultUserService.findByUserIdAndPassword(userToGet.getUserId(),
				userToGet.getPassword());

		assertThat(userToGet).isEqualToComparingOnlyGivenFields(userToReceived, "userId", "fullName", "password");
		verify(this.userRepository, times(1)).findByUserIdAndPassword(ArgumentMatchers.anyString(),
				ArgumentMatchers.anyString());
		verifyNoMoreInteractions(this.userRepository);
	}
}