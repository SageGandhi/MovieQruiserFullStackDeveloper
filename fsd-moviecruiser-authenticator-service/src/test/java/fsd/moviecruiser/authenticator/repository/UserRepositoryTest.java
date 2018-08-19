package fsd.moviecruiser.authenticator.repository;

import static org.assertj.core.api.Assertions.assertThat;

import javax.transaction.Transactional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import fsd.moviecruiser.authenticator.repository.model.User;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.AUTO_CONFIGURED)
@Transactional
public class UserRepositoryTest {
	@Autowired
	private UserRepository userRepository;

	@Test
	public void testFindByUserIdAndPassword_Exist() {
		userRepository.save(new User("prajit.gandhi@cognizant.com", "Prajit Gandhi", "P@ssw0rd"));

		User userInRepo = userRepository.findByUserIdAndPassword("prajit.gandhi@cognizant.com", "P@ssw0rd");

		assertThat(userInRepo).isNotNull();
		assertThat(userInRepo.getCreationTime()).isNotNull();
		assertThat("Prajit Gandhi").isEqualToIgnoringCase(userInRepo.getFullName());
		assertThat("prajit.gandhi@cognizant.com").isEqualToIgnoringCase(userInRepo.getUserId());
		assertThat("P@ssw0rd").isEqualToIgnoringCase(userInRepo.getPassword());
	}

	@Test
	public void testFindByUserIdAndPassword_NotExist() {
		User userInRepo = userRepository.findByUserIdAndPassword("prajit.gandhi@cognizant.com", "P@ssw0rd");
		assertThat(userInRepo).isNull();
	}
}