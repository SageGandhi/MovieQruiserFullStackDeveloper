package fsd.moviecruiser.authenticator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import fsd.moviecruiser.authenticator.repository.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	// @Query("Select user from User user where userId = (?1) and password=(?2)")
	User findByUserIdAndPassword(String userId, String password);
}
