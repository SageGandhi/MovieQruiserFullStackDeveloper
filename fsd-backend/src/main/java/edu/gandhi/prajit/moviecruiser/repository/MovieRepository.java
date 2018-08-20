package edu.gandhi.prajit.moviecruiser.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
	Optional<Movie> findByIdAndUserId(int id, String userId);
	List<Movie> findByUserId(String userId);
}
