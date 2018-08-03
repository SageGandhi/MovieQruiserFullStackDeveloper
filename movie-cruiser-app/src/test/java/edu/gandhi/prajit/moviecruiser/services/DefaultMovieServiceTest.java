package edu.gandhi.prajit.moviecruiser.services;

import static org.hamcrest.CoreMatchers.anything;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import java.time.LocalDate;
import java.util.Optional;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringRunner;
import edu.gandhi.prajit.moviecruiser.exception.MovieAlredayExistsException;
import edu.gandhi.prajit.moviecruiser.repository.MovieRepository;
import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

@RunWith(SpringRunner.class)
public class DefaultMovieServiceTest
{
	@Mock
	private MovieRepository movieRepository;
	private Movie movie;
	private Optional<Movie> optionalMovie;
	@InjectMocks
	private DefaultMovieService defaultMovieService;

	@Before
	public void setUp()
	{
		MockitoAnnotations.initMocks( this );
		this.movie = createMovie( 1, "The Shawshank Redemption", "1994", "https://www.imdb.com/title/tt0111161/?ref_=adv_li_i" );
		this.optionalMovie = Optional.of( this.movie );
	}

	private Movie createMovie(int id, String name, String comments, String posterPath)
	{
		Movie movie = new Movie();
		movie.setId( id );
		movie.setName( name );
		movie.setComments( comments );
		movie.setPosterPath( posterPath );
		movie.setReleaseDate( LocalDate.now().toString() );
		movie.setVoteAverage( (float)( Math.random() * 100 ) / 100 );
		movie.setVoteCount( (int)Math.ceil( Math.random() * 1000 ) );
		return movie;
	}

	@Test
	public void testCreateNewMovie() throws MovieAlredayExistsException
	{
		Mockito.when(movieRepository.save(Mockito.<Movie>any())).thenReturn(movie);
		Mockito.when(movieRepository.findById(Mockito.<Integer>any())).thenReturn(optionalMovie);
		defaultMovieService.createNewMovie( movie);
		
	}

	@Test
	public void testUpdateMovieInformation()
	{

	}

	@Test
	public void testDeleteMovieByMovieId()
	{

	}

	@Test
	public void testGetMovieByMovieId()
	{

	}

	@Test
	public void testGetAllMovies()
	{

	}
}
