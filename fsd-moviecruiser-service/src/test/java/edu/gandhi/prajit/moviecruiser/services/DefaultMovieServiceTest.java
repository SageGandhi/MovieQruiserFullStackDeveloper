package edu.gandhi.prajit.moviecruiser.services;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import edu.gandhi.prajit.moviecruiser.exception.MovieAlredayExistsException;
import edu.gandhi.prajit.moviecruiser.repository.MovieRepository;
import edu.gandhi.prajit.moviecruiser.repository.entity.Movie;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = { DefaultMovieService.class })
public class DefaultMovieServiceTest {

	@MockBean
	private MovieRepository movieRepository;
	private Movie movieFixture;
	@Autowired
	private DefaultMovieService defaultMovieService;
	@Rule
	public ExpectedException expectedException = ExpectedException.none();

	private Movie createMovie(int id, String name, String comments, String posterPath) {
		Movie movie = new Movie();
		movie.setId(id);
		movie.setName(name);
		movie.setComments(comments);
		movie.setPosterPath(posterPath);
		movie.setReleaseDate(LocalDate.now().toString());
		movie.setVoteAverage((float) (Math.random() * 100) / 100);
		movie.setVoteCount((int) Math.ceil(Math.random() * 1000));
		return movie;
	}

	@Test(expected = MovieAlredayExistsException.class)
	public void testCreateNewMovie() throws MovieAlredayExistsException {
		this.movieFixture = createMovie(1, "The Shawshank Redemption", "1994",
				"https://www.imdb.com/title/tt0111161/?ref_=adv_li_i");
		when(this.movieRepository.findById(this.movieFixture.getId())).thenReturn(Optional.of(this.movieFixture));
		this.defaultMovieService.createNewMovie(this.movieFixture);
	}
	@Test
	public void testCreateNewMovie_Rule() throws MovieAlredayExistsException {
		this.movieFixture = createMovie(1, "The Shawshank Redemption", "1994",
				"https://www.imdb.com/title/tt0111161/?ref_=adv_li_i");
		when(this.movieRepository.findById(this.movieFixture.getId())).thenReturn(Optional.of(this.movieFixture));
		
		expectedException.expect(MovieAlredayExistsException.class);
		expectedException.expectMessage("Unable To Save Movie, Movie Already Exists In DataBase:"+this.movieFixture);
		
		this.defaultMovieService.createNewMovie(this.movieFixture);
	}
	@Test
	public void testCreateNewMovie_NotInDb() throws MovieAlredayExistsException {
		this.movieFixture = createMovie(1, "The Shawshank Redemption", "1994",
				"https://www.imdb.com/title/tt0111161/?ref_=adv_li_i");
		//
		when(this.movieRepository.findById(this.movieFixture.getId())).thenReturn(Optional.empty());
		when(this.movieRepository.save(this.movieFixture)).thenReturn(this.movieFixture);
		
		this.defaultMovieService.createNewMovie(this.movieFixture);
		
		verify(this.movieRepository,times(1)).findById(this.movieFixture.getId());
		verify(this.movieRepository,times(1)).save(this.movieFixture);
	}

	@Test
	public void testUpdateMovieInformation() {

	}

	@Test
	public void testDeleteMovieByMovieId() {

	}

	@Test
	public void testGetMovieByMovieId() {

	}

	@Test
	public void testGetAllMovies() {

	}
}