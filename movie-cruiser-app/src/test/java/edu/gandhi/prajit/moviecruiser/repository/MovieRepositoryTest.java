package edu.gandhi.prajit.moviecruiser.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;

import javax.transaction.Transactional;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional
public class MovieRepositoryTest
{
	@Autowired
	private MovieRepository movieRepository;
	private Movie movieFixture;
	
	@Before
	public void setUp() throws Exception
	{
		this.movieRepository.save(createMovie( 1, "The Shawshank Redemption", "1994", "https://www.imdb.com/title/tt0111161/?ref_=adv_li_i" ));
		this.movieRepository.save(createMovie( 2, "The Godfather", "1972", "https://www.imdb.com/title/tt0068646/?ref_=adv_li_i" )); 
		this.movieRepository.save(createMovie( 3, " The Dark Knight", "2008", "https://www.imdb.com/title/tt0468569/?ref_=adv_li_i" ) );
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
	public void testCreateNewMovie()
	{
		movieFixture = movieRepository.findById(1).orElse(null);
		assertThat( movieFixture).isNotNull();
		assertThat( "The Shawshank Redemption").isEqualToIgnoringCase( movieFixture.getName());
		assertThat( "1994").isEqualToIgnoringCase( movieFixture.getComments());
	}

	@Test
	public void testUpdateMovieInformation() 
	{
		movieFixture = movieRepository.findById(1).orElse(null);
		movieFixture.setVoteCount( movieFixture.getVoteCount()+25 );
		movieRepository.save(movieFixture);
		
		Movie movieActual = movieRepository.findById(1).orElse(null);
		assertThat( movieActual).isNotNull();
		
		assertThat( "The Shawshank Redemption").isEqualToIgnoringCase( movieActual.getName());
		assertThat(movieActual.getVoteCount()).isEqualTo( movieFixture.getVoteCount() );
	}

	@Test
	public void testDeleteMovieByMovieId() 
	{
		movieRepository.deleteById(1);
		assertThat(movieRepository.findById(1).orElse(null)).isNull();
	}

	@Test
	public void testGetMovieByMovieId()
	{
		final Movie movie = movieRepository.findById(1).orElse(null);
		assertThat(movie).isNotNull();
		assertThat( "The Shawshank Redemption").isEqualToIgnoringCase( movie.getName());
		assertThat( "1994").isEqualToIgnoringCase( movie.getComments());
	}

	@Test
	public void testGetAllMovies()
	{
		final List<Movie> movieList = movieRepository.findAll();
		assertThat(movieList).isNotNull();
		assertThat(movieList).hasSize(4);
	}
}