package edu.gandhi.prajit.moviecruiser.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.gandhi.prajit.moviecruiser.exception.MovieAlredayExistsException;
import edu.gandhi.prajit.moviecruiser.exception.MovieNotFoundException;
import edu.gandhi.prajit.moviecruiser.repository.MovieRepository;
import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

@Service
public class DefaultMovieService implements MovieService {
	private final MovieRepository movieRepository;

	@Autowired
	public DefaultMovieService(final MovieRepository movieRepository) {
		this.movieRepository = movieRepository;
	}

	@Override
	public void createNewMovie(Movie movie,String userId) throws MovieAlredayExistsException {
		final Optional<Movie> optionalMovie = movieRepository.findByIdAndUserId(movie.getId(),userId);
		if (optionalMovie.isPresent()) {
			throw new MovieAlredayExistsException("Unable To Save Movie, Movie Already Exists In Your WatchList:" + movie);
		}
		movie.setUserId(userId);//Setting Field Here,Without Using Any Map
		movieRepository.save(movie);
	}

	@Override
	public Movie updateMovieInformation(Movie updateMovie,String userId) throws MovieNotFoundException {
		final Optional<Movie> optionalMovie = movieRepository.findByIdAndUserId(updateMovie.getId(),userId);

		final Movie optionalMovieIfExist = optionalMovie.orElseThrow(() -> new MovieNotFoundException(
				"Unable To Update Movie Comment, Movie Not Exists In Your WatchList:" + updateMovie));
		Optional.ofNullable(updateMovie.getComment()).ifPresent(optionalMovieIfExist::setComment);
		
		optionalMovieIfExist.setUserId(userId);//Setting Field Here,Without Using Any Map:Not Required
		movieRepository.save(optionalMovieIfExist);
		return optionalMovieIfExist;
	}

	@Override
	public void deleteMovieByMovieId(int id,String userId) throws MovieNotFoundException {
		final Optional<Movie> movie = movieRepository.findByIdAndUserId(id,userId);
		if (!movie.isPresent()) {
			throw new MovieNotFoundException("Unable To Delete Movie, Movie Id Not Exists In Your WatchList:" + id);
		}
		movie.ifPresent(movieRepository::delete);
	}

	@Override
	public Movie getMovieByMovieId(int id,String userId) throws MovieNotFoundException {
		final Optional<Movie> movie = movieRepository.findByIdAndUserId(id,userId);
		return movie.orElseThrow(
				() -> new MovieNotFoundException("Unable To Retrieve Movie, Movie Id Not Exists In Your WatchList:" + id));
	}

	@Override
	public List<Movie> getAllMovies(String userId) {
		return movieRepository.findByUserId(userId);
	}
}
