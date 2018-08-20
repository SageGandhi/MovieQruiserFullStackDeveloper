package edu.gandhi.prajit.moviecruiser.services;

import java.util.List;

import edu.gandhi.prajit.moviecruiser.exception.MovieAlredayExistsException;
import edu.gandhi.prajit.moviecruiser.exception.MovieNotFoundException;
import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

public interface MovieService {
	public void createNewMovie(final Movie movie,String userId) throws MovieAlredayExistsException;

	public Movie updateMovieInformation(final Movie movie,String userId) throws MovieNotFoundException;

	public void deleteMovieByMovieId(final int id,String userId) throws MovieNotFoundException;

	public Movie getMovieByMovieId(final int id,String userId) throws MovieNotFoundException;

	public List<Movie> getAllMovies(String userId);
}
